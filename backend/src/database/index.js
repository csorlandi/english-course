import Sequelize from 'sequelize';
// import moongose from 'mongoose';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Avatar from '../app/models/Avatar';

const models = [User, Avatar];

class Database {
  constructor() {
    this.init();
    // this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  // mongo() {
  //   this.mongoConnection = moongose.connect(process.env.MONGO_URL, {
  //     useNewUrlParser: true,
  //     useFindAndModify: true,
  //   });
  // }
}

export default new Database();
