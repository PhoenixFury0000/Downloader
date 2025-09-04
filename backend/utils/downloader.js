import { spawn } from "child_process";
import { PassThrough } from "stream";

/**
 * Downloads media using yt-dlp
 * @param {string} url - Media URL (YouTube, Instagram, Pinterest, TikTok, etc.)
 * @param {string} format - "mp3" or "mp4"
 * @returns {ReadableStream} - Stream of the file
 */
export function downloadMedia(url, format = "mp4") {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();

    // yt-dlp command
    const args =
      format === "mp3"
        ? ["-x", "--audio-format", "mp3", "-o", "-", url]
        : ["-f", "best", "-o", "-", url];

    const ytProcess = spawn("yt-dlp", args);

    ytProcess.stdout.pipe(output);

    ytProcess.stderr.on("data", (data) => {
      console.error(`yt-dlp error: ${data}`);
    });

    ytProcess.on("error", (err) => reject(err));

    ytProcess.on("close", (code) => {
      if (code !== 0) {
        reject(new Error("yt-dlp failed"));
      } else {
        resolve(output);
      }
    });
  });
}