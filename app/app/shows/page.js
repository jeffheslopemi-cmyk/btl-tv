export default function Shows() {
  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Shows</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <iframe className="w-full h-52 rounded-xl" src="https://www.youtube.com/embed/ysz5S6PUM-U"></iframe>

        <iframe className="w-full h-52 rounded-xl" src="https://www.youtube.com/embed/jNQXAC9IVRw"></iframe>

        <iframe className="w-full h-52 rounded-xl" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>

      </div>
    </div>
  );
}
