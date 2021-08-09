import mongoosePaginate from 'mongoose-paginate-v2';
import schemaDefinition from './schema/user.js';

export default async mongoose => {
  const schemaInstance = mongoose.Schema(schemaDefinition, {
    timestamps: true
  });
  schemaInstance.plugin(mongoosePaginate);

  const modelInstance = mongoose.model('user', schemaInstance);

  return modelInstance;
};
