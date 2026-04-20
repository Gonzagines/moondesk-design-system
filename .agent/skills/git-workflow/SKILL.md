---
name: Git Workflow
description: Apply Git best practices automatically during development — branching, staging, committing, pushing, and maintaining a clean history with Conventional Commits. (Version 3.0)
---

# Git Workflow — v3.0

## Purpose

Maintain a clean, professional Git history by automatically detecting significant changes, creating feature branches, committing with clear Conventional Commits messages, pushing to the remote, and verifying deployments. This skill is designed to be applied **automatically by the agent** during development without manual intervention.

---

## Regla de Oro (Golden Rule)

**NUNCA** hagas un commit directo en `main` si el cambio implica más de una línea de texto o configuración básica. Las funcionalidades nuevas, fixes, y refactors **SIEMPRE** van por rama separada.

---

## 1. Detecting Significant Changes

The agent MUST evaluate after each task whether changes warrant a commit. A change is **significant** when it falls into any of these categories:

| Category | Examples | Commit Type |
|----------|----------|-------------|
| **New Feature** | New component, new page, new API endpoint, new functionality | `feat` |
| **Bug Fix** | Fixed broken behavior, corrected logic, resolved errors | `fix` |
| **Refactor** | Code restructure, extract component, rename, optimize without behavior change | `refactor` |
| **Documentation** | README update, comments, JSDoc, design docs, skill files | `docs` |
| **Styling** | CSS changes, formatting, whitespace, visual-only adjustments | `style` |
| **Maintenance** | Dependency updates, config changes, tooling, CI/CD | `chore` |
| **Performance** | Optimization, lazy loading, caching, bundle size reduction | `perf` |
| **Testing** | New tests, updated tests, test configuration | `test` |
| **UI/Architecture** | Design system changes, layout overhaul, architecture decisions | `feat` or `refactor` |

### Auto-detection triggers

The agent should check for uncommitted work when:

1. A meaningful unit of work is completed (feature, fix, component)
2. The user confirms changes are correct
3. Multiple related files have been modified without a commit
4. A conversation is about to end
5. Before starting a new, unrelated task
6. After successful verification (tests pass, dev server works)

---

## 2. When to Commit ✅

Commit after completing any of the following:

- A new feature or component is **functional and tested**
- A bug fix is **verified working**
- A UI/UX improvement is **visually confirmed**
- A refactor that **doesn't change behavior** is complete
- Documentation updates are finished
- Configuration or dependency changes are applied
- Design system tokens or specs have been updated
- A `.gitignore` or project config file is added/modified

---

## 3. When NOT to Commit ❌

**Never** commit when:

- Code has **syntax errors** or doesn't compile
- Temporary `console.log` / debug statements are still present
- An implementation is **half-finished** or in WIP state
- Tests are **failing** due to your changes
- `.env`, secrets, API keys, or credentials are staged
- Files contain `TODO`, `HACK`, `FIXME` markers indicating unfinished work
- Build artifacts (`dist/`, `build/`, `.next/`) would be included
- `node_modules/` or lock files from wrong package manager are present
- The dev server crashes or shows errors related to your changes

---

## 4. Git Workflow Steps

After completing a meaningful unit of work, run these steps **in order**:

### Step 1 — Review changes

```bash
git status
git diff --stat
```

Scan the output carefully. Confirm:
- No unintended files (build artifacts, `.env`, `node_modules/`, OS files)
- Only files related to the current task are modified
- No secret or sensitive data is present

### Step 2 — Verify `.gitignore` exists

Before the **first commit** in a project, confirm `.gitignore` covers at minimum:

```gitignore
# Dependencies
node_modules/

# Environment & Secrets
.env
.env.local
.env.production
.env.*.local

# Build output
.next/
dist/
build/
out/

# Logs
*.log
npm-debug.log*

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/settings.json
.idea/

# Misc
*.tgz
coverage/
```

If `.gitignore` doesn't exist, **create it first** before any other commit.

### Step 3 — Stage relevant files

```bash
git add <specific files or directories>
```

**Rules:**
- **Prefer targeted `git add`** over `git add .` to keep commits focused
- Group **related changes together** in a single commit
- Review staged files with `git diff --cached --stat` if in doubt
- **Never stage** `.env`, secrets, API keys, credentials, or build artifacts

### Step 4 — Write a Conventional Commit message

```bash
git commit -m "<type>: <short description in lowercase>"
```

#### Commit types reference

| Type | Use for | Example |
|------|---------|---------|
| `feat` | New functionality visible to the user | `feat: add password strength validation` |
| `fix` | Bug correction | `fix: resolve search not returning results` |
| `refactor` | Internal code improvement, no behavior change | `refactor: extract navbar into reusable component` |
| `style` | Formatting, whitespace, CSS-only changes | `style: update card hover animation` |
| `docs` | Documentation or comments | `docs: add component usage examples to README` |
| `chore` | Config, dependencies, tooling | `chore: update vite to v6.2` |
| `perf` | Performance improvement | `perf: lazy load dashboard charts` |
| `test` | Adding or updating tests | `test: add unit tests for auth flow` |

#### Commit message rules

1. **Lowercase** after the type prefix — `feat: add...` not `feat: Add...`
2. **Imperative mood** — "add feature" not "added feature" or "adding feature"
3. **Max 72 characters** for the subject line
4. **No period** at the end of the subject line
5. **Specific and descriptive** — explain *what* changed

#### ✅ Good commit messages

