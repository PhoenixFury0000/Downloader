# Use Node.js 20 LTS slim image
FROM node:20-slim

# Install yt-dlp and ffmpeg
RUN apt-get update && apt-get install -y \
    ffmpeg \
    curl \
    ca-certificates \
    && curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp \
    && chmod a+rx /usr/local/bin/yt-dlp \
    && rm -rf /var/lib/apt/lists/*

# Set workdir
WORKDIR /app

# Copy only package.json first for caching
COPY package.json ./

# Install production deps
RUN npm install --omit=dev

# Copy rest of the app
COPY . .

# Expose port
EXPOSE 8080

# Run server
CMD ["npm", "start"]