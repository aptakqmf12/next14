"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("count change!");
  }, [count]);

  useEffect(() => {
    console.log("flag change!");
  }, [flag]);

  function fetchSomething() {
    return new Promise((resolve) => setTimeout(resolve, 100));
  }

  function handleClick() {
    fetchSomething().then(() => {
      // React 18 이후에서는 해당 작업을 Batching 처리 한다.
      setCount((c) => c + 1);
      setCount((c) => c + 1);
      setFlag((f) => !f);
      // React 는 해당 작업을 일괄 처리하여 한 번의 리렌더링만 진행한다.
    });
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>change</button>
    </div>
  );
}
