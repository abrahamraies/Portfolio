#!/bin/bash
# PostToolUse: typecheck after edits to src/**/*.ts
f=$(jq -r '.tool_input.file_path // empty')
case "$f" in
  */src/*.ts) ;;
  *) exit 0 ;;
esac
cd "$CLAUDE_PROJECT_DIR" || exit 0
[ -d node_modules ] || exit 0
out=$(npx --no-install tsc --noEmit -p tsconfig.app.json 2>&1) || { echo "$out" >&2; exit 2; }
