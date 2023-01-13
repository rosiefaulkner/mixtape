import React, { useContext } from "react";
import { Song } from "./Song";
import { MixtapeContext } from "./MixtapeContext";

export const SongList = () => {
  const { genre, sortOrder, songs } = useContext(MixtapeContext);
  const filterSong = songs.filter(
    song => genre === 'all' || song.genre === genre );
  const sortedSongs = filterSong.sort((a, b) =>
    sortOrder === "ascending" ? a.year - b.year : b.year - a.year
  );
  return (
    <>
      <h2>Songs</h2>
      {sortedSongs.map(song => <Song {...song} key={song.name} />)}
    </>
  );
};
