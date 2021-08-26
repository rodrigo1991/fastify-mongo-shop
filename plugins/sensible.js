import fp from 'fastify-plugin';
import fastifySensible from 'fastify-sensible';

export default fp(async (fastify, opts) => {
  fastify.log.debug('registering QS');
  fastify.register(fastifySensible, {
    errorHandler: false
  });
});
