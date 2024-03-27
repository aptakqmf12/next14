import React, { Suspense } from "react";

interface Artist {
  username: string;
  old: number;
  artistID: string;
}

interface Music {
  artistID: string;
  musicName: string;
}

async function Playlists({
  artistID,
  delay,
}: {
  artistID: string;
  delay: number;
}) {
  const getArtistPlaylists = (artistID: string) => {
    return new Promise<Music[]>((resolve) =>
      setTimeout(() => {
        resolve([
          {
            musicName: "music01",
            artistID,
          },
          {
            musicName: "music02",
            artistID,
          },
          {
            musicName: "music03",
            artistID,
          },
        ]);
      }, delay)
    );
  };

  const playlists = await getArtistPlaylists(artistID);

  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.artistID}>{playlist.musicName}</li>
      ))}
    </ul>
  );
}

export default async function Page({
  params: { username },
}: {
  params: { username: string };
}) {
  // Wait for the artist
  // const artist = await getArtist(username);
  const artist: Artist = {
    username,
    old: 27,
    artistID: "#wf31fqe",
  };
  return (
    <>
      <h1>
        {artist.username} {artist.old}
      </h1>
      {/* Suspense를 쓰면 <Playlists />만 fallback에 래핑되고, Suspense를 쓰지않으면 <h1>을 포함한 전체 컴포넌트가 loading.tsx에 래핑된다  */}

      {/* <Playlists artistID={artist.artistID} delay={1000} />
      <Playlists artistID={artist.artistID} delay={2000} />
      <Playlists artistID={artist.artistID} delay={3000} /> */}

      <Suspense fallback={<div>1초뒤...</div>}>
        <Playlists artistID={artist.artistID} delay={1000} />
      </Suspense>

      <Suspense fallback={<div>2초뒤...</div>}>
        <Playlists artistID={artist.artistID} delay={2000} />
      </Suspense>

      <Suspense fallback={<div>3초뒤...</div>}>
        <Playlists artistID={artist.artistID} delay={3000} />
      </Suspense>
    </>
  );
}
