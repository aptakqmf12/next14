"use server";

export async function createUser(prevState: any, formData: FormData) {
  console.log("prevState", prevState);
  console.log("formData", formData.get("email"));

  return {
    message: "Please enter a valid email",
  };
}
