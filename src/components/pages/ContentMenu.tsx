import { useSelector } from 'react-redux';
import {
  getMenuPendingSelector,
  getSelectorFor,
  getMenuErrorSelector,
} from '../../store/selectors';
import ItemMenu from '../blocks/ItemMenu';
import { useNavigate } from 'react-router-dom';

export default function ContentMenu({ content }) {
  const pending = useSelector(getMenuPendingSelector);
  const menu = useSelector(getSelectorFor(content));
  const error = useSelector(getMenuErrorSelector);
  const navigate = useNavigate();

  return (
    <div className="bg-slate flex justify-center">
      <div className="w-screen h-max max-w-screen-lg">
        {pending ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          <div className="h-max grid sm:w-screen sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-screen-lg p-4 mb-10">
            {menu.map((option, index) => (
              <ItemMenu
                content={option}
                key={index}
                click={() => {
                  navigate(option.name);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
