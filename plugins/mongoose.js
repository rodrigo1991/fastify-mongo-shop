import mongoose from 'mongoose';
import fp from 'fastify-plugin';
import product from '../model/product.js';
import user from '../model/user.js';
import order from '../model/order.js';

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
    Product: product(mongoose),
    User: user(mongoose),
    Order: order(mongoose)
  };

  fastify.decorate('models', () => models);
});
