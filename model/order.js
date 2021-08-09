import mongoosePaginate from 'mongoose-paginate-v2';
import schemaDefinition from './schema/order.js';

export default async mongoose => {
  const schemaInstance = mongoose.Schema(schemaDefinition, {
    timestamps: true
  });
  schemaInstance.plugin(mongoosePaginate);

  const modelInstance = mongoose.model('order', schemaInstance);

  return modelInstance;
};
