const Routes = require('next-routes'); // tslint:disable-line

const routes = Routes();

routes.add(`/`, 'index')

export const { Router, Link } = routes;

export default routes;
