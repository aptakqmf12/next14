import React from "react";

export default function page({ params }: { params: any }) {
  return (
    <div>
      <h2>Photo {params.id}</h2>
      <p>이곳은 photo의 상세 정보를 보여주는 페이지입니다.</p>
    </div>
  );
}
