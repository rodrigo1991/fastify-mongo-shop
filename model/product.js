import mongoosePaginate from 'mongoose-paginate-v2';
import schemaDefinition from './schema/product.js';

export default mongoose => {
  const schemaInstance = mongoose.Schema(schemaDefinition, {
    timestamps: true
  });
  schemaInstance.plugin(mongoosePaginate);

  const modelInstance = mongoose.model('product', schemaInstance);

  return modelInstance;
};
