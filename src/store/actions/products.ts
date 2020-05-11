import { Action, ActionsUnion, createAction } from './helpers';
import { Product } from '../../types';

export enum ProductsActionTypes {
  SET_PRODUCT = 'SET_PRODUCT',
  WIPE_LIST = 'WIPE_LIST',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
}

export type SetProductAction = Action<ProductsActionTypes.SET_PRODUCT, Product>;
export type WipeProductAction = Action<ProductsActionTypes.WIPE_LIST, void>;
export type DeleteProductAction = Action<
  ProductsActionTypes.DELETE_PRODUCT,
  Product
>;

export const ProductsActions = {
  setProduct: (product: Product): SetProductAction =>
    createAction(ProductsActionTypes.SET_PRODUCT, product),
  deleteProduct: (product: Product): DeleteProductAction =>
    createAction(ProductsActionTypes.DELETE_PRODUCT, product),
  wipeList: (): WipeProductAction =>
    createAction(ProductsActionTypes.WIPE_LIST),
};

export type ProductsActionUnion = ActionsUnion<typeof ProductsActions>;
