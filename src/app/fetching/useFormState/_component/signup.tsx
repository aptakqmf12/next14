"use client";

import { useFormState } from "react-dom";
import { createUser } from "../action";

const initialState = {
  message: "",
};

export function Signup() {
  const [state, formAction] = useFormState(createUser, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />

      <p>{state?.message}</p>

      <button>Sign up</button>
    </form>
  );
}
