# 新規作成時
echo "# nextjs-sports-reception" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mkApproach/nextjs-sports-reception.git
git push -u origin main

# 変更・追加時

git init
git add .
git status
git commit -m 'firstCommit'
git branch -M main
git push -u origin main