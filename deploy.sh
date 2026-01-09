#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment..."

# 1. Install dependencies (in case there are new ones)
echo "📦 Installing dependencies..."
npm install

# 2. Build the project
echo "🛠️  Building project..."
npm run build

# 3. Copy files to production directory
# Target directory
TARGET_DIR="/var/www/cv"

echo "📂 Deploying to $TARGET_DIR..."

# Check if target directory exists, create if not
if [ ! -d "$TARGET_DIR" ]; then
    echo "Creating directory $TARGET_DIR..."
    sudo mkdir -p "$TARGET_DIR"
fi

# Copy files
sudo cp -r dist/* "$TARGET_DIR/"

# 4. Set permissions
echo "🔐 Setting permissions..."
sudo chown -R www-data:www-data "$TARGET_DIR"
sudo chmod -R 755 "$TARGET_DIR"

echo "✅ Deployment successful! (Don't forget to reload nginx if you changed config)"
