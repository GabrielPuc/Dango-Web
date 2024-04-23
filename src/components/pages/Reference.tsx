import { useSelector } from 'react-redux';
import {
  getGroupSelectorFor,
  getPendingSelector,
  getErrorSelector,
} from '../../store/selectors';
import { useParams } from 'react-router-dom';
import ItemReference from '../blocks/ItemReference';
import { CollapsableSection } from '../base/CollapsableSection';
import { Group, Word } from '../../store/types/modelTypes';
import { useNavigate } from 'react-router-dom';
import { BiArrowFromBottom } from 'react-icons/bi';
import { BiArrowBack } from 'react-icons/bi';

function Reference() {
  const params = useParams();
  const pending = useSelector(getPendingSelector);
  const menu = useSelector(getGroupSelectorFor(params.content));
  const error = useSelector(getErrorSelector);
  const navigate = useNavigate();
  let groups = [];

  if (menu.length > 0) {
    const groupedObj = menu.reduce(
      (grouped: { [key: string]: Word[] }, item) => {
        if (!grouped[item.group]) {
          grouped[item.group] = [];
        }
        grouped[item.group].push(item);
        return grouped;
      },
      {}
    );

    Object.entries(groupedObj).forEach(([key, value]) =>
      groups.push({ name: key, content: value })
    );
  }

  return (
    <div className="bg-slate flex justify-center">
      <div className="w-screen h-max max-w-screen-lg">
        {pending ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          <div>
            {groups.map((option) => (
              <CollapsableSection
                title={option.name}
                expanded={groups.length == 1}
                content={
                  <div className="h-max grid sm:w-screen sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-screen-lg p-4 mb-10">
                    {option.content.map((item, index) => (
                      <ItemReference content={item} key={index} />
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        )}
      </div>

      <div className="fixed bottom-1/4">
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          className="fixed z-90 right-8 bg-primary w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl translate-y-20"
        >
          <BiArrowFromBottom />
        </button>
        <button
          onClick={() => navigate(-1)}
          className="fixed z-90 right-8 bg-primary w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl "
        >
          <BiArrowBack />
        </button>
      </div>
    </div>
  );
}

export default Reference;
