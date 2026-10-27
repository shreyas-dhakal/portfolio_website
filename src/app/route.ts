import { readFile } from "node:fs/promises";
import path from "node:path";

// Prerender the standalone portfolio so the existing Next.js hosting works.
export const dynamic = "force-static";

export async function GET() {
  const html = await readFile(path.join(process.cwd(), "index.html"), "utf8");
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
