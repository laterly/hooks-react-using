import { useDocumentVisibility } from "../../../../packages/hooks-react-using/src";
function MyComponent() {
  const visibility = useDocumentVisibility();

  // 根据可见性状态执行不同的操作
  if (visibility === 'hidden') {
    // 页面不可见
    console.log('页面不可见');
  } else {
    // 页面可见
    console.log('页面可见');
  }

  return (
    <div>
      {/* 组件内容 */}
    </div>
  );
}
export default MyComponent;