"use client";

import { mutateSomething } from "#/app/action";
import { experimental_useFormState, experimental_useFormStatus} from "react-dom";

export const Form = () => {
  const [state, dispatch] = experimental_useFormState(mutateSomething, 1);

  return (
    <>
      <p>Current value: {state}</p>
      <form action={dispatch}>
        <input type="number" name="value" />
        <button>Submit</button>
      </form>
    </>
  );
};
