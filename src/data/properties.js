import roseGardenImg from "../assets/rosegarden.png";
import medinaImg from "../assets/medina.jpg";

const PROPERTIES = [
  {
    name: "Rose Garden Marrakech",
    location: "Marrakech, Morocco",
    category: "Luxury Hotel & Spa",
    rooms: "207 Rooms & Suites",
    status: "Operating",
    website: "www.rosegardenmaroc.com",
    description:
      "A landmark luxury property in the heart of Marrakech, offering world-class hospitality with lush gardens, exceptional dining, and a premier spa experience. Managed by Octogone since inception, the Rose Garden has become a destination of choice for discerning travellers.",
    stats: [
      { label: "Rooms", value: "207" },
      { label: "Rating", value: "5★" },
      { label: "Reviews", value: "3,300+" },
      { label: "Status", value: "Operating" },
    ],
    img: roseGardenImg,
  },
  {
    name: "Médina Privilège Royal Riad & Spa",
    location: "Marrakech, Morocco",
    category: "5-Star Riad & Spa",
    rooms: "7 Suites",
    status: "Operating",
    website: "www.medinaprivilege.com",
    description:
      "A 5-star traditional riad dating to 1650, nestled in the heart of Marrakech's historic Medina adjacent to the Royal Palace. Offering 7 exclusive suites, a private hammam, heated jacuzzi, spa, and on-site restaurant — guests experience the space and privacy of owning their own piece of Moroccan heritage.",
    stats: [
      { label: "Suites", value: "7" },
      { label: "Rating", value: "5★" },
      { label: "Est.", value: "1650" },
      { label: "Status", value: "Operating" },
    ],
    img: medinaImg,
  },
];

export default PROPERTIES;