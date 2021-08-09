import {
  findByIdSchema,
  getSchema,
  postSchema,
  putSchema
} from '../../schemas/product.js';

/**
 * @param {import('fastify').FastifyInstance} fastify
 * @param {*} opts
 */
export default async (fastify, _opts) => {
  /** @type {import('mongoose').Model} */
  const { Product } = fastify.models();

  /**
   * @param {import('fastify').FastifyRequest} request
   * @param {import('fastify').FastifyReply} reply
   */
  fastify.get('/', getSchema, async (request, _reply) => {
    let filter = { deletedAt: null };

    const limit = parseInt(request.query.limit, 10) || 20;
    const page = parseInt(request.query.page, 10) || 1;
    const sort = request.query.sort || { updatedAt: -1 };
    filter = { ...filter, ...request.query.filter };

    fastify.log.debug('filter = %o', filter);

    /** @type {Tbks}  */
    const products = await Product.paginate(filter, {
      limit,
      page,
      sort
    });
    return products;
  });

  /**
   * @param {import('fastify').FastifyRequest} request
   * @param {import('fastify').FastifyReply} reply
   */
  fastify.get('/:id', findByIdSchema, async (request, reply) => {
    const product = await Product.findById(request.params.id);
    if (product === null) {
      reply.code(404);
      return 'not found';
    }
    return product;
  });

  /**
   * @param {import('fastify').FastifyRequest} request
   * @param {import('fastify').FastifyReply} reply
   */
  fastify.delete('/:id', async (request, reply) =>
    Product.updateOne({ _id: request.params.id }, { deletedAt: Date.now() })
  );

  /**
   * @param {import('fastify').FastifyRequest} request
   * @param {import('fastify').FastifyReply} reply
   */
  fastify.put('/:id', putSchema, async (request, _reply) => {
    fastify.log.info('Replacing %o', request.body);

    return Product.findOneAndUpdate(
      {
        _id: request.params.id
        // , deletedAt: null
      },
      request.body,
      { new: true }
    );
  });

  /**
   * @param {import('fastify').FastifyRequest} request
   * @param {import('fastify').FastifyReply} reply
   */
  fastify.post('/', postSchema, async (request, reply) => {
    reply.code(201);
    fastify.log.info('Creating %o', request.body);

    const product = new Product(request.body);
    return product.save();
  });
};
