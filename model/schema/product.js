import '../../utils/typedef.js';

/** @type {Product}  */
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
