"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const delay = async (ms: number) => new Promise((res) => setTimeout(res, ms));

export const mutateSomething = async (
  previousState: { value: number; error?: string },
  payload: FormData
) => {
  await delay(2000);

  const value = payload.get("value");

  if (typeof value !== "string" || value === "")
    return { value: previousState.value, error: "This field is required" };

  const numericValue = Number(value);

  if (Number.isNaN(numericValue))
    return { value: previousState.value, error: "This field must be a number" };

  if (numericValue > 25)
    return {
      value: previousState.value,
      error: "This value can't be greater than 25",
    };

  const newValue = previousState.value + numericValue;

  if (newValue > 100) {
    revalidateTag("random");

    return redirect("/test");
  }

  return { value: newValue };
};
