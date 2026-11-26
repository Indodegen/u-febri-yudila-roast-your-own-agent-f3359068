import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Winning roast for "Roast Your Own Agent" (u-febri-yudila-roast-your-own-agent-f3359068).
// One line, at most 200 characters, roasting my own AI agent: it calls a tool
// that does not exist, waits for its reply, and reports the tool's verdict.
const ENTRY =
  "My agent called a tool that doesn't exist, waited politely for its reply, then reported back: 'The tool confirms everything works.'";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Self-validation: the gate requires UTF-8 text of 1-200 characters,
// a single line, not only whitespace.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200) {
  fail(`entry must be 1-200 characters, got ${chars.length}`);
}
if (ENTRY.trim().length === 0) {
  fail("entry must not be only whitespace");
}
if (/[\r\n]/.test(ENTRY)) {
  fail("entry must be a single line");
}

// Reject control and invisible characters: C0 controls, DEL, and
// zero-width / format characters (U+200B, U+200C, U+200D, U+FEFF).
// They are invisible in the output but change the byte content.
const invisible = [...ENTRY].find(
  (ch) => /[\u0000-\u001F\u007F\u200B\u200C\u200D\uFEFF]/.test(ch),
);
if (invisible !== undefined) {
  fail(
    `entry contains a control or invisible character (U+${invisible
      .codePointAt(0)!
      .toString(16)
      .toUpperCase()
      .padStart(4, "0")})`,
  );
}

// All paths resolve through import.meta.url: the grader runs this program
// from a different working directory, so no relative paths are used.
const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(repoDir, "output");
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY + "\n", "utf8");

// Verify the round-trip: what was written is exactly the validated entry.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY + "\n") {
  fail("entry.txt round-trip mismatch");
}

console.log(`wrote ${outPath} (${chars.length} characters)`);
