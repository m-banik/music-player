import * as types from './types';

export const checkIfIsOfSongType = (
  input: unknown
): input is types.SongType => {
  const instance = input as types.SongType;
  return (
    instance instanceof Object &&
    typeof instance.artist === 'string' &&
    typeof instance.title === 'string' &&
    typeof instance.audioUrl === 'string' &&
    typeof instance.coverUrl === 'string'
  );
};

export const checkIfAreOfSongType = (
  input: unknown
): input is types.SongType[] => {
  const instance = input as types.SongType[];
  return (
    instance instanceof Array &&
    instance.every((element) => checkIfIsOfSongType(element))
  );
};

export function assertIsOfSongType(
  input: unknown,
  errorMessage: string = 'Incorrect input data type!'
): asserts input is types.SongType {
  if (checkIfIsOfSongType(input)) {
    return;
  }
  throw new Error(errorMessage);
}

export function assertAreOfSongType(
  input: unknown,
  errorMessage: string = 'Incorrect input data type!'
): asserts input is types.SongType[] {
  if (checkIfAreOfSongType(input)) {
    return;
  }
  throw new Error(errorMessage);
}
