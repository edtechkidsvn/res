import Promise from 'bluebird';
import Group, {IGroupModel, IGroupPage} from '../../models/group';

interface IQuery {
  text?: {
    search: String,
  }
}

export class GroupService {
  all(filter: any, search: String, offset: Number, limit: Number, sort: any) : Promise<IGroupPage> {
    let query: IQuery = {...filter}
    if (search) {
      query.text = { search: search };
    }
    return Group.paginate(query, {offset, limit, sort});
  }

  byId(_id: String): Promise<IGroupModel> {
    return Group.findById(_id);
  }

  create(groupBody): Promise<IGroupModel> {
    return new Group(groupBody).save();
  }

  update(_id: String, group: IGroupModel): Promise<IGroupModel> {
    return Group.findOneAndUpdate({_id}, group, {new: true});
  }

  delete(_id: String): Promise<String> {
    return Group.deleteOne({_id});
  }
}

export default new GroupService();