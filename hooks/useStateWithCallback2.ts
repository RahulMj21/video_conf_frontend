import { useCallback, useEffect, useRef, useState } from "react";
import { UserInterface } from "../slices/user.slice";

// interface InitialState{

// }

export const useStateWithCallback = (initialState: [] | UserInterface[]) => {
  const [state, setState] = useState<[] | UserInterface[]>(initialState);
  const cbRef = useRef<null | Function>(null);

  const updateState = useCallback(
    (newState, cb: Function) => {
      cbRef.current = cb;
      setState((prev) => {
        return typeof newState === "function" ? newState(prev) : newState;
      });
    },
    [state]
  );

  useEffect(() => {
    if (typeof cbRef.current === "function") {
      cbRef.current(state);
      cbRef.current = null;
    }
  }, [state]);

  return [state, updateState] as const;
};
