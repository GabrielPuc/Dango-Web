import { useSelector } from 'react-redux';
import {
  getVerbsSelector,
  getVerbsPendingSelector,
  getVerbsErrorSelector,
} from '../../store/selectors';
import ItemReference from '../blocks/ItemReference';
import { CollapsableSection } from '../base/CollapsableSection';

function VerbList() {
  const pending = useSelector(getVerbsPendingSelector);
  const verbGroups = useSelector(getVerbsSelector);
  const error = useSelector(getVerbsErrorSelector);

  console.log(verbGroups);

  return (
    <div className="bg-slate flex justify-center">
      <div className="w-screen h-max max-w-screen-lg">
        {pending ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          <div>
            {verbGroups.map((option) => (
              <CollapsableSection
                title={option.name}
                expanded={option.content.length == 1}
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
    </div>
  );
}

export default VerbList;
