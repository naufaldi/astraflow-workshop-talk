#!/usr/bin/env bash
# Export every slide to PNG, the deck to PDF, and build a contact sheet.
set -euo pipefail
cd "$(dirname "$0")"
rm -rf exports && mkdir -p exports
npx slidev export --format png --output exports --timeout 60000 --wait 1500
for f in exports/*.png; do n=$(basename "$f" .png); mv "$f" "exports/slide-$(printf %02d "$n").png"; done
npx slidev export --output slides-export.pdf --timeout 60000 --wait 1500
montage exports/slide-*.png -tile 4x -geometry 490x276+6+6 -background '#E2E8F0' contact-sheet.jpg
