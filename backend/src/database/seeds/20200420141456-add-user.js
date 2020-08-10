const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          first_name: 'Ruanderson',
          last_name: 'Vieira',
          email: 'ruanderson@accalia.io',
          password_hash: bcrypt.hashSync('123123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
