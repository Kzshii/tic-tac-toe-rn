import { IApplicationState } from '../state';

export const productsSelector = (state: IApplicationState) =>
  state.products.products;
