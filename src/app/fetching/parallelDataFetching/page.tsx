import { Suspense } from "react";
interface Artist {
  username: string;
}

interface Music {
  musicName: string;
}

async function getArtists() {
  return new Promise<Artist[]>((resolve) =>
    setTimeout(() => {
      resolve([
        { username: "artist01" },
        { username: "artist02" },
        { username: "artist03" },
      ]);
    }, 10)
  );
}

async function getMusics() {
  return new Promise<Music[]>((resolve) =>
    setTimeout(() => {
      resolve([
        { musicName: "music01" },
        { musicName: "music02" },
        { musicName: "music03" },
      ]);
    }, 5000)
  );
}

export default async function Page({
  params: { username },
}: {
  params: { username: string };
}) {
  const artistData = getArtists();
  const musicData = getMusics();

  // 병렬적으로 데이터를 받으면 두 api가 모두 완료돼야 볼수있음
  // artist는 0.01초 지만 albums가 5초 걸리므로 둘다 5초뒤에 볼수있음.
  const [artist, albums] = await Promise.all([artistData, musicData]);

  return (
    <>
      <ul>
        {artist.map((user, i) => {
          return <li key={i}>{user.username}</li>;
        })}
      </ul>

      <ul>
        {albums.map((music, i) => {
          return <li key={i}>{music.musicName}</li>;
        })}
      </ul>
    </>
  );
}
