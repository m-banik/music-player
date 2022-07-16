import React from 'react';
import { Heading, Songs, SongListItem, SongPlayer } from '@Components/index';
import {
  SongType,
  SampleSongs,
  SongSelectionHandlerType,
  assertAreOfSongType,
  fetchErrorHandler,
} from '@Common/index';
import './styles.css';

export const App: React.FC = () => {
  const URL = 'https://examples.devmastery.pl/songs-api/songs';
  const [songs, setSongs] = React.useState<SongType[]>(SampleSongs);
  const [currentSongIndex, setCurrentSongIndex] = React.useState<number>(0);
  const currentSong = songs[currentSongIndex];
  const handleSelectSong = React.useCallback<SongSelectionHandlerType>(
    (song) => {
      const songIndex = songs.findIndex(
        ({ audioUrl }) => audioUrl === song.audioUrl
      );
      if (songIndex >= 0) {
        setCurrentSongIndex(songIndex);
      }
    },
    [songs]
  );
  React.useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then((newSongs) => {
              assertAreOfSongType(
                newSongs,
                'Incorrect format of the outer data!'
              );
              setSongs([...SampleSongs, ...newSongs]);
            })
            .catch(fetchErrorHandler);
        }
      })
      .catch(fetchErrorHandler);
  }, []);
  return (
    <div className="App">
      {songs.length === 0 ? (
        'Loading...'
      ) : (
        <>
          <SongPlayer song={currentSong} />
          <Songs>
            <Heading title={'Songs'} />
            <ul>
              {songs.map((song) => (
                <SongListItem
                  key={song.audioUrl}
                  song={song}
                  isCurrent={currentSong.audioUrl === song.audioUrl}
                  onSelect={handleSelectSong}
                />
              ))}
            </ul>
          </Songs>
        </>
      )}
    </div>
  );
};
