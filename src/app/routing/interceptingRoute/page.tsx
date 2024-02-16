import Link from "next/link";
import React from "react";

/** https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
 *
 * 경로를 가로채면 현재 레이아웃 내에서 애플리케이션의 다른 부분에서 경로를 로드할 수 있습니다.
 * 이 라우팅 패러다임은 사용자가 다른 컨텍스트로 전환하지 않고도 경로의 콘텐츠를 표시하려는 경우에 유용할 수 있습니다.
 *예를 들어 피드에서 사진을 클릭하면 사진을 모달에 표시하여 피드 위에 오버레이할 수 있습니다.
 * 이 경우 Next.js는 /photo/123 경로를 가로채서 URL을 마스킹한 후 /feed 위에 오버레이합니다.
 */

/**
 * 특징
 * URL을 통해 모달 내용을 공유할 수 있게 함
 * 페이지를 새로 고침할 때 모달을 닫지 않고 컨텍스트를 보존함
 * 이전 경로로 이동하는 대신 뒤로 가기로 모달을 닫을 수 있음
 * 앞으로 가기로 모달을 다시 열수 있음
 *
 */

export default function page() {
  return (
    <div>
      인터셉트 라우트
      <Link href={"/routing/interceptingRoute/photo/123"}>
        Photo 페이지로 이동
      </Link>
    </div>
  );
}
