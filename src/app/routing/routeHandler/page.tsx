"use client";
import { useEffect, useState } from "react";

// route handler는 "src/app/api" 폴더 내부에서 정의한다, app router에서만 쓸수있다.
import { GET } from "@/app/api/route";

export default function RouteHanlderPage() {
  const [list, setList] = useState<any[]>([]);

  return (
    <div>
      <h2>RouteHanlderPage</h2>

      <ul>
        {list.map((el, i) => (
          <li key={i}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}
