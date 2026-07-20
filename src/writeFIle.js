export const writeFile = (path, content) =>
    Deno.writeTextFileSync(path, content);

export const readFile = (path) => Deno.readTextFileSync(path);
