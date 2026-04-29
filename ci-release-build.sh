#!/usr/bin/env bash
set -e
CWD=$(pwd)

pnpm turbo run build --filter=@shiro/web

cd apps/web/.next
pwd
rm -rf cache
cp -r ../public ./standalone/public

cd ./standalone
echo ';process.title = "Shiro (NextJS)"' >>server.js
mkdir -p ./.next
mv ../static/ ./.next/static

cp $CWD/ecosystem.standalone.config.cjs ./ecosystem.config.js
cp $CWD/apps/web/.env.template .env

cd ..

mkdir -p $CWD/assets
rm -rf $CWD/assets/release.zip
zip --symlinks -r $CWD/assets/release.zip ./*
