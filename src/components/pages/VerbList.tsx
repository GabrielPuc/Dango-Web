import { useSelector } from 'react-redux';
import { useState } from 'react';
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

  const [filter, setFilter] = useState('');

  const filteredVerbs = verbGroups.map((element) => {
    return {
      ...element,
      content: element.content.filter((subElement) =>
        subElement.meaning.toLowerCase().includes(filter.toLowerCase())
      ),
    };
  });

  return (
    <div className="bg-slate flex justify-center">
      <div className="w-screen h-max max-w-screen-lg">
        <input
          type="text"
          placeholder="Search by meaning"
          id="filter"
          className="bg-dark border border-pinkBright text-white text-l rounded-lg focus:ring-pinkBright focus:border-pinkBright block w-screen h-max max-w-screen-lg mt-4 p-2.5"
          onChange={(e) => setFilter(e.target.value)}
        />
        {pending ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          <div>
            {filteredVerbs.map((option) => (
              <CollapsableSection
                title={option.name}
                expanded={option.content.length == 1}
                visible={option.content.length != 0}
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
