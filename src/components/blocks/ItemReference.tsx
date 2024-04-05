import TextToSpeech from '../base/TextToSpeech';
export default function ItemReference({ content }) {
  return (
    <div className="rounded overflow-hidden shadow-lg px-6 py-4 font-bold mb-2 text-white text-center bg-dark">
      <div className="text-4xl flex justify-end">
        <TextToSpeech
          text={
            content.pronunciation == undefined
              ? content.symbol
              : content.pronunciation
          }
        />
      </div>
      <p className="text-3xl">{content.symbol}</p>
      {content.symbol != content.pronunciation ? (
        <p className="text-xl">{content.pronunciation}</p>
      ) : (
        <p></p>
      )}

      <p className="text-pinkBright mt-4 text-2xl">{content.meaning}</p>
    </div>
  );
}
