async function getArtist(username: string) {
  const res = await fetch(`https://api.example.com/artist/${username}`);
  return res.json();
}

async function getArtistAlbums(username: string) {
  const res = await fetch(`https://api.example.com/artist/${username}/albums`);
  return res.json();
}

// 데이터를 요청을 컴포넌트 외부에서 정의하면 병렬 fetch가 되고 순차적 fetch보다 시간을 절약할수있다.
// 하지만 두 Promise가 resolve돼야 렌더링이 되는 단점이 있다.
export default async function Page({
  params: { username },
}: {
  params: { username: string };
}) {
  // Initiate both requests in parallel
  const artistData = getArtist(username);
  const albumsData = getArtistAlbums(username);

  // Wait for the promises to resolve
  const [artist, albums] = await Promise.all([artistData, albumsData]);

  return (
    <>
      <h1>{artist.name}</h1>
      <Albums list={albums}></Albums>
    </>
  );
}

const Albums = ({ list }: { list: any[] }) => {
  return (
    <ul>
      {list.map((obj, i) => (
        <li key={i}></li>
      ))}
    </ul>
  );
};
