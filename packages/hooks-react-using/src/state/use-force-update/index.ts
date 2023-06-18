import { useCallback, useState } from 'react';

const useForceUpdate = () => {
  const [, setState] = useState(false);

  return useCallback(() => setState(val=>!val), []);
};

export default useForceUpdate;