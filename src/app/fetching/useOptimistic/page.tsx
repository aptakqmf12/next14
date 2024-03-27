"use client";

import { useOptimistic } from "react";
import { send } from "./action";

type Message = {
  message: string;
};

export default function Thread({ messages }: { messages: Message[] }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    Message[],
    string
  >(messages, (state, newMessage) => [...state, { message: newMessage }]);

  return (
    <div>
      {optimisticMessages?.map((m, k) => (
        <div key={k}>{m.message}</div>
      ))}
      <form
        action={async (formData: FormData) => {
          const message = formData.get("message") as string;
          addOptimisticMessage(message);
          await send(message);
        }}
      >
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
