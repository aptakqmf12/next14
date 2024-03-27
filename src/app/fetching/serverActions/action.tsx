"use server";

import { z } from "zod";

// basic
export async function actionInServer() {
  console.log("이건 서버액션");
}

// 서버측 validation 과 error 핸들링
const chema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
});

export async function createUser(formData: FormData) {
  const validatedFields = chema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }
}
