const { test } = require('tap');
const Fastify = require('fastify');
const Mongoose = require('../../plugins/mongoose.js');

test('mongoose works standalone', async t => {
  const fastify = Fastify();
  fastify.register(Mongoose);

  await fastify.ready();
  t.equal(fastify.models(), []);
});

// You can also use plugin with opts in fastify v2
//
// test('support works standalone', (t) => {
//   t.plan(2)
//   const fastify = Fastify()
//   fastify.register(Support)
//
//   fastify.ready((err) => {
//     t.error(err)
//     t.equal(fastify.someSupport(), 'hugs')
//   })
// })
