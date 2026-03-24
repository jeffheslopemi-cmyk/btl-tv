"use client";
import Hls from "hls.js";
import { useRef, useEffect } from "react";

export default function Live() {
  const ref = useRef(null);
  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("[livecdn.live247stream.com](https://livecdn.live247stream.com/btl/tv/playlist.m3u8)");
      hls.attachMedia(ref.current);
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>BTL TV Live</h1>
      <video ref={ref} controls style={{
        width: "80%", borderRadius: "20px", marginTop: "20px"
      }} />
    </div>
  );
}

