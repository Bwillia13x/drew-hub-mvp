import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      default: [],
    },
    featured: {
      type: 'boolean',
      default: false,
    },
    draft: {
      type: 'boolean',
      default: false,
    },
    image: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace(/^posts\//, ''),
    },
    readingTime: {
      type: 'number',
      resolve: (post) => {
        const wordsPerMinute = 200;
        const wordCount = post.body.raw.split(/\s+/).length;
        return Math.ceil(wordCount / wordsPerMinute);
      },
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    stack: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    repo: {
      type: 'string',
      required: false,
    },
    live: {
      type: 'string',
      required: false,
    },
    thumbnail: {
      type: 'string',
      required: false,
    },
    featured: {
      type: 'boolean',
      default: false,
    },
    sortOrder: {
      type: 'number',
      default: 0,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (project) => project._raw.flattenedPath.replace(/^projects\//, ''),
    },
  },
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      // Temporarily disable rehype-pretty-code due to type conflicts
      // [
      //   rehypePrettyCode,
      //   {
      //     theme: 'github-dark',
      //   },
      // ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
});
