import { existsSync } from "node:fs";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const pnpmDir = path.join(process.cwd(), "node_modules", ".pnpm");
const marker = 'await fs.symlink(target, dest, isDir ? "dir" : "file");';
const replacement = [
  "try {",
  '          await fs.symlink(target, dest, isDir ? "dir" : "file");',
  "        } catch (error) {",
  '          if (error && typeof error === "object" && "code" in error && error.code === "EPERM") {',
  "            await fs.cp(realpath, dest, { recursive: isDir, force: false });",
  "          } else {",
  "            throw error;",
  "          }",
  "        }"
].join("\n");

async function patchHelper(filePath) {
  const source = await readFile(filePath, "utf8");
  if (source.includes("await fs.cp(realpath, dest")) {
    return false;
  }
  if (!source.includes(marker)) {
    return false;
  }
  await writeFile(filePath, source.replace(marker, replacement), "utf8");
  return true;
}

async function main() {
  if (!existsSync(pnpmDir)) {
    return;
  }

  const entries = await readdir(pnpmDir, { withFileTypes: true });
  const candidates = entries
    .filter((entry) => entry.isDirectory() && entry.name.startsWith("@astrojs+internal-helpers@"))
    .map((entry) =>
      path.join(
        pnpmDir,
        entry.name,
        "node_modules",
        "@astrojs",
        "internal-helpers",
        "dist",
        "fs.js"
      )
    )
    .filter(existsSync);

  let patched = false;
  for (const candidate of candidates) {
    patched = (await patchHelper(candidate)) || patched;
  }

  if (patched) {
    console.log("Patched @astrojs/internal-helpers for Windows-safe Vercel builds.");
  }
}

main().catch((error) => {
  console.error("Failed to patch @astrojs/internal-helpers:", error);
  process.exitCode = 1;
});
