import { type NextRequest } from "next/server";

export const revalidate = 60;

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id"); // "/api/search?id=hello"에 대해 "hello"입니다

  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60, // Revalidate every 60 seconds
    },
  }).then((res) => res.json());

  return Response.json(data);
}
