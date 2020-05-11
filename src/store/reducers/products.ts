import { ProductsActionTypes, ProductsActionUnion } from '../actions/products';
import { Product } from '../../types';

export interface IProductsState {
  products: Product[];
}

export const initialState: IProductsState = {
  products: [],
};

const userReducer = (
  state = initialState,
  action: ProductsActionUnion
): IProductsState => {
  switch (action.type) {
    case ProductsActionTypes.SET_PRODUCT:
      const resultsExistsIdx = state.products
        .map(x => x.id)
        .indexOf(action.payload.id);
      if (resultsExistsIdx > -1) {
        return {
          ...state,
          products: [
            ...state.products.filter(x => x.id !== action.payload.id),
            action.payload,
          ],
        };
      }
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ProductsActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: [...state.products.filter(x => x.id !== action.payload.id)],
      };
    case ProductsActionTypes.WIPE_LIST:
      return {
        ...state,
        products: [],
      };
    default:
      return state;
  }
};

export default userReducer;
