#!/usr/bin/env bash
# Setup the site-agents build environment

set -euo pipefail

scriptsFolder=$(cd $(dirname "$0"); pwd)
cd "$scriptsFolder/.."

hash git 2>&- || { echo >&2 "I require git."; exit 1; }
hash npm 2>&- || { echo >&2 "I require node and npm."; exit 1; }

echo "Installing Node modules..."
npm install

echo "Building..."
npm run build

if [ ! -d dist/.git ]; then
  echo "Setting up 'dist' folder for publishing to GitHub pages..."
  rm -rf dist
  git clone -b gh-pages git@github.com:healthdatasafe/site-agents.git dist
fi

echo "
Setup complete. Run 'npm run deploy' to publish."
