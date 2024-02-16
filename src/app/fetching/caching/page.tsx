import React from "react";

interface Post {
  title: string;
  id: number;
  userid: number;
  body: string;
}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const posts: Post[] = await getData();

  return (
    <main>
      {posts.map((post, i) => (
        <div key={i}>{post.title}</div>
      ))}
    </main>
  );
}
