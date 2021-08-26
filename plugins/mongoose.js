import mongoose from 'mongoose';
import fp from 'fastify-plugin';
import product from '../model/product.js';

/**
 * @param {import('fastify').FastifyInstance} fastify
 * @param {*} opts
 */
export default fp(async (fastify, opts) => {
  fastify.log.debug('registering mongoose');
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  const models = {
    Product: product(mongoose)
  };

  fastify.decorate('models', () => models);
});
