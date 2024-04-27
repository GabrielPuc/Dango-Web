import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchConfigRequest,
  fetchWordRequest,
  fetchVerbsRequest,
} from './store/actions';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/pages/Home';
import ContentMenu from './components/pages/ContentMenu';
import Navbar from './components/base/Navbar';
import Tabbar from './components/base/Tabbar';

import useNavigation from './hooks/useNavigations';
import navigationData from './data/navigations';
import '../index.css';
import Reference from './components/pages/Reference';
import NotFound from './components/pages/NotFound';
import PageInConstruction from './components/pages/PageInConstruction';
import VerbList from './components/pages/VerbList';
import Playground from './components/pages/Playground';

export default function App() {
  const dispatch = useDispatch();
  const { currentRoute, setCurrentRoute } = useNavigation();

  useEffect(() => {
    dispatch(fetchConfigRequest());
    dispatch(fetchWordRequest());
    dispatch(fetchVerbsRequest());
  }, []);
  return (
    <div className="bg-slate h-screen">
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
          <Route path="*" element={<NotFound />} />
          <Route path="/">
            <Route path="home" element={<Home />} />
            <Route
              path="reference"
              element={<ContentMenu content={currentRoute} />}
            />
            <Route path="reference/:content" element={<Reference />} />
            <Route path="verbs" element={<VerbList />} />
            <Route
              path="practice"
              element={<ContentMenu content={currentRoute} />}
            />
            <Route path="practice/:content" element={<PageInConstruction />} />
            <Route path="playground" element={<Playground />} />
            <Route index element={<Navigate to="home" replace />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
