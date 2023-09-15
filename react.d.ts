declare module "react-dom" {
  declare const experimental_useFormState: <TState, TPayload>(
    action: (previousState: TState, payload: TPayload) => Promise<TState>,
    initialState: TState,
    url?: string
  ) => [TState, (payload: TPayload) => void];

  export { experimental_useFormState };
}
