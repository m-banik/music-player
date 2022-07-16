import React from 'react';
import { Heading } from '..';
import { SongType } from '@Common/index';
import './styles.css';

type SongPlayerPropsType = {
  showControls?: boolean;
  song: SongType;
};

export const SongPlayer: React.FC<SongPlayerPropsType> = ({
  showControls = false,
  song,
}) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const { coverUrl, audioUrl } = song;
  const handlePlay = React.useCallback<VoidFunction>(() => {
    audioRef.current?.play();
  }, []);
  const handlePause = React.useCallback<VoidFunction>(() => {
    audioRef.current?.pause();
  }, []);
  return (
    <section className={'SongPlayer'}>
      <Heading title={'Music Player'} />
      <img width={250} height={250} src={coverUrl} alt={'Album cover'} />
      <audio key={audioUrl} ref={audioRef} controls={showControls}>
        <source src={audioUrl} />
      </audio>
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Play</button>
      </div>
    </section>
  );
};
