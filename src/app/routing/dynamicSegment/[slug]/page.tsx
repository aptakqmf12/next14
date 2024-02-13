type Props = {
  params: { slug: string };
};

// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
// params 라는 키워드로 꺼냄

export default function DynamicSegmentPage({ params }: Props) {
  return (
    <div>
      <h2>DynamicSegmentPage</h2>

      <div>slug : {params.slug}</div>
    </div>
  );
}
