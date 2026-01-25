"use server";

export async function submitContact(formData: FormData) {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    throw new Error("All fields are required");
  }

  // TODO: Replace with real email/CRM integration
  console.log({ name, email, message });

  return; // Must return void for Next.js Server Action
}
