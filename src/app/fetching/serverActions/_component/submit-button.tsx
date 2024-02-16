"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      {pending ? "제출중.." : "제출"}
    </button>
  );
}
