export default function ItemMenu({ content, click }) {
  return (
    <div
      className="rounded overflow-hidden shadow-lg px-8 py-6 font-bold text-xl mb-2 text-white text-center bg-dark"
      onClick={click}
    >
      {content.name}
    </div>
  );
}
