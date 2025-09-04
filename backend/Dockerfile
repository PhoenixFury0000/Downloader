FROM node:18

# install yt-dlp + ffmpeg from apt
RUN apt-get update && apt-get install -y \
    ffmpeg \
    curl \
    && curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp \
    && chmod a+rx /usr/local/bin/yt-dlp

# set workdir
WORKDIR /app

# copy files
COPY package*.json ./
RUN npm install
COPY . .

# expose port
EXPOSE 8080

CMD ["npm", "start"]