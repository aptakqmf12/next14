"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <nav>
      <StyledUl>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/routing/dynamicSegment/1">dynamicSegment/[slug]</Link>
        </li>
        <li>
          <Link href="/routing/catchAllSegment/1/2/3">
            catchAllSegment/[...slugs]
          </Link>
        </li>

        <li>
          <Link href="/routing/generateStaticParams/posts/1">
            generateStaticParams/[category]/[id]
          </Link>
        </li>
        <li>
          <Link href="/routing/parallelRoute">parallelRoute</Link>
        </li>
        <li>
          <Link href="/routing/conditionalParallelRoute">
            conditionalParallelRoute
          </Link>
        </li>
        <li>
          <Link href="/routing/interceptingRoute/photo/123">
            interceptingRoute
          </Link>
        </li>
      </StyledUl>
    </nav>
  );
}

const StyledUl = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-bottom: 12px;

  li {
    border: 1px #eee solid;
    border-radius: 4px;
    padding: 4px;
  }
`;
