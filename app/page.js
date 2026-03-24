"use client";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Home() {
  const ref = useRef(null);
  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("[livecdn.live247stream.com](https://livecdn.live247stream.com/btl/tv/playlist.m3u8)");
      hls.attachMedia(ref.current);
    }
  }, []);

  return (
    <main style={{ textAlign: "center", padding: "60px 20px" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        Watch Faith, Hope & Inspiration Live
      </h1>
      <p style={{ color: "#bbb" }}>
        Experience powerful messages from around the world
      </p>
      <video ref={ref} controls style={{
        width: "80%", maxWidth: "900px", borderRadius: "20px",
        marginTop: "30px", boxShadow: "0 0 40px rgba(0,0,0,.5)"
      }} />
      <div style={{ marginTop: "30px" }}>
        <a href="/live"><button style={{
          background: "#2563eb", color: "#fff", border: "none",
          padding: "12px 25px", borderRadius: "8px", marginRight: "8px"
        }}>Watch Live</button></a>
        <a href="/shows"><button style={{
          background: "#111", color: "#fff",
          border: "1px solid #333", padding: "12px 25px", borderRadius: "8px"
        }}>Explore Shows</button></a>
      </div>
    </main>
  );
}
