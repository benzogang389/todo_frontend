export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS';
export const CATEGORIES_ERROR = 'CATEGORIES_ERROR';
export const CATEGORIES_WITH_RELOAD_SUCCESS = 'CATEGORIES_WITH_RELOAD_SUCCESS';

export type CategoryType = { _id: string; name: string };

export type CategoriesTypes = Array<CategoryType>;

export interface CategoriesInitialState {
  categories: CategoriesTypes;
  loading: boolean;
  reload: boolean;
  error: string;
}

export interface CreateNewCategoryProps {
  text: string;
}

export interface UpdateCategoryProps {
  text: string;
  id: string;
}

export interface DeleteCategoryProps {
  id: string;
}
