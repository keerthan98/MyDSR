/**
 * Tag_details.js
 *
 * @description :: The Tag_details table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'tag_details',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 15
    },
    key_code: {
      type: 'string'
    },
    key_value: {
      type: 'string'
    },
    parent_id: {
      type: 'string'
    },
    client_id: {
      type: 'integer'
    }
  }
};