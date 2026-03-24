export default function Shows() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Shows</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        <iframe src="https://www.youtube.com/embed/ysz5S6PUM-U"></iframe>
        <iframe src="https://www.youtube.com/embed/jNQXAC9IVRw"></iframe>
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
      </div>
    </div>
  );
}
