import * as connections from '../config/connection';
import { Schema, Document, Types } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

/**
* @export
* @interface IUserModel
* @extends {Document}
*/
export interface IUserModel extends Document {
 _id: Types.ObjectId;
 name: String,
 email: String,
 createdAt ? : Date;
 updatedAt ? : Date;
}

const UserSchema = new Schema({
  name: String,
  email: String,
},
{
  timestamps: true,
  collection: 'User'
});

UserSchema.plugin(mongoosePaginate);

export default connections.db.model< IUserModel >('User', UserSchema);