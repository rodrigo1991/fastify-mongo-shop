export default async (fastify, opts) => {
  fastify.get('/', async (request, reply) => {
    return { id: 1, content: '¡niuna weá!' };
  });
  fastify.post('/', async (request, reply) => {
    return request.body;
  });
};
