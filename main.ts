// The Dog Ate My Homework — one line, in the dog's own voice, of the excuse
// a dog gives after being caught eating the homework. First draft.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  'It smelled like effort and tasted like Tuesday, so like any professional I ate the evidence and blamed the cat.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
