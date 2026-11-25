// One Star for Monday — entry program (program/v1).
// Writes a single original one-line, one-star review of Monday, written as
// though Monday were a restaurant, to /output/entry.txt. Node 22+ stdlib
// only, no network, no randomness: the same line every run, so the two
// grading runs are byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star: Monday arrived at my table cold, the waiter overcooked my weekend, and the bill was five working days long.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate seals it: 1 to 180 characters, a single line, at most 25 words,
// not only whitespace.
const body = LINE.trim();
const words = body.split(/\s+/).filter(Boolean).length;
if (body.length < 1 || body.length > 180 || body.includes("\n") || words > 25) {
  throw new Error(
    `entry line fails the gate at ${body.length} characters / ${words} words`,
  );
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), body + "\n", "utf8");
