import { useState } from 'react';
import { MdOutlineDraw } from 'react-icons/md';
import StrokesDialog from '../blocks/StrokesDialog';

const ShowStrokesButton = ({ word }) => {
  const [popUp, setPopUp] = useState(false);

  function handleClick() {
    setPopUp(!popUp);
  }

  return (
    <div
      onClick={handleClick}
      className="bg-pinkBright text-slate h-1/2 w-full flex justify-center place-items-center rounded cursor-pointer"
    >
      {popUp && <StrokesDialog toggleDialog={handleClick} word={word} />}
      <MdOutlineDraw />
    </div>
  );
};
export default ShowStrokesButton;
