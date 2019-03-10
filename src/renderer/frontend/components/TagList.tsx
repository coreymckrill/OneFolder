import { observer } from 'mobx-react-lite';
import React from 'react';

import TagListItem, {
  StaticTagListItem,
  ModifiableTagListItem,
} from './TagListItem';

import { ClientTag } from '../../entities/Tag';
import { withRootstore, IRootStoreProp } from '../contexts/StoreContext';

export interface ITagListProps extends IRootStoreProp {}

const TagList = ({
  rootStore: { uiStore, tagStore, fileStore },
}: ITagListProps) => {
  const handleRename = (tag: ClientTag, name: string) => {
    tag.name = name;
  };

  const handleSelection = (tag: ClientTag) => {
    uiStore.selectTag(tag);
    fileStore.fetchFilesByTagIDs(uiStore.tagSelection);
  };

  return (
    <>
      <StaticTagListItem
        name="All images"
        onSelect={() => fileStore.fetchAllFiles()}
      />

      {tagStore.tagList.map((tag) => (
        <div key={`tag-${tag.id}`} className="listItem">
          <TagListItem
            name={tag.name}
            id={tag.id}
            onRemove={() => tagStore.removeTag(tag)}
            onRename={(name) => handleRename(tag, name)}
            onSelect={() => handleSelection(tag)}
          />
        </div>
      ))}

      {/* New tag input field */}
      <ModifiableTagListItem
        placeholder="New tag"
        icon="add"
        initialName={''}
        onRename={(name) => tagStore.addTag(name)}
        resetOnSubmit
        autoFocus={false}
      />
    </>
  );
};

export default withRootstore(observer(TagList));
