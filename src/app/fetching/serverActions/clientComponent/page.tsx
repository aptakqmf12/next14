"use client";

import { useState } from "react";
import { actionInServer } from "../action";

export default function ClientPage() {
  const [flag, setFlag] = useState(false);

  const handleServerAction = () => {
    actionInServer();

    setFlag(!flag);
  };

  // `.bind` works in both Server and Client Components.
  // const actionInServerWithId = actionInServer.bind(id)

  return (
    <div>
      <div>{String(flag)}</div>
      <div>
        <button onClick={handleServerAction}>toggle flag</button>
      </div>
    </div>
  );
}
