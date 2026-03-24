"use client";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("https://livecdn.live247stream.com/btl/tv/playlist.m3u8");
      hls.attachMedia(videoRef.current);
    }
  }, []);

  return (
    <div>

      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: "1px solid #111"
      }}>
        <h2 style={{ color: "#3b82f6" }}>BTL TV</h2>
        <div>
          <a href="/" style={{ marginRight: 20 }}>Home</a>
          <a href="/live" style={{ marginRight: 20 }}>Live</a>
          <a href="/shows">Shows</a>
        </div>
      </div>

      {/* HERO */}
      <div style={{
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "50px", marginBottom: 20 }}>
          Faith. Hope. Live.
        </h1>
        <p style={{ color: "#aaa" }}>
          Watch BTL TV anywhere in the world
        </p>
      </div>

      {/* VIDEO */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <video
          ref={videoRef}
          controls
          style={{
            width: "80%",
            maxWidth: "900px",
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)"
          }}
        />
      </div>

      {/* BUTTONS */}
      <div style={{
        textAlign: "center",
        marginTop: "30px"
      }}>
        <a href="/live">
          <button style={{
            padding: "12px 25px",
            marginRight: "10px",
            background: "#2563eb",
            border: "none",
            color: "white",
            borderRadius: "8px"
          }}>
            Watch Live
          </button>
        </a>

        <a href="/shows">
          <button style={{
            padding: "12px 25px",
            background: "#111",
            border: "1px solid #333",
            color: "white",
            borderRadius: "8px"
          }}>
            Explore Shows
          </button>
        </a>
      </div>

    </div>
  );
}
