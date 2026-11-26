// The Internet in One Word — entry program.
//
// The whole internet, summed up in a single word, written to
// /output/entry.txt and nothing else. No trailing newline, no
// punctuation, no extra words: the file is the word itself.
import { mkdirSync, writeFileSync } from "node:fs";

// The chosen word: the internet, in one word.
const WORD = "brainrot";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
