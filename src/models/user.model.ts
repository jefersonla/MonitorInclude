export class User {
  _id: string;
  name: string;
  username: string;
  email: string;
  website: string;
  phone: string;
  createDate: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
