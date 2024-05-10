import { BiHomeSmile } from 'react-icons/bi';
import TextToSpeech from '../base/TextToSpeech';

function Home() {
  const now = new Date();
  const textDate = now.toLocaleDateString('ja-JP', { dateStyle: 'full' });
  return (
    <div className="text-center justify-center text-5xl text-gray-300 h-full w-full text-4xl pt-4">
      <p className="flex justify-center mt-10 text-9xl text-pinkBright">
        <BiHomeSmile />
      </p>

      <div className="items-center place-content-center content-center place-items-center flex">
        <p>{textDate}</p>
        <div className="w-max rounded">
          <TextToSpeech text={textDate} />
        </div>
      </div>
    </div>
  );
}

export default Home;
