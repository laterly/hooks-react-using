export const widthTaskName = <T>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name });
