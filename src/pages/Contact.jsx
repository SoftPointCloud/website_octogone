import { useMemo, useState } from "react";
import LogoIcon from "../components/LogoIcon";
import Button from "../components/Button";
import COLORS from "../data/colors";

const CONTACT_INFO = [
  { label: "Location", value: "Marrakech, Morocco" },
];

const INQUIRY_TYPES = [
  "Investment opportunities",
  "Hotel management partnerships",
  "Development projects",
  "General inquiries",
];

const CONTACT_EMAIL = "cj@softpoint.io";
const FORM_SUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`;

const STORAGE_KEY = "octogone_contact_last_submit";
const MIN_MS_BEFORE_SUBMIT = 3500;
const RATE_LIMIT_MS = 90_000;
const MIN_MESSAGE_LEN = 20;
const MAX_MESSAGE_LEN = 8000;
const MAX_URLS_IN_MESSAGE = 8;

function isValidEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(s.trim());
}

function countUrls(s) {
  return (s.match(/https?:\/\//gi) || []).length;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [pageLoadTime] = useState(() => Date.now());

  const isSubmittable = useMemo(() => {
    if (sending) return false;
    const name = form.name.trim();
    const email = form.email.trim();
    const msg = form.message.trim();
    if (!name || !email || !msg) return false;
    if (!isValidEmail(email)) return false;
    if (msg.length < MIN_MESSAGE_LEN || msg.length > MAX_MESSAGE_LEN) return false;
    if (countUrls(msg) > MAX_URLS_IN_MESSAGE) return false;
    return true;
  }, [form.name, form.email, form.message, sending]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (honeypot.trim()) {
      setSent(true);
      return;
    }

    if (Date.now() - pageLoadTime < MIN_MS_BEFORE_SUBMIT) {
      setError("Please wait a moment before sending.");
      return;
    }

    const last = Number(localStorage.getItem(STORAGE_KEY) || 0);
    if (last && Date.now() - last < RATE_LIMIT_MS) {
      setError("You've recently sent a message. Please wait before trying again.");
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please complete all required fields.");
      return;
    }

    if (!isValidEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const msg = form.message.trim();
    if (msg.length < MIN_MESSAGE_LEN) {
      setError(`Please write a bit more detail (at least ${MIN_MESSAGE_LEN} characters).`);
      return;
    }
    if (msg.length > MAX_MESSAGE_LEN) {
      setError("Message is too long. Please shorten it.");
      return;
    }
    if (countUrls(msg) > MAX_URLS_IN_MESSAGE) {
      setError("Too many links in your message. Please reduce them and try again.");
      return;
    }

    setSending(true);
    try {
      const name = form.name.trim();
      const email = form.email.trim();
      const company = form.company.trim();

      const res = await fetch(FORM_SUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Full name": name,
          Email: email,
          "Company / organization": company || "—",
          Message: msg,
          _subject: `Octogone website — message from ${name}`,
          _replyto: email,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(typeof data.message === "string" ? data.message : "Could not send your message. Please try again.");
        return;
      }

      localStorage.setItem(STORAGE_KEY, String(Date.now()));
      setSent(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <section style={{ background: COLORS.navy, paddingTop: 100 }}>
      {/* Page header */}
      <div style={{ textAlign: "center", padding: "60px 24px 48px" }}>
        <div className="label" style={{ color: COLORS.teal, marginBottom: 20 }}>
          Contact
        </div>
        <h1
          className="serif"
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            color: COLORS.white,
            fontWeight: 400,
            margin: "0 0 16px",
          }}
        >
          Start a Conversation
        </h1>
        <p
          style={{
            fontSize: 15,
            color: COLORS.textMuted,
            maxWidth: 500,
            margin: "0 auto",
            fontWeight: 300,
            lineHeight: 1.7,
          }}
        >
          We're always open to discussing new opportunities. Tell us what you
          have in mind and we'll be in touch.
        </p>
      </div>

      {/* Contact content */}
      <div className="container-sm" style={{ paddingBottom: 80 }}>
        <div className="contact-grid">
          {/* Sidebar */}
          <div className="contact-sidebar">
            <div style={{ marginBottom: 40 }}>
              <div
                className="label-sm"
                style={{ color: COLORS.gold, letterSpacing: 3, marginBottom: 20 }}
              >
                Get In Touch
              </div>
              {CONTACT_INFO.map((item, i) => (
                <div key={i} style={{ marginBottom: 20 }}>
                  <div
                    className="label-sm"
                    style={{ color: COLORS.textMuted, marginBottom: 4 }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: 15, color: COLORS.white, fontWeight: 300 }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div
                className="label-sm"
                style={{ color: COLORS.gold, letterSpacing: 3, marginBottom: 16 }}
              >
                Inquiries Welcome
              </div>
              {INQUIRY_TYPES.map((item, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: 13,
                    color: COLORS.textMuted,
                    marginBottom: 10,
                    fontWeight: 300,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      width: 4,
                      height: 4,
                      background: COLORS.teal,
                      transform: "rotate(45deg)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40 }}>
              <div
                className="label-sm"
                style={{ color: COLORS.gold, letterSpacing: 3, marginBottom: 16 }}
              >
                Trusted By
              </div>
              <div style={{ fontSize: 13, color: COLORS.textMuted, fontWeight: 300, marginBottom: 8 }}>
                Over 3,300 guests reviewed across our portfolio
              </div>
              <div style={{ fontSize: 13, color: COLORS.textMuted, fontWeight: 300 }}>
                95% average occupancy rate
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form">
            {sent ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <LogoIcon size={44} />
                <h3
                  className="serif"
                  style={{
                    fontSize: 24,
                    color: COLORS.white,
                    fontWeight: 400,
                    margin: "20px 0 12px",
                  }}
                >
                  Thank You
                </h3>
                <p style={{ fontSize: 14, color: COLORS.textMuted, fontWeight: 300 }}>
                  We'll be in touch within 48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative" }}
              >
                <div className="contact-honeypot-wrap" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <div>
                    <input
                      className="form-input"
                      name="name"
                      autoComplete="name"
                      placeholder="Full Name *"
                      required
                      aria-required="true"
                      value={form.name}
                      onChange={update("name")}
                    />
                  </div>
                  <div>
                    <input
                      className="form-input"
                      name="email"
                      autoComplete="email"
                      placeholder="Email *"
                      type="email"
                      inputMode="email"
                      required
                      aria-required="true"
                      value={form.email}
                      onChange={update("email")}
                    />
                  </div>
                </div>

                <input
                  className="form-input"
                  name="organization"
                  autoComplete="organization"
                  placeholder="Company / Organization"
                  value={form.company}
                  onChange={update("company")}
                />

                <textarea
                  className="form-input"
                  name="message"
                  placeholder="Your Message *"
                  rows={6}
                  required
                  aria-required="true"
                  minLength={MIN_MESSAGE_LEN}
                  maxLength={MAX_MESSAGE_LEN}
                  value={form.message}
                  onChange={update("message")}
                  style={{ resize: "vertical" }}
                />

                {error ? (
                  <div
                    role="alert"
                    style={{
                      fontSize: 13,
                      color: "#e8a598",
                      fontWeight: 400,
                      lineHeight: 1.5,
                    }}
                  >
                    {error}
                  </div>
                ) : null}

                <Button
                  variant="filled"
                  type="submit"
                  disabled={!isSubmittable}
                  style={{ alignSelf: "flex-start" }}
                >
                  {sending ? "Sending…" : "Send Message"}
                </Button>

                <div style={{ fontSize: 11, color: COLORS.textMuted, fontWeight: 300 }}>
                  * Required fields. We typically respond within 48 hours.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
