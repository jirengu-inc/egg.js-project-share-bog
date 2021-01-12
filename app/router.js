'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  console.log(app.config.env);
  const { router, controller } = app;
  router.get('/', controller.home.index);
};
