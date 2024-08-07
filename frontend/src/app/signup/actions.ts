"use server";

export async function printTextAction(previousState: any, formData: FormData) {
  const email = formData.get("email")
  const name = formData.get("name")
  const password = formData.get("password")

  return { errors: {
    email: !email ? "Email is required" : undefined,
    name: !name ? "Name is required" : undefined,
    password: !password ? "Password is required" : undefined
  } }
}