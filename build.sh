# build vue app
cd client
npm run build
cd ..

# copy files
rm -r app/www/*
cp -r client/dist/* app/www/

# build apk
cd app
cordova build
cd ..
cp app/platforms/android/app/build/outputs/apk/debug/app-debug.apk app/dist/dietdraft.apk