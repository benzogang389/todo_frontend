import ListOfSelectCategory from 'shared/components/ListOfSelectCategory/ListOfSelectCategory';

import { ItemsCotentProps, ItemType } from './types';

import './ItemsCotent.scss';

const ItemsCotent: React.FC<ItemsCotentProps> = ({
  formik,
  editableItemId,
  items,
  editItem,
  deleteItem,
  cancelEdit,
  onChange,
  selectCategory,
  selectedCategoryId,
  categories,
}) => {
  return (
    <div className="items__content">
      <p className="items__content__title">
        {!window.location.pathname.includes('/categories') ? 'Todo list' : 'Category list'}
      </p>

      <div className="items__content-list-wrapper">
        <div className="items__content-list list">
          {items.length ? (
            items.map((item: ItemType) => (
              <div
                className={item.completed ? 'list__card list__card--complete' : 'list__card'}
                key={String(item._id)}
              >
                <div className="list__card-content">
                  {!window.location.pathname.includes('/categories') && (
                    <label className="list__card-label">
                      <input
                        checked={Boolean(item.completed)}
                        onChange={(e) => onChange && onChange(e, String(item._id))}
                        id="checkbox"
                        type="checkbox"
                      />
                    </label>
                  )}

                  {editableItemId !== item._id ? (
                    <div className="list__card-title-wrapper">
                      <p className="list__card-title">{item.name}</p>

                      {!window.location.pathname.includes('/categories') && (
                        <p className="list__card-category">
                          {categories?.find((itemCat) => itemCat._id === item.categoryId)?.name}
                        </p>
                      )}
                    </div>
                  ) : (
                    <>
                      <form onSubmit={formik.handleSubmit}>
                        <div className="list__card-form">
                          <input
                            id="text"
                            placeholder="Jot something down"
                            type="text"
                            value={formik.values.text}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                              formik.errors.text && formik.touched.text
                                ? 'items__header-input error'
                                : 'items__header-input'
                            }
                          />

                          {formik.errors.text && formik.touched.text && (
                            <div className="items__header-err">{formik.errors.text}</div>
                          )}

                          <ListOfSelectCategory
                            formik={formik}
                            categories={categories}
                            selectCategory={selectCategory}
                            selectedCategoryId={selectedCategoryId}
                          />
                        </div>

                        <div className="list__card-btns list__card-btns--edit">
                          <button className="list__card-save" type="submit">
                            Save
                          </button>
                          <button className="list__card-cancel" type="button" onClick={cancelEdit}>
                            Cancel
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>

                {editableItemId !== item._id && (
                  <div className="list__card-btns">
                    <button
                      onClick={() => {
                        if (!window.location.pathname.includes('/categories')) {
                          editItem(String(item._id), String(item.name), String(item.categoryId));
                        } else {
                          editItem(String(item._id), String(item.name));
                        }
                      }}
                      type="button"
                      className="list__card-edit"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteItem(String(item._id))}
                      type="button"
                      className="list__card-delete"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <>{!window.location.pathname.includes('/categories') ? 'No tasks' : 'No categories'}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemsCotent;
