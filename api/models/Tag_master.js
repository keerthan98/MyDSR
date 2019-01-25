/**
 * Tag_master.js
 *
 * @description :: The Tag_master table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'tag_master',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 15
    },
    tag_code: {
      type: 'string'
    },
    parent_id: {
      type: 'string'
    },
    tag_desc: {
      type: 'string'
    },
    client_id: {
      type: 'integer'
    }
  }
};