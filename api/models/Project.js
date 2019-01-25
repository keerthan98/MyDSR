/**
 * Project.js
 *
 * @description :: The Project table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'project',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    client_id: {
      type: 'integer'
    },
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 15
    },
    project_id: {
      type: 'string'
    },
    project_name: {
      type: 'string'
    },
    alias_name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    created_at: {
      type: 'datetime'
    },
    created_by: {
      type: 'string'
    },
    updated_at: {
      type: 'datetime'
    },
    updated_by: {
      type: 'string'
    }
  }
};