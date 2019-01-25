/**
 * Users.js
 *
 * @description :: The Users table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'users',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: 'integer'
    },
    username: {
      type: 'string'
    },
    pass: {
      type: 'string'
    },
    last_login: {
      type: 'datetime'
    },
    city: {
      type: 'string'
    },
    dob: {
      type: 'date'
    },
    doj: {
      type: 'date'
    },
    role_id: {
      type: 'integer'
    },
    email: {
      type: 'string'
    },
    ph_no: {
      type: 'integer'
    },
    user_type: {
      type: 'integer'
    },
    status: {
      type: 'string'
    },
    client_id: {
      type: 'integer'
    }
  }
};