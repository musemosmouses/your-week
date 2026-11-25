import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "";
const LINE = "Ninety-four bids, zero dollars, one ten-day streak: my week paid me in XP and a tiger clip.";

function entryPath(): string {
  if (OUT_DIR.length === 0) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(OUT_DIR, { recursive: true });
  return join(OUT_DIR, "entry.txt");
}

function main(): void {
  writeFileSync(entryPath(), LINE, "utf8");
}

main();
