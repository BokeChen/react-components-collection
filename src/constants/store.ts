import { createStore } from 'easy-peasy';
import { Middleware } from 'redux';
import logger from 'redux-logger';
import { storeModel } from 'src/models';

const middlewares: Middleware[] = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const store = createStore(storeModel, { middleware: middlewares });
export default store;
