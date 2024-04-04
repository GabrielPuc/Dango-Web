import { useSelector } from 'react-redux';
import {
  getMenuPendingSelector,
  getSelectorFor,
  getMenuErrorSelector,
} from '../../store/selectors';
import Card from '../blocks/Card';

export default function ContentMenu({ content }) {
  const pending = useSelector(getMenuPendingSelector);
  const menu = useSelector(getSelectorFor(content));
  const error = useSelector(getMenuErrorSelector);

  return (
    <div className="bg-slate bg-green flex justify-center">
      <div className="w-screen bg-pink h-max max-w-screen-lg">
        {pending ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          <div className="h-max grid sm:w-screen sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-red max-w-screen-lg p-4 mb-10">
            {menu.map((option, index) => (
              <Card content={option} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
