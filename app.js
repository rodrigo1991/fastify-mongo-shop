import AutoLoad from 'fastify-autoload';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async (fastify, opts) => {
  fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins')
  });

  fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes')
  });
  fastify.listen(3000);
};
