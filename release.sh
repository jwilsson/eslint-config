#!/bin/bash

npm run version-all -- $1

NEW_VERSION=$(node -pe "require('./packages/eslint-config/package.json').version")

git commit -am "$NEW_VERSION"
git tag v$NEW_VERSION
git push
git push --tags

npm run publish-all
