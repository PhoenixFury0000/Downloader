FROM node:20

# install yt-dlp + ffmpeg
RUN apt-get update && apt-get install -y \
    ffmpeg \
    curl \
    ca-certificates \
    && curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp \
    && chmod a+rx /usr/local/bin/yt-dlp \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# 👇 Copy from backend folder
COPY backend/package*.json ./

RUN npm install --omit=dev || npm install

# 👇 Copy all backend source files
COPY backend ./

EXPOSE 8080
CMD ["npm", "start"]