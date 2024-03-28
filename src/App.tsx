import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWordRequest } from './store/content/actions';
import {
  getPendingSelector,
  getWordsSelector,
  getErrorSelector,
} from './store/content/selectors';

import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Reference from './components/pages/Reference/Reference';

import '../index.css';
import useNavigation from './hooks/useNavigations';
import navigationData from './data/navigations';

import Navbar from './components/base/Navbar/Navbar';
import Tabbar from './components/base/Tabbar/Tabbar';

export default function App() {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const words = useSelector(getWordsSelector);
  const error = useSelector(getErrorSelector);
  const { currentRoute, setCurrentRoute } = useNavigation();

  /*useEffect(() => {
    dispatch(fetchWordRequest('hiragana'));
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

  return (
    <div className="bg-dark h-screen">
      <Navbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <Tabbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <div className="App">
        <Routes>
          <Route path="/">
            <Route path="home" element={<Home />} />
            <Route path="reference" element={<Reference />} />
            <Route path="practice" element={<Reference />} />
            <Route index element={<Navigate to="home" replace />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
