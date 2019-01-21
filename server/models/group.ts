import * as connections from '../config/connection';
import { Schema, Document, Types } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

/**
* @export
* @interface IGroupModel
* @extends {Document}
*/
export interface IGroupModel extends Document {
 _id: Types.ObjectId;
 members: [Types.ObjectId];
 createdAt ? : Date;
 updatedAt ? : Date;
}

export interface IGroupPage {
  docs: [IGroupModel],
  total: Number,
  limit: Number,
  offset: Number,
}

const GroupSchema = new Schema({
  members: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
},
{
  timestamps: true,
  collection: 'Group'
});

GroupSchema.plugin(mongoosePaginate);

export default connections.db.model< IGroupModel >('Group', GroupSchema);