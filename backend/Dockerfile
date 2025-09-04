# Use Node.js 20 full image (not slim to avoid npm errors)
FROM node:20

# Install ffmpeg + yt-dlp
RUN apt-get update && apt-get install -y \
    ffmpeg \
    curl \
    ca-certificates \
    && curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp \
    && chmod a+rx /usr/local/bin/yt-dlp \
    && rm -rf /var/lib/apt/lists/*

# Set workdir
WORKDIR /app

# Copy package.json first
COPY package.json package-lock.json* ./

# ✅ Install deps (no dev dependencies needed in production)
RUN npm install --omit=dev || npm install

# Copy rest of the app
COPY . .

# Expose port
EXPOSE 8080

# Start app
CMD ["npm", "start"]