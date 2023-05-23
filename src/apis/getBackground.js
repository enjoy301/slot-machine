import { CONFIG } from "site.config";
import { NotionAPI } from "notion-client";

export async function getBackground() {
  const api = new NotionAPI();
  const pageId = CONFIG.notion.pageId;

  return null;
}
