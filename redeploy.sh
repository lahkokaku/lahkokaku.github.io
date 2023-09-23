#!/usr/bin/env sh

set -e

rm -rf docs

npm run build

cd dist

cp index.html 404.html

cd ..

mv dist docs