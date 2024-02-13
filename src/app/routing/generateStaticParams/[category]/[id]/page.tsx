import React from "react";

// http://localhost:3000/server/generateStaticParams/posts/1
// http://localhost:3000/server/generateStaticParams/posts/2
// http://localhost:3000/server/generateStaticParams/posts/3

// generateStaticParams는 요청시가 아닌 "빌드시" 정적으로 페이지가 생성된다
export function generateStaticParams() {
  return [
    { category: "posts", id: "1" },
    { category: "posts", id: "2" },
    { category: "posts", id: "3" },
  ];
}

type Props = {
  params: {
    category: string;
    id: string;
  };
};

export default async function GenerateStaticParamsPage({ params }: Props) {
  const { category, id } = params;

  const post: any = await fetch(
    `https://jsonplaceholder.typicode.com/${category}/${id}`
  ).then((res) => res.json());

  return (
    <div>
      <h2>GenerateStaticParams</h2>

      <div>
        <span>category : {category}</span>
        <span> / </span>
        <span>id : {id}</span>
      </div>

      <div>
        <div>userId: {post.userId}</div>
        <div>id: {post.id}</div>
        <div>title: {post.title}</div>
        <div>body: {post.body}</div>
      </div>
    </div>
  );
}
