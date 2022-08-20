import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const useStateWithCallback = (initialState: []) => {
  const [state, setState] = useState(initialState);
  const cbRef: MutableRefObject<null | Function> = useRef(null);

  const updateState = useCallback((newState, cb) => {
    cbRef.current = cb;
    setState((prev) => {
      return typeof newState === "function" ? newState(prev) : newState;
    });
  }, []);

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current();
      cbRef.current = null;
    }
  }, []);

  return [state, updateState] as const;
};

export default useStateWithCallback;
