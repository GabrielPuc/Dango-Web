import { IoMdCloseCircle } from 'react-icons/io';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getStrokesIndexSelector } from '../../store/selectors';

const StrokesDialog = ({ toggleDialog, word }) => {
  const strokeIndex = useSelector(getStrokesIndexSelector());
  const symbolsInWord = word.split('');

  return (
    <div className="w-screen h-screen bg-black bg-opacity-50 fixed top-0 right-0 flex justify-center place-items-center">
      <div className="bg-slate text-white p-4 rounded-md shadow-md h-2/3 w-3/4 max-w-screen-lg overflow-scroll relative">
        <button
          className="text-3xl w-3/4 max-w-screen-lg pr-8 justify-end flex fixed"
          onClick={() => {
            toggleDialog();
          }}
        >
          <IoMdCloseCircle />
        </button>

        {symbolsInWord.map((symbol) =>
          strokeIndex.hasOwnProperty(symbol) ? (
            <div
              className="h-full w-full flex justify-center mb-4"
              key={symbol}
            >
              <img
                className="bg-dark text-white p-4 rounded-md shadow-md"
                src={'/kanji/' + strokeIndex[symbol]}
              />
            </div>
          ) : (
            <div>NO STROKE ORDER DATA</div>
          )
        )}
      </div>
    </div>
  );
};

export default StrokesDialog;
