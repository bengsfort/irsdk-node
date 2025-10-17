import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const getDirname = () => dirname(fileURLToPath(import.meta.url));

export { getDirname as '_getDirname' };
