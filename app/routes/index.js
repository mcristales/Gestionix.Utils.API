const keyRoutes = require ('./key_routes');

module.exports = function(app, db) {
    keyRoutes(app, db);
      // Other route groups could go here, in the future
}