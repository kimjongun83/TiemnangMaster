import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import Breadcrumb from '@/components/Breadcrumb';
import UsersFilter from '@/pages/Admin/Users/UsersFilter';
import { Paths } from '@/pages/routers';
import UsersTable from '@/pages/Admin/Users/UsersTable';
import { DEFAULT_PAGE_SIZE, DEFAULT_PAGE } from '@/common/constants';
import { renderSortByString } from '@/utils/functions';
import { getUsersAction } from '@/redux/actions';
import { EFormat } from '@/common/enums';

import './Users.scss';

const Users = () => {
  const dispatch = useDispatch();

  const [getUsersParamsRequest, setGetUsersParamsRequest] = useState({
    page: DEFAULT_PAGE,
    limit: DEFAULT_PAGE_SIZE,
  });

  const dataBreadcrumb = [
    { title: 'Home', link: Paths.Home },
    { title: 'Users', link: Paths.Users },
    { title: 'User Management', link: Paths.Users },
  ];

  const handleTableChange = (_, __, sorter) => {
    const { order, field } = sorter;
    const dataSortBy = renderSortByString(field, order);
    handleFilter({ sort: dataSortBy });
  };

  const handleFilter = (filtersValue) => {
    setGetUsersParamsRequest({
      ...getUsersParamsRequest,
      page: DEFAULT_PAGE,
      ...filtersValue,
    });
  };

  const handlePageChange = (page, limit) => {
    setGetUsersParamsRequest({
      ...getUsersParamsRequest,
      page,
      limit: limit || getUsersParamsRequest.limit,
    });
  };

  const getUsers = useCallback(() => {
    if (getUsersParamsRequest.created_at_min && getUsersParamsRequest.created_at_max) {
      dispatch(getUsersAction.request({ params: getUsersParamsRequest }));
    }
  }, [dispatch, getUsersParamsRequest]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="Users">
      <Breadcrumb data={dataBreadcrumb} title="Users management" />

      <div className="Users-wrapper">
        <UsersFilter params={getUsersParamsRequest} onFilter={handleFilter} />
        <UsersTable
          params={getUsersParamsRequest}
          onReload={getUsers}
          onPageChange={handlePageChange}
          onTableChange={handleTableChange}
        />
      </div>
    </div>
  );
};
export default Users;
