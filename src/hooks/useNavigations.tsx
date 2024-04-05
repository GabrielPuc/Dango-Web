import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
  const [route, setRoute] = useState('/home');
  const navigate = useNavigate();

  const selectAction = useCallback(
    (option) => {
      if (route === option) return;
      setRoute(option);
      navigate(option);
    },
    [route]
  );

  return { currentRoute: route, setCurrentRoute: selectAction };
};

export default useNavigation;