```
feat: add password strength validation to registration form
fix: resolve search not finding artists by location
refactor: extract navbar into reusable layout component
style: update artist card hover animation
docs: add design system color palette to README
chore: configure eslint with recommended rules
perf: optimize image loading with lazy load
```

#### ❌ Bad commit messages

```
update files          ← too vague
fix stuff             ← meaningless
WIP                   ← incomplete work shouldn't be committed
asdfasdf              ← obviously bad
changes               ← says nothing
feat: stuff           ← too generic
```

#### Optional: Scope and body for complex changes

For larger changes, use a scope and/or body:

```bash
git commit -m "feat(auth): add OAuth2 login with Google provider" -m "Implements Google OAuth2 flow using NextAuth. Includes session management and automatic profile creation on first login."
```

### Step 5 — Push to remote

```bash
git push origin <branch-name>
```

**Push timing:**
- After every 1–3 related commits
- At the end of a work session
- **Always push before ending a conversation**
- After any critical fix

### Step 6 — Verify push (optional but recommended)

```bash
git log origin/<branch-name> --oneline -3
```

Confirm the latest commit appears in the remote. If Vercel or a CI/CD system is connected, check for deployment triggers.

---

## 5. Branching Management

### Creating Feature Branches

Before starting any meaningful change, create a branch from `main`:

```bash
git checkout main
git pull origin main
git checkout -b <type>/<descriptive-name>
```

**Branch naming convention:**

| Pattern | Example |
|---------|---------|
| `feat/<feature-name>` | `feat/user-dashboard` |
| `fix/<bug-description>` | `fix/login-redirect-loop` |
| `refactor/<area>` | `refactor/api-error-handling` |
| `docs/<topic>` | `docs/design-system-tokens` |
| `chore/<task>` | `chore/update-dependencies` |

### Working on a Branch

1. Make changes and commit frequently within the branch
2. Keep commits small and focused
3. Push the branch regularly: `git push origin <branch-name>`

### Merging to Main

Once the feature is complete and verified:

```bash
git checkout main
git pull origin main
git merge <branch-name>
git push origin main
```

### Cleanup

After a successful merge, delete the local branch:

```bash
git branch -d <branch-name>
```

---

## 6. Commit Granularity Guidelines

- **One logical change per commit.** Don't mix a feature with an unrelated fix.
- **Small is better.** A commit that touches 2–5 files is ideal.
- **If touching 15+ files**, consider splitting into multiple commits.
- **Group by intent.** All files for "add search" go in one commit; a CSS fix goes in another.
- **Separate concerns.** Config changes get their own commit, not bundled with features.

---

## 7. Safety Checks

Before every `git add`, the agent MUST verify:

| Check | How to verify | Action if fails |
|-------|--------------|-----------------|
| No secrets staged | `git status` — look for `.env*` files | Remove from staging, add to `.gitignore` |
| No debug code | Search for `console.log`, `debugger`, temporary comments | Remove before committing |
| No TODO/HACK markers | Search for `TODO`, `HACK`, `FIXME` | Complete the work or remove markers |
| Code compiles | Run `npm run dev` or equivalent | Fix errors before committing |
| No build artifacts | Check for `dist/`, `build/`, `.next/` | Add to `.gitignore` |
| No OS files | Check for `.DS_Store`, `Thumbs.db` | Add to `.gitignore` |

---

## 8. Complete Example Session

```bash
# 1. Start new feature
git checkout main
git pull origin main
git checkout -b feat/design-tokens-page

# 2. Work on the feature... (agent creates/edits files)

# 3. Review changes
git status
git diff --stat

# 4. Stage relevant files
git add src/pages/tokens.tsx src/styles/tokens.css

# 5. Commit with descriptive message
git commit -m "feat: add design tokens documentation page with color palette"

# 6. Continue working... fix a small styling issue
git add src/styles/tokens.css
git commit -m "style: adjust token card spacing and hover effects"

# 7. Push branch
git push origin feat/design-tokens-page

# 8. Merge to main (after verification)
git checkout main
git pull origin main
git merge feat/design-tokens-page
git push origin main

# 9. Cleanup
git branch -d feat/design-tokens-page
```

---

## 9. Quick Decision Flowchart

```
Changes made?
  ├── YES → Are changes complete and working?
  │     ├── YES → Are there secrets or debug code?
  │     │     ├── YES → Clean up first, then commit
  │     │     └── NO → ✅ Safe to commit
  │     │           ├── Single logical change? → One commit
  │     │           └── Multiple unrelated changes? → Split into commits
  │     └── NO → Do NOT commit. Continue working.
  └── NO → Nothing to do.
```

---

## 10. Automatic Trigger Rules

The agent MUST apply this skill automatically when:

1. ✅ A task is completed and verified working
2. ✅ The user confirms changes are correct
3. ✅ Multiple related changes exist without a commit
4. ✅ A conversation is about to end
5. ✅ Before starting a new, unrelated task
6. ✅ After successful verification (tests pass, dev server runs)

The agent should **proactively suggest** committing when significant work is done, rather than waiting to be asked.

---

## 11. Recovery Commands

If something goes wrong:

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Unstage a file
git reset HEAD <file>

# Discard changes to a file
git checkout -- <file>

# View commit history
git log --oneline -10
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Initial | Basic commit workflow |
| 2.0 | — | Added branching management, golden rule |
| 3.0 | 2026-04-20 | Complete rewrite: auto-detection triggers, safety checks, decision flowchart, granularity guidelines, recovery commands, comprehensive examples |
