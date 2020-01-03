import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers';
import { middlewares } from '../configureStore';

/**
 * Create a testing store with imported reducers, middlewares, and initial state.
 *  globals: rootReducer, middlewares
 * @function storeFactory
 * @param {object} initialState - Initial state for store.
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddlewares(rootReducer, initialState);
}

/**
 * Return node(s) with the giver data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper} 
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

/**
 * Checks if props type passed to component are conforme to actual props
 * @param {component} component - tested component
 * @param {object} conformingProps - conforme props passed to the component
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}