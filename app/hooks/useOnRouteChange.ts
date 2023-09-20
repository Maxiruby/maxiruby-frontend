import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useOnRouteChange(cb: () => void) {
  const { pathname } = useLocation();

  const onRouteChangeCallback = useCallback(() => {
    cb();
  }, []);

  // listen for route change
  useEffect(() => {
    onRouteChangeCallback();
  }, [pathname]);
}
