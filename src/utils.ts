import { dirname, posix } from 'path';
import { stat } from 'node:fs/promises';

/**
 * Obtains the closest `tsconfig.json` path.
 *
 * @param filename The tsconfig filename (default to `tsconfig.json`).
 * @returns The tsconfig filepath.
 */
export async function tsconfigPath(
  filename = 'tsconfig.json'
): Promise<string | undefined> {
  let searchPath = process.cwd();
  while (true) {
    const configPath = posix.join(searchPath, filename);
    if ((await stat(configPath)).isFile()) {
      return configPath;
    }
    const parentPath = dirname(searchPath);
    if (parentPath === searchPath) {
      return;
    }
    searchPath = parentPath;
  }
}

/**
 * Dynamically imports a peer module.
 *
 * @param name The peer package name.
 * @returns The peer module or throws an Error if peer is missing.
 */
export async function importPeer<T>(name: string): Promise<T> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const imported = await import(name);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion,@typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
    return (imported as any).default ?? imported;
  } catch (err) {
    throw new Error(
      `'${name}' dependency seems to be missing. Did you install it?\n\n${String(err)}`
    );
  }
}
