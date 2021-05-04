import { Link } from 'react-router-dom';

import { ItemsHeaderProps } from './types';

import './ItemsHeader.scss';

/* 
work Formik handleChange:

const handleChange = event => {
   setValues(prevValues => ({
     ...prevValues,
     // we use the name to tell Formik which key of `values` to update
     [event.target.name]: event.target.value
   });
 }
*/

const ItemsHeader: React.FC<ItemsHeaderProps> = ({ formik, categories }) => {
  return (
    <div className="items__header">
      <div className="items__header-form">
        <form onSubmit={formik.handleSubmit}>
          <div className="items__header-lining">
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

            {!window.location.pathname.includes('/categories') && categories && (
              <>
                <div className="items__header-categories">
                  {categories.length ? 'cat' : <>No categories</>}
                </div>
                {formik.errors.categoryId && formik.touched.categoryId && (
                  <div className="items__header-err">{formik.errors.categoryId}</div>
                )}
              </>
            )}
            {!window.location.pathname.includes('/categories') ? (
              <Link className="items__header-link" to="/categories">
                All categories
              </Link>
            ) : (
              <Link className="items__header-link" to="/">
                All tasks
              </Link>
            )}
          </div>

          <button className="items__header-btn" type="submit" disabled={formik.isSubmitting}>
            &#43;
          </button>
        </form>
      </div>
    </div>
  );
};

export default ItemsHeader;
