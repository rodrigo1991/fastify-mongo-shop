export default async (fastify, opts) => {
  fastify.get('/', async (request, reply) => {
    fastify.log.info(fastify.someSupport());

    const limit = parseInt(request.query.limit, 10) || 20;
    const page = parseInt(request.query.page, 10) || 1;
    const sort = request.query.sort || { updatedAt: -1 };
    const { filter } = request.query;

    if (filter && filter.rut) {
      filter.rut = filter.rut.toUpperCase();
      filter.rut = filter.rut.padStart(12, '0');
    }
    /** @type {Tbks}  */
    const flow = await fastify.models().Flow.paginate(filter, {
      limit,
      page,
      sort
    });
    return flow;
  });
};
