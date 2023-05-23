import { series, parallel } from "gulp";
import { widthTaskName, run } from "./utils";
//1打包样式 2打包组件 3.打包每个组件 4.生成一个组件库 5.发布组件
export default series(
  widthTaskName("clean", async () => run("rm -rf dist")),
  widthTaskName("buildPackages", () =>
    run("pnpm run --filter ./packages --parallel build")
  )
);
