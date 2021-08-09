import fp from 'fastify-plugin';
import fastifyQs from 'fastify-qs';

/**
 * @param {import('fastify').FastifyInstance} fastify
 * @param {*} opts
 */
export default fp(async (fastify, opts) => {
  fastify.log.debug('registering QS');
  fastify.register(fastifyQs, {});
});
