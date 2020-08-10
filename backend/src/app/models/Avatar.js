import Sequelize, { Model } from 'sequelize';

class Avatar extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}:${process.env.APP_PORT}/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Avatar;
