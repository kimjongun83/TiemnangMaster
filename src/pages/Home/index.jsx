import CategoriesEmotion from '@/containers/CategoriesEmotion';
import Introduction from '@/containers/Introduction/Introduction';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  EGetCategoryListAction,
  EGetProductbyCategoriesAction,
  CategoryListAction,
  getProductByCategoriesAction,
} from '@/redux/actions';
import { uiActions } from '@/redux/actions';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { EResponseCode } from '@/common/enums';
import BookList from '@/containers/BookList';

const HomePage = () => {
  const dispatch = useDispatch();
  const categoriesState = useSelector((state) => state.uiReducer.categories);
  console.log('CATEGORIES STATE', categoriesState);
  const [categoryList, setCategoryList] = useState([]);
  const [getCategoriesListParamsRequest, setCategoriesListParamsRequest] = useState({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE * 5,
  });
  const getProductByCategoriesState = useSelector(
    (state) => state.productReducer.getProductByCategoriesAppResponse?.data,
  );
  console.log('getProductByCategoriesState', getProductByCategoriesState);
  const getCategoriesListLoading = useSelector((state) => state.loadingReducer[EGetCategoryListAction.CATEGORY_LIST]);
  const getCategoriesList = () => {
    dispatch(CategoryListAction.request({ params: getCategoriesListParamsRequest }, handleCategoriesListSuccess));
  };
  const handleCategoriesListSuccess = (response) => {
    const defaultData = getCategoriesListParamsRequest.page === DEFAULT_PAGE;
    const data = response.data.records;
    setCategoryList(defaultData ? data : 'ERROR');
  };
  const getProductByCategories = () => {
    const isOnlyThreeValue = categoriesState;
    if (isOnlyThreeValue)
      dispatch(getProductByCategoriesAction.request({ body: categoriesState }, handleSuccessProductCategory));
  };
  const handleSuccessProductCategory = (response) => {
    if (response.success === EResponseCode.OK) {
      alert('SUCCESS');
    }
  };
  useEffect(() => {
    getProductByCategories();
  }, [categoriesState]);
  useEffect(() => {
    getCategoriesList();
  }, []);

  const dataCategoriesEmotion = [
    {
      title: 'Chọn 3 danh mục',
      list: categoryList?.[0] || [],
    },
    {
      title: '',
      list: categoryList?.[1] || [],
    },
    {
      title: '',
      list: categoryList?.[2] || [],
    },
  ];
  const handleClickCategory = (data, indexArray) => {
    if (typeof indexArray === 'number') {
      const isExisted = categoriesState?.includes(data._id);

      if (!isExisted) {
        const newFilter = categoriesState?.map((item, index) => {
          if (index === indexArray) return data._id;

          return item;
        });

        dispatch(uiActions.setCategories(newFilter));
      }
    }
  };
  return (
    <div className="BooksLibrary">
      <Introduction />
      <CategoriesEmotion
        data={dataCategoriesEmotion}
        ids={categoriesState}
        onClickItem={handleClickCategory}
        loading={getCategoriesListLoading}
      />
      <BookList data={getProductByCategoriesState} />
    </div>
  );
};

export default HomePage;
