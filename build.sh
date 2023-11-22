# Build Vue app
cd client
npm run build
cd ..

# Copy files
cp -r client/dist/* apk/DietDraft/www/

# Build apk
cd apk/DietDraft
cordova build
cd ../..
