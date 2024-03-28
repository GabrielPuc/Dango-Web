import classNames from 'classnames';

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  return (
    <nav className="hidden md:flex flex-row items-center justify-between px-8 h-18 bg-primary rounded-b-3xl">
      <span className="text-5xl text-gray-800 -mb-1;">
        <img src="/assets/dango_icon.png" className="h-12 w-12" />
      </span>
      <ul className="flex flex-row place-content-end h-18 w-full space-x-16 ">
        {navigationData.map((item: string, index: number) => (
          <li
            className={classNames([
              'w-auto hover:text-greenBright cursor-pointer font-medium tracking-wide text-bg flex text-xl',
              //(currentRoute === item ||
              currentRoute.includes(item) &&
                'text-greenBright border-b-3 border-greenBright',
              !currentRoute.includes(item) &&
                'text-pinkBright border-b-3 border-pinkBright',
            ])}
            key={index}
            onClick={() => setCurrentRoute(item)}
          >
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
