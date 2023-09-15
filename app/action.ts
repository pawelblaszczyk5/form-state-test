"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const mutateSomething = async (
  previousState: number,
  payload: FormData
) => {
  const newValue = previousState + Number(payload.get("value"));

  if (newValue > 100) {
    revalidateTag("random");

    return redirect("/test");
  }

  return newValue;
};
