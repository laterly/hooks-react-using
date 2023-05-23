import { useMount } from '../../../packages/react-hooks/src/index';

const Demo = () => {
  useMount(() => console.log("mount"));
  return null;
};

export default Demo;