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
  - `useFormState`를 사용하면 폼데이터에 대한 내용을 useState없이 구현가능. (서버에서 사용)

- sequential data fetch : 순차적인 data fetch로 각 api마다 `Suspense`를 래핑하여 바운더리를 설정하여 fallback으로 loading시 표현가능함. 이때 Suspense없이 loading.tsx를 작성하면 전체 페이지에 대해서 래핑된다.

- parallel data fetch : `Promise.all`를 사용하여 병렬적인 data fetch처리.

- preloading : `preload`라는 함수를 만들어서 preload를 시킨뒤 다른 비동기 작업을 수행. 워터폴을 방지하고, promise를 사용할필요없음

  ## Rendering

  ### Server component

  - 데이터 fetch를 보다 실제서버와 가까운곳에서 처리하여 데이터를 가져오는데 걸리는 시간을 줄여 성능향상
  - 토큰, API key 같이 민감한 데이터와 로직을 클라이언트에 노출없이 서버에서 관리하여 보안향상
  - 서버에서 렌더링하면 결과를 캐싱하여 후속 요청에 대해 재사용 가능하다.
  - 클라이언트가 js번들을 받지않아도 돼서 인터넷 속도가 느린경우에도 빠른 대응가능
  - First Contentful Paint (FCP)가 개선됨.

  # 책갈피 (다음 공부 시작지점)

  https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#using-react-cache-server-only-and-the-preload-pattern

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
