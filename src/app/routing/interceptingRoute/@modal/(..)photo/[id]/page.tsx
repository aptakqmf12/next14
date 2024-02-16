import React from "react";
import Link from "next/link";

export default function page({ params }: { params: { id: string } }) {
  return (
    <>
      <h2>Feed Photo {params.id}</h2>
      <p>이곳은 feed 내의 특정 photo를 보여주는 페이지입니다.</p>
      <Link href={`/routing/interceptingRoute/photo/${params.id}`}>
        Photo 페이지로 이동
      </Link>
    </>
  );
}
