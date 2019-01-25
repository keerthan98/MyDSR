/**
 * Clients.js
 *
 * @description :: The Clients table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'clients',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 15
    },
    client_name: {
      type: 'string'
    },
    client_id: {
      type: 'string'
    },
    client_ph_no: {
      type: 'integer'
    },
    shortcode: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    employee_count: {
      type: 'integer'
    },
    image_url1: {
      type: 'string'
    },
    image_url2: {
      type: 'string'
    }
  }
};