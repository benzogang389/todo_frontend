import { ItemsCotentProps, ItemType } from './types';

import './ItemsCotent.scss';

const ItemsCotent: React.FC<ItemsCotentProps> = ({
  formik,
  editableTaskId,
  items,
  editItem,
  deleteItem,
  cancelEdit,
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
              <div className="list__card" key={String(item._id)}>
                <div className="list__card-content">
                  {editableTaskId !== item._id ? (
                    <p className="list__card-title">{item.name}</p>
                  ) : (
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
                  )}

                  {!window.location.pathname.includes('/categories') && (
                    <p className="list__card-category">Card category</p>
                  )}
                </div>

                {editableTaskId !== item._id && (
                  <div className="list__card-btns">
                    <button
                      onClick={() => editItem(String(item._id), String(item.name))}
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
