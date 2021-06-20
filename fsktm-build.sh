rm -r ./build.zip
npm install
npm run build
cp -r build ./backend/public
zip ./build.zip ./build -r