import pagination from './pagination.js';

const responseProperties = {
  _id: { type: 'string' },
  categories: {
    type: 'array',
    items: { type: 'string' }
  },
  name: { type: 'string' },
  price: { type: 'number' },
  description: { type: 'string' },
  avatarUrl: { type: 'string' },
  imageUrl: { type: 'string' },
  createdAt: { type: 'string' },
  updatedAt: { type: 'string' },
  deletedAt: { type: ['string', 'null'] }
};

export const postSchema = {
  schema: {
    body: {
      type: 'object',
      required: [
        'categories',
        'name',
        'price',
        'description',
        'avatarUrl',
        'imageUrl'
      ],
      properties: {
        categories: {
          type: 'array',
          items: { type: 'string' }
        },
        name: { type: 'string' },
        price: { type: 'number' },
        description: { type: 'string' },
        avatarUrl: { type: 'string' },
        imageUrl: { type: 'string' }
      }
    },
    response: {
      201: {
        type: 'object',
        properties: responseProperties
      }
    }
  }
};

export const putSchema = {
  schema: {
    params: {
      type: 'object',
      additionalProperties: false,
      required: ['id'],
      properties: { id: { type: 'string', pattern: '^[0-9a-fA-F]{24}$' } }
    },
    response: {
      201: {
        type: 'object',
        properties: responseProperties
      }
    }
  }
};

export const findByIdSchema = {
  schema: {
    params: {
      type: 'object',
      additionalProperties: false,
      properties: { id: { type: 'string', pattern: '^[0-9a-fA-F]{24}$' } }
    },
    response: {
      200: {
        type: 'object',
        properties: responseProperties
      }
    }
  }
};

export const getSchema = {
  schema: {
    querystring: {
      limit: { type: 'integer' },
      filter: { type: 'object' }
    },
    response: {
      200: {
        type: 'object',
        properties: pagination(responseProperties)
      }
    }
  }
};
