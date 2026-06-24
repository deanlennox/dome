## Git rules

- Always create and maintain an appropriate `.gitignore` file before the first commit.
- Never commit dependencies, build artifacts, secrets, environment files, logs, caches, IDE settings, or generated files.
- Respect the existing `.gitignore` and update it when new tooling/frameworks are added.
- Before every commit or push, verify ignored files are not staged.
- Never commit `.env`, API keys, tokens, passwords, certificates, or private credentials.
- Run `git status` before commit and ensure only intended files are included.