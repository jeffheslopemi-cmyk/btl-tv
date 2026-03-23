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
      <div className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-blue-500">BTL TV</h1>
        <div className="space-x-6">
          <a href="/">Home</a>
          <a href="/live">Live</a>
          <a href="/shows">Shows</a>
        </div>
      </div>

      {/* HERO */}
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Faith. Hope. Live.
        </h1>
        <p className="text-gray-400">
          Watch BTL TV anywhere in the world
        </p>
      </div>

      {/* VIDEO */}
      <div className="flex justify-center">
        <video
          ref={videoRef}
          controls
          className="w-[80%] max-w-4xl rounded-2xl shadow-2xl"
        />
      </div>

      {/* BUTTONS */}
      <div className="text-center mt-8 space-x-4">
        <a href="/live">
          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
            Watch Live
          </button>
        </a>

        <a href="/shows">
          <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800">
            Explore Shows
          </button>
        </a>
      </div>

    </div>
  );
}
