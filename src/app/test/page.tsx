import { useState, useEffect } from "react";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default async function Page() {
  const res = await fetch("http://localhost:3000/test", {
    next: {
      revalidate: 1000,
    },
  });
  const data: Post[] = await res.json();

  // const [data, setData] = useState<Post[]>([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/test")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //     });
  // }, []);

  return (
    <div>
      <ul>
        {/* {data.map((el, i) => (
          <li key={i}>{el.title}</li>
        ))} */}
      </ul>
    </div>
  );
}
