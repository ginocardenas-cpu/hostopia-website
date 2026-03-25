import fs from "fs";
import path from "path";
import type { ProductJson } from "@/lib/product-json-types";

const PRODUCTS_DIR = path.join(process.cwd(), "content", "products");

export function getProductJsonSlugs(): string[] {
  if (!fs.existsSync(PRODUCTS_DIR)) return [];
  return fs
    .readdirSync(PRODUCTS_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/i, ""));
}

export function loadProductJson(slug: string): ProductJson | null {
  const file = path.join(PRODUCTS_DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  try {
    const raw = fs.readFileSync(file, "utf8");
    return JSON.parse(raw) as ProductJson;
  } catch {
    return null;
  }
}
