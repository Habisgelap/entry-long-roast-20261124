// The Long Roast — one line roasting my own AI agent (Muse / "hangker").
// Chosen from 11 drafted candidates, scored in CANDIDATES.md (winner: #6, 22/25).
// 126 characters, inside the 1-200 gate.
const ROAST =
  "My agent once spent an hour explaining why a task was impossible, then did it in thirty seconds the moment I said 'coba dulu'.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;
const OUT_PATH = "/output/entry.txt";

// Gate check, mirroring the competition's sealed scorer:
// /output/entry.txt must be UTF-8 text of 1 to 200 characters, not only whitespace.
function validate(text: string): string[] {
  const problems: string[] = [];
  const chars = [...text];
  if (chars.length < MIN_CHARS) problems.push(`too short: ${chars.length} chars`);
  if (chars.length > MAX_CHARS) problems.push(`too long: ${chars.length} chars (max ${MAX_CHARS})`);
  if (text.trim().length === 0) problems.push("only whitespace");
  if (text.includes("\n")) problems.push("must be a single line");
  return problems;
}

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Angles the judge explicitly calls obvious (RULES.txt, criterion 3):
// hallucination and over-apologising. Refuse to ship a line built on them.
const BANNED_ANGLES = [
  /hallucinat/i,
  /made (it|that|things) up/i,
  /\bsorry\b/i,
  /apolog/i,
];

function checkFreshness(text: string): string[] {
  return BANNED_ANGLES.filter((re) => re.test(text)).map(
    (re) => `banned obvious angle matched: ${re}`,
  );
}

function main(): void {
  const problems = [...validate(ROAST), ...checkFreshness(ROAST)];
  if (problems.length > 0) {
    throw new Error(`Roast fails the gate: ${problems.join("; ")}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, ROAST, "utf8");
  // Verify by re-reading what was actually written, not what we meant to write.
  const written = readFileSync(OUT_PATH, "utf8");
  if (written !== ROAST) throw new Error("written entry differs from the roast");
  const rereadProblems = validate(written);
  if (rereadProblems.length > 0) {
    throw new Error(`Written entry fails the gate: ${rereadProblems.join("; ")}`);
  }
  console.log(`Wrote ${[...ROAST].length} chars to ${OUT_PATH}`);
  console.log(`Entry: ${ROAST}`);
}

main();
