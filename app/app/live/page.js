"use client";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Live() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("https://livecdn.live247stream.com/btl/tv/playlist.m3u8");
      hls.attachMedia(videoRef.current);
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Live TV</h1>

      <video
        ref={videoRef}
        controls
        style={{
          width: "80%",
          maxWidth: "900px",
          borderRadius: "20px",
        }}
      />
    </div>
  );
}
