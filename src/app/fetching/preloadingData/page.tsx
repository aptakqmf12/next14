import React from "react";
import Item, { preload } from "./_component/item";

export default function page() {
  let isAvailable = false;

  // 데이터 로드 시작
  preload("2");

  // 다른 비동기 작업 수행
  setTimeout(() => {
    isAvailable = true;
  }, 3000);

  return isAvailable ? <Item id="2" /> : <></>;
}
