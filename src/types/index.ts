export interface Post {
  id: string;
  slug: string;
  title: string;
  content: string;
  mdx: string;
  excerpt?: string;
  tags: string[];
  status: PostStatus;
  views: number;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  live?: string;
  thumbnail?: string;
  featured: boolean;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ViewEvent {
  id: string;
  postId: string;
  timestamp: Date;
  userAgent?: string;
}

export enum PostStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  featured?: boolean;
  draft?: boolean;
  body: {
    code: string;
    [key: string]: unknown;
  };
}

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  live?: string;
  thumbnail?: string;
  featured?: boolean;
  body: {
    code: string;
    [key: string]: unknown;
  };
}

export interface SearchResult {
  objectID: string;
  title: string;
  content: string;
  slug: string;
  tags: string[];
  _highlightResult?: {
    title?: { value: string };
    content?: { value: string };
  };
}

export interface KPIData {
  totalPosts: number;
  totalViews: number;
  totalProjects: number;
  recentPosts: Post[];
}
