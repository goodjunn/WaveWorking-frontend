#!/usr/bin/env sh

# 發生錯誤時終止
set -e

# 構建
yarn run build

# 進入構建文件夾
cd dist

# 放置 .nojekyll 以繞過 Jekyll 的處理。
echo > .nojekyll

# 如果你要部署到自定義域名
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://Junmanji.github.io
# git push -f git@github.com:Junmanji/Junmanji.github.io.git main

# 如果你要部署在 https://Junmanji.github.io/WaveWorking-frontend
git push -f git@github.com:Junmanji/WaveWorking-frontend.git main:gh-DemoPages

cd -