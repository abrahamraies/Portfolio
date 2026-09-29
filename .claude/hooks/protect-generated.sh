#!/bin/bash
# PreToolUse: block edits to generated/published files
f=$(jq -r '.tool_input.file_path // empty')
case "$f" in
  */docs/*|*/dist/*|*/package-lock.json)
    echo "Blocked: $f is generated/published output. Rebuild instead of editing it." >&2
    exit 2 ;;
esac
