import { useSelector } from 'react-redux';
import {
  getGroupSelectorFor,
  getPendingSelector,
  getErrorSelector,
} from '../../store/selectors';
import { useParams } from 'react-router-dom';
import ItemReference from '../blocks/ItemReference';
import { CollapsableSection } from '../base/CollapsableSection';
import { Word } from '../../store/types/modelTypes';
import NavigationFAB from '../blocks/NavigationFAB';

function Reference() {
  const params = useParams();
  const pending = useSelector(getPendingSelector);
  const menu = useSelector(getGroupSelectorFor(params.content));
  const error = useSelector(getErrorSelector);
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

      <NavigationFAB />
    </div>
  );
}

export default Reference;
