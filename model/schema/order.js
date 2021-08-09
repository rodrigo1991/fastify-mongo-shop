import '../../utils/typedef.js';
import product from './product.js';
import user from './user.js';

/** @type {Order}  */
const order = {
  rut: String,
  voucher: String,
  total: Number,
  user,
  products: [product]
};

export default order;
