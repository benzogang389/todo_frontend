import './TicketsContent.scss';

const TicketsContent = () => {
  return (
    <div className="tickets__content">
      <p className="tickets__content__title">Todo list</p>

      <div className="tickets__content-list-wrapper">
        <div className="tickets__content-list list">
          <div className="list__card">
            <div className="list__card-content">
              <p className="list__card-title">Card title</p>
              <p className="list__card-category">Card category</p>
            </div>

            <div className="list__card-btns">
              <button type="button" className="list__card-edit">
                Edit
              </button>
              <button type="button" className="list__card-delete">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsContent;
