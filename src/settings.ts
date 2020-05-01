export const DEFAULT_CHUNK = 'default';

export const DEFAULT_OPTIONS = {
  distPath: './dist',
  chunkFileNameSuffix: '.bundle.js',
  publicPathPrefix: '',
  chunkHttpRequestOptions: {},
  chunkNameMapping: {},
};

export const METADATA_FILE_TEMPLATE = `// This auto-generated file defines some options used when "<PATH>" is debundled.
module.exports = <JSON>\n`;
