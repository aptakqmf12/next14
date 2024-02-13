import React from "react";

type Props = {
  params: {
    slugs: string[];
  };
};

// /shop/a/b  -> { slug: ['a', 'b'] }

export default function CatchAllSegmentPage({ params }: Props) {
  return (
    <div>
      <h2>CatchAllSegment</h2>

      {params.slugs.map((slug, i) => {
        const isLast = slug === params.slugs.at(-1);
        return (
          <span key={i}>
            {slug} {!isLast && "/"}
          </span>
        );
      })}
    </div>
  );
}
