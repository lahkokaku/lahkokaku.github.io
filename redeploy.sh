#!/usr/bin/env sh

set -e

npm run build

cd docs

cp index.html 404.html