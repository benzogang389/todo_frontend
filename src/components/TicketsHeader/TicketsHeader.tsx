import { TicketsHeaderProps } from './types';

import './TicketsHeader.scss';

const TicketsHeader: React.FC<TicketsHeaderProps> = ({ formik }) => {
  return (
    <div className="tickets__header">
      <div className="tickets__header-form">
        <form onSubmit={formik.handleSubmit}>
          <div className="tickets__header-lining">
            <input
              id="text"
              placeholder="Jot something down"
              type="text"
              value={formik.values.text}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.text && formik.touched.text
                  ? 'tickets__header-input error'
                  : 'tickets__header-input'
              }
            />
            {formik.errors.text && formik.touched.text && (
              <div className="tickets__header-err">{formik.errors.text}</div>
            )}
          </div>

          <button className="tickets__header-btn" type="submit" disabled={formik.isSubmitting}>
            &#43;
          </button>
        </form>
      </div>
    </div>
  );
};

export default TicketsHeader;
