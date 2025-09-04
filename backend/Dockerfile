FROM node:20

# Install ffmpeg + yt-dlp
RUN apt-get update && apt-get install -y \
    ffmpeg \
    curl \
    ca-certificates \
    && curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp \
    && chmod a+rx /usr/local/bin/yt-dlp \
    && rm -rf /var/lib/apt/lists/*

# Set work directory inside container
WORKDIR /app

# Copy package.json (same folder as Dockerfile)
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev || npm install

# Copy the rest of the backend files
COPY . .

# Expose backend port
EXPOSE 8080

# Start server
CMD ["npm", "start"]