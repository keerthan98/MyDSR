/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */
const prefix='/api/';

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/api': {
    view: 'homepage'
  },

  ['GET ' +prefix+ 'getAll']: {
    controller: 'Tag_masterController',
    action: 'getAllData'
  },
  ['GET '+prefix+'getdata']: {
    controller: 'Tag_detailsController',
    action: 'getDATA'
  },
  ['POST '+prefix+'signup']:{
    controller: 'UsersController',
    action: 'createuser'
  },
  ['POST '+prefix+'login_access']:{
    controller:'AuthorizationController',
    action: 'login'
  },
['POST '+prefix+'project']:{
  controller:'ProjectController',
  action:'selected_projects'
},
['GET '+prefix+'project_list']:{
  controller:'ProjectdisplayController',
  action:'projects_list'
},
['GET '+prefix+'client_list']:{
  controller:'ClientsController',
  action:'clients_list'
},
['GET '+prefix+'user_list']:{
  controller:'Users_listController',
  action:'users_list'
},
['GET '+prefix+'user_status']:{
  controller:'Users_statusController',
  action:'users_status'
}
 

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
