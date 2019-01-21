import Promise from 'bluebird';
import L from '../../common/logger';
import User, {IUserModel} from '../../models/user';

interface IQuery {
  text?: {
    search: String,
  }
}

interface IUserPage {
  total: Number;
  docs: [IUserModel];
}

export class UserService {
  all(filter: any, search: String, offset: Number, limit: Number, sort: any) : Promise<IUserPage> {
    let query: IQuery = {...filter}
    if (search) {
      query.text = { search: search };
    }
    return User.paginate(query, {offset, limit, sort});
  }

  byId(_id: String): Promise<IUserModel> {
    return User.findById(_id);
  }

  create(userBody): Promise<IUserModel> {
    return new User(userBody).save();
  }

  update(_id: String, user: IUserModel): Promise<IUserModel> {
    return User.findOneAndUpdate({_id}, user, {new: true});
  }

  delete(_id: String): Promise<String> {
    return User.deleteOne({_id});
  }
}

export default new UserService();