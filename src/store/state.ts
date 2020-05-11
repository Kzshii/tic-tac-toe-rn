import { IProductsState } from './reducers/products';

export interface IApplicationState {
  products: IProductsState;
}

export const initialState: IApplicationState = {
  products: {
    products: [],
  },
};
