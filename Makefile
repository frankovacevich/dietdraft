.PHONY: dev build_vue copy_files build_apk all clean

# Run the local server for development
dev:
	@echo "Starting the development server..."
	cd client && npm run serve

# Build the Vue app
build_vue:
	@echo "Building the Vue app..."
	cd client && npm run build

# Copy files to the appropriate directory
copy_files:
	@echo "Copying files..."
	rm -rf app/www/*
	cp -r client/dist/* app/www/

# Build the APK
build_apk:
	@echo "Building the APK..."
	cd app && cordova build
	cp app/platforms/android/app/build/outputs/apk/debug/app-debug.apk app/dist/dietdraft.apk

# Clean the build artifacts
clean:
	@echo "Cleaning up..."
	rm -rf app/www/* client/dist/* app/dist/dietdraft.apk

# Default target to run all steps
all: clean build_vue copy_files build_apk

