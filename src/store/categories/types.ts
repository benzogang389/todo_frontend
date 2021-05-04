export const PROJECTS_LOADING_REQUEST = 'PROJECTS_LOADING_REQUEST';
export const PROJECTS_LOADING_SUCCESS = 'PROJECTS_LOADING_SUCCESS';

export type CategoriesTypes = Array<{ _id: string; name: string }>;

export interface CategoriesInitialState {
  categories: CategoriesTypes;
}
