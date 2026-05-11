#!/usr/bin/env bash
set -e

CONTENT_REPO="${CONTENT_REPO:-../NRP-CZ_documentation}"
SRC="$CONTENT_REPO/content/docs/end_users/catch-all-data-repository"
IMG_SRC="$CONTENT_REPO/public/img"

cp "$SRC"/*.mdx content/catch-all-data-repository/
cp "$SRC"/meta.json content/catch-all-data-repository/
echo "Synced MDX files from $SRC"

mkdir -p public/img
cp -r "$IMG_SRC"/. public/img/
echo "Synced images from $IMG_SRC"
