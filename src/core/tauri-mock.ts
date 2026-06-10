export async function invoke<T>(cmd: string, args?: any): Promise<T> {
  throw new Error(`Tauri invoke not supported in browser: ${cmd} with args ${JSON.stringify(args)}`);
}
