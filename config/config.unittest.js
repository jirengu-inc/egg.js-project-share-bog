const path = require('path');
exports.sequelize = {
  dialect: 'sqlite',
  storage: path.resolve(__dirname, '../database/egg-sequelize-doc-unittest.sqlite'),
};