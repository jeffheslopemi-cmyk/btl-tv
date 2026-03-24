export default function Shows() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>BTL TV Shows</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
        gap: "20px", marginTop: "20px"
      }}>
        <iframe src="[youtube.com](https://www.youtube.com/embed/ysz5S6PUM-U)"
          style={{ width: "100%", borderRadius: "10px", minHeight: 240 }}></iframe>
        <iframe src="[youtube.com](https://www.youtube.com/embed/jNQXAC9IVRw)"
          style={{ width: "100%", borderRadius: "10px", minHeight: 240 }}></iframe>
        <iframe src="[youtube.com](https://www.youtube.com/embed/tgbNymZ7vqY)"
          style={{ width: "100%", borderRadius: "10px", minHeight: 240 }}></iframe>
      </div>
    </div>
  );
}
