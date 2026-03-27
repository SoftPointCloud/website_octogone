## Octogone Hotels website

Vite + React static website for `www.octogonehotels.com`.

## GitHub deployment setup (main only)

This repository now includes GitHub Actions workflows:
- `.github/workflows/deploy.yml`
- `.github/workflows/secret-guard.yml`

### 1) Configure GitHub Environments

Create one environment in GitHub:
- `production`

### 2) Add environment secrets

- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_SERVER_DIR`
- `FTP_PROTOCOL` (optional, default: `ftps`)
- `FTP_PORT` (optional, default: `21`)

### 3) Deployment behavior

- Push to `main` -> build + deploy to production
- Manual deploy -> run Actions workflow **Deploy website (main only)** from `main`
- Runner type -> GitHub-hosted runner (`ubuntu-latest`)
- Vite deploy mode -> uploads `dist/` only (not full source code)
- If VPN/FTP is unreachable from runner, workflow skips deploy automatically

## Security check result

Credential exposure was found in release tags `1.0` and `2.0` in legacy PHP files:
- `contact-process.php`
- `email.php`

Hardcoded SMTP username/password existed in those tagged snapshots.

Recommended immediate actions:
- Rotate that SMTP account password now.
- Remove/replace exposed credentials in any still-deployed legacy PHP code.
- If needed, clean old git history/tags after rotation.
