#!/bin/bash
# SessionStart: install deps in remote (web) sessions
[ "$CLAUDE_CODE_REMOTE" = "true" ] || exit 0
cd "$CLAUDE_PROJECT_DIR" || exit 0
npm ci --no-audit --no-fund >&2
