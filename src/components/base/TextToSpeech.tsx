import React, { useState, useEffect } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);

  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;

    const u = new SpeechSynthesisUtterance(text);

    const voice = synth
      .getVoices()
      .find((_voice) => /ja[-_]JP/.test(_voice.lang));
    u.voice = voice;

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    }

    synth.speak(utterance);

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
  };

  return (
    <div>
      <button onClick={handlePlay}>
        <AiFillPlayCircle />
      </button>
    </div>
  );
};
export default TextToSpeech;
