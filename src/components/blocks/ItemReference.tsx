export default function ItemReference({ content, click }) {
  return (
    <div
      className="rounded overflow-hidden shadow-lg px-6 py-4 font-bold mb-2 text-white text-center bg-dark"
      onClick={click}
    >
      <p className="text-2xl">{content.symbol}</p>
      {content.symbol != content.pronunciation ? (
        <p className="text-xl">{content.pronunciation}</p>
      ) : (
        <p></p>
      )}

      <p className="text-pinkBright mt-4 text-2xl">{content.meaning}</p>
    </div>
  );
}
