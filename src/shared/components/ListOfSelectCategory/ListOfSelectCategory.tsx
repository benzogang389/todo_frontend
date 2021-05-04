import { ItemsHeaderProps } from 'components/ItemsHeader/types';

const ListOfSelectCategory: React.FC<ItemsHeaderProps> = ({
  categories,
  selectedCategoryId,
  selectCategory,
  formik,
}) => {
  return (
    <>
      <div className="items__header-choose">Select a category:</div>
      <div className="items__header-categories">
        {categories && categories.length && selectCategory ? (
          categories.map((item) => (
            <div
              key={item._id}
              className="items__header-card "
              onClick={() => selectCategory(item._id)}
            >
              {item.name}

              {selectedCategoryId && selectedCategoryId === item._id && (
                <div className="items__header-check">L</div>
              )}
            </div>
          ))
        ) : (
          <>No categories</>
        )}
      </div>
      {formik.errors.categoryId && formik.touched.categoryId && (
        <div className="items__header-err">{formik.errors.categoryId}</div>
      )}
    </>
  );
};

export default ListOfSelectCategory;
