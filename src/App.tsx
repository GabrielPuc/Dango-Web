import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWordRequest } from './store/content/actions';
import {
  getPendingSelector,
  getWordsSelector,
  getErrorSelector,
} from './store/content/selectors';

export default function App() {
  /*const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const words = useSelector(getWordsSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchWordRequest());
  }, []);

  return (
    <div style={{ padding: '15px' }}>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        words.map((word, index) => (
          <div style={{ marginBottom: '10px' }} key={word.symbol}>
            {++index}. {word.symbol}
          </div>
        ))
      )}
    </div>
  );*/

  return <div>Dango Web Using Vite React</div>;
}
