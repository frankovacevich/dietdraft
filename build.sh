# Build Vue app
cd client
npm run build -- --base=/
cd ..

# Copy files
cp -r client/dist/* apk/DietDraft/www/

# Build apk
cd apk/DietDraft
cordova build
cd ../..

# Build Vue again with another base
cd client
npm run build -- --base=/client/dist/
cd ..