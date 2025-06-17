import { liteClient as algoliasearch } from 'algoliasearch/lite';

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!;
const searchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!;

export const searchClient = algoliasearch(appId, searchKey);
export const SEARCH_INDEX = 'posts';

export async function indexPost(post: {
  objectID: string;
  title: string;
  content: string;
  slug: string;
  tags: string[];
  publishedAt: string;
}) {
  if (!appId || !searchKey) {
    console.warn('Algolia credentials not configured');
    return;
  }

  try {
    // For now, disable Algolia indexing until properly configured
    console.log('Would index post:', post.title);
    // TODO: Implement proper Algolia v5 indexing
    return;
  } catch (error) {
    console.error('Failed to index post:', error);
  }
}

export async function removeFromIndex(objectID: string) {
  if (!appId || !searchKey) {
    console.warn('Algolia credentials not configured');
    return;
  }

  try {
    // For now, disable Algolia deletion until properly configured
    console.log('Would remove from index:', objectID);
    // TODO: Implement proper Algolia v5 deletion
    return;
  } catch (error) {
    console.error('Failed to remove from index:', error);
  }
}
