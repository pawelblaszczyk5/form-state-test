"use server";

import { redirect } from "next/navigation";

export const mutateSomething = async (
  previousState: number,
  payload: FormData
) => {
  const newValue = previousState + Number(payload.get("value"))

  if (newValue > 100) return redirect('/test')
  
  return newValue;
};
