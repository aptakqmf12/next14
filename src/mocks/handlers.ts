import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/test", ({ request }) => {
    return HttpResponse.json({ id: "test" });
  }),
];
