"use client";

import { mutateSomething } from "#/app/action";
import { experimental_useFormState } from "react-dom";

export const Form = () => {
  const [state, dispatch] = experimental_useFormState(mutateSomething, {
    value: 0,
  });

  return (
    <>
      <p>Current value: {state.value}</p>
      <form className="flex flex-col gap-4 items-start" action={dispatch}>
        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="number">
            Enter a number to increment current value:
          </label>
          <input
            className="border-2 border-sky-950 rounded appearance-none px-2 py-1"
            aria-describedby={state.error ? "" : undefined}
            id="number"
            type="number"
            name="value"
          />
          {state.error && (
            <span className="text-rose-700" aria-live="polite">
              {state.error}
            </span>
          )}
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
