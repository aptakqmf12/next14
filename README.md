# app router?

next.js의 앱라우터는 `server component`, `server actions`, `streaming`, `suspense`과 같은 react 최신 기능을 사용하여 애플리케이션을 구축함.

## routing

- dynamicSegment : `slug`

- catchAllSegment : `[...slugs]`

- generateStaticParams : path에 따라 "렌더링"시 정적 페이지 생성

  - [category]/[id] 형태로 접근가능.
  - fetch("https://.../category/id") 의 요청을 보냄

- parallelRoute : 병렬라우팅으로, 하나의 url에 두개이상의 컴포넌트를 렌더링

- conditionalParallelRoute : 병렬라우팅을 사용한 조건부 렌더링 (isLogin로 flag)

- interceptingRoute : 아직이해안됨..

- RouteHandler :

  - `app/api/route.ts`

- middleware : `src/middleware.ts`에 정의하여 api요청이 닿기전에 조작(응답 헤더를 재작성, 리디렉션, 수정)할수있다.

## fetching / caching & revalidating

next.js는 js의 `fetch`를 확장하여 캐싱 및 재검증을 구현했다.

- basic : `fetch`를 사용한 서버컴포넌트
- caching : `cache`옵션을 사용해 캐싱헤더를 설정
- timeBasedRevalidation : `next` 옵션의 `revalidate`로 시간 기반으로 revalidate 처리 (초 단위)
- onDemandRevalidation : `next` 옵션의 `tags`로 특정 이벤트를 통한 on-demand 기반의 revalidate처리.

  - `revalidateTag`함수에 tag를 인자로 넘겨주면 revalidate처리 됨

- severActions :
  - client component에서 서버액션을 사용하려면 서버액션을 따로 파일로 나누어 import하여 사용한다
  - server component에서 서버액션을 사용하면 별도의 state없이 form 작업이 가능하다!
  - `useFormStatus`를 사용해서 form의 pending상태를 알수있음.

<!-- ```
📦MonoRepo-with-YarnBerry
 ┣ 📂.git
 ┣ 📂.yarn
 ┣ 📂package
 ┃ ┣ 📂common
 ┃ ┗ 📂front
 ┣ 📜.editorconfig
 ┣ 📜.gitignore
 ┣ 📜.yarnrc.yml
 ┣ 📜README.md
 ┣ 📜package.json
 ┗ 📜yarn.lock
``` -->
