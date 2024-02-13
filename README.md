# routing

- dynamicSegment : `slug`
- catchAllSegment : `[...slugs]`
- generateStaticParams : path에 따라 "렌더링"시 정적 페이지 생성
  - [category]/[id] 형태로 접근가능.
  - fetch("https://.../category/id") 의 요청을 보냄
- parallelRoute : 병렬라우팅으로, 하나의 url에 두개이상의 컴포넌트를 렌더링
- conditionalParallelRoute : 병렬라우팅을 사용한 조건부 렌더링 (isLogin로 flag)

- catchAllSegment
- catchAllSegment
