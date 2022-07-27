import { useContext, useCallback, useEffect } from "react";

export const useResizeWindow = () => {
  /* const { dispatch } = useContext(ContextApp);

  const handleSubscribe = useCallback(() => {
    dispatch(setWindowSize(window.innerWidth));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("resize", handleSubscribe);
    return () => window.removeEventListener("resize", handleSubscribe);
  }, [handleSubscribe]); */
};
