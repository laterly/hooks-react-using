import { spawn } from "child_process";
import { paths } from "./paths";
export const run = async (command: string) => {
  //rm -rf
  return new Promise((resolve, reject) => {
    const [cmd, ...args] = command.split(" ");
    const app = spawn(cmd, args, {
      cwd: paths.projectRoot,
      stdio: "inherit", //直接将这个子进程输出
      shell: true, //默认情况下linux支持rm -rf ，使电脑支持用git bash
    });
    app.on("close", resolve);
  });
};
