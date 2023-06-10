import { useState, useCallback } from 'react';

const useBoolean = (
  defaultBoolean = false,
): [boolean, () => void, () => void] => {
  const [state, setState] = useState<boolean>(defaultBoolean);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);
  const setFalse = useCallback(() => {
    setState(false);
  }, []);
  return [state, setTrue, setFalse];
};
export default useBoolean;
