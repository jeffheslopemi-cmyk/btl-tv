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
    <div style={{ textAlign: "center", padding: "40px" }}>
      
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        Watch Faith, Hope & Inspiration Live
      </h1>

      <video
        ref={videoRef}
        controls
        style={{
          width: "80%",
          maxWidth: "800px",
          borderRadius: "20px",
        }}
      />

      <div style={{ marginTop: "20px" }}>
        <a href="/live">
          <button style={{ padding: "10px 20px", marginRight: "10px" }}>
            Watch Live
          </button>
        </a>

        <a href="/shows">
          <button style={{ padding: "10px 20px" }}>
            Explore Shows
          </button>
        </a>
      </div>

    </div>
  );
}
<a
  href="https://www.geef.nl/nl/doneer?charity=9949&backLink=https%3A%2F%2Fwww.geef.nl%2Fnl%2Fdoel%2Fbe-the-light-television%2Fover-ons"
  target="_blank"
>
  <button style={{ marginTop: "30px", padding: "12px 25px", background: "gold" }}>
    Donate Now
  </button>
</a>
