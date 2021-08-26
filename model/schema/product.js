/**
 * @description product
 * @typedef Product
 * @property {String[]} categories
 * @property {String} name
 * @property {Number} price
 * @property {String} description
 * @property {String} avatarUrl
 * @property {String} imageUrl
 * @property {Date} createdAt
 * @property {Date} updatedAt
 * @property {Date} deleteddAt
 */
const product = {
  categories: [String],
  name: String,
  price: Number,
  description: String,
  avatarUrl: String,
  imageUrl: String,
  deletedAt: { type: Date, default: null }
};

export default product;
