import React from 'react';
import { SongType } from '@Common/index';
import './styles.css';

type SongListItemPropsType = {
  song: SongType;
  isCurrent: boolean;
  onSelect: (song: SongType) => void;
};

export const SongListItem: React.FC<SongListItemPropsType> = ({
  song,
  isCurrent,
  onSelect,
}) => {
  const songListItemClasses = `SongListItem${isCurrent ? ' selected' : ''}`;
  const { title, artist } = song;
  const handleClick = React.useCallback<VoidFunction>(() => {
    onSelect(song);
  }, [song, onSelect]);
  return (
    <li className={songListItemClasses} onClick={handleClick}>
      <span>
        {title} by {artist}
      </span>
    </li>
  );
};
