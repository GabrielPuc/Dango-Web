import { useCallback } from 'react';
import classNames from 'classnames';
import { AiFillHome, AiFillBook, AiFillEdit } from 'react-icons/ai';
import { FaPersonRunning } from 'react-icons/fa6';

const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  const getTabIcon = useCallback((item) => {
    switch (item) {
      case 'home':
        return <AiFillHome />;
      case 'reference':
        return <AiFillBook />;
      case 'practice':
        return <AiFillEdit />;
      case 'verbs':
        return <FaPersonRunning />;
    }
  }, []);

  return (
    <nav className="flex md:hidden flex-row items-center justify-around px-8 h-14 bg-primary visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-3xl">
      {navigationData.map((item: string, index: number) => (
        <div
          key={index}
          className={classNames([
            'flex flex-wrap p-2 mt-2 mb-2 w-6 h-14 items-center justify-center hover:text-greenBright cursor-pointer',
            currentRoute.includes(item) &&
              'border-t-3 border-greenBright text-greenBright',
            !currentRoute.includes(item) &&
              'border-t-3 border-pinkBright text-pinkBright',
          ])}
          onClick={() => setCurrentRoute(item)}
        >
          <div className="text-2xl">{getTabIcon(item)}</div>
          <div className=" text-base text-center">{item.toUpperCase()}</div>
        </div>
      ))}
    </nav>
  );
};

export default Tabbar;
