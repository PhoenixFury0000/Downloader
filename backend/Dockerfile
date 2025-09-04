FROM node:20

# Install ffmpeg + yt-dlp
RUN apt-get update && apt-get install -y \
    ffmpeg \
    curl \
    ca-certificates \
    && curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp \
    && chmod a+rx /usr/local/bin/yt-dlp \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package.json first
COPY package.json ./

# ✅ Just run npm install normally
RUN npm install

# Copy the rest of the backend files
COPY . .

EXPOSE 8080
CMD ["npm", "start"]