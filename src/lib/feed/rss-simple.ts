// Simple RSS module to test imports
export async function generateRSSFeed(): Promise<string> {
  return '<rss>test</rss>'
}

export async function generateAtomFeed(): Promise<string> {
  return '<atom>test</atom>'
}

export async function generateJSONFeed(): Promise<string> {
  return '{"test": true}'
}
