export default properties => ({
  docs: {
    type: 'array',
    items: {
      properties
    }
  },
  totalDocs: { type: 'integer' },
  limit: { type: 'integer' },
  totalPages: { type: 'integer' },
  page: { type: 'integer' },
  pagingCounter: { type: 'integer' },
  hasPrevPage: { type: 'boolean' },
  hasNextPage: { type: 'boolean' },
  prevPage: { type: ['boolean', 'null'] },
  nextPage: { type: ['boolean', 'null'] }
});
