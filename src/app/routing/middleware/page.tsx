"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    fetch("/redirect/posts/2")
      .then((res) => res.json())
      .then((json) => console.log(json));

    fetch("/redirect/albums")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return <div>middleware</div>;
}
