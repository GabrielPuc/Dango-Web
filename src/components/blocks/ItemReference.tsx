import ShowStrokesButton from '../base/ShowStrokesButton';
import TextToSpeech from '../base/TextToSpeech';

export default function ItemReference({ content }) {
  return (
    <div className="flex rounded overflow-hidden shadow-lg  text-white text-center bg-dark">
      <div className="px-6 py-4 font-bold mb-2 flex-none w-11/12">
        <p className="text-3xl">{content.symbol}</p>
        {content.symbol != content.pronunciation ? (
          <p className="text-xl">{content.pronunciation}</p>
        ) : (
          <p></p>
        )}

        <p className="text-pinkBright mt-4 text-2xl">{content.meaning}</p>
      </div>
      <div className="text-2xl justify-center flex-none w-1/12 h-full">
        <TextToSpeech
          text={
            content.pronunciation == undefined
              ? content.symbol
              : content.pronunciation
          }
        />
        <ShowStrokesButton word={content.symbol} />
      </div>
    </div>
  );
}
