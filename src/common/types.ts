export type SongType = {
  title: string;
  artist: string;
  audioUrl: string;
  coverUrl: string;
};

export type SongSelectionHandlerType = (selectedSong: SongType) => void;
