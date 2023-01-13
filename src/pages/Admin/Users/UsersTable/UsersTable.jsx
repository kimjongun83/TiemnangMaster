import React from 'react';
import { PlusOutlined, DownloadOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import moment from 'moment/moment';
import { useDispatch } from 'react-redux';

import Switch from '@/components/Switch';
import { EIconColor } from '@/components/Icon';
import Table from '@/components/Table';
import Pagination from '@/components/Pagination';
import Button from '@/components/Button';
import { EGetUsersAction, EUpdateUserAction, updateUserAction } from '@/redux/actions';
import { EEmpty } from '@/common/enums';

import './UsersTable.scss';

const UsersTable = ({ params, onReload, onPageChange, onTableChange }) => {
  const dispatch = useDispatch();

  const getUsersState = useSelector((state) => state.userReducer.getUsersResponse);
  const updateUserLoading = useSelector((state) => state.loadingReducer[EUpdateUserAction.UPDATE_USER]);

  const total = getUsersState?.meta?.pagination?.total;

  const { page, limit } = params;

  const handleChangeStatusUser = (checked, data) => {
    const body = {
      username: data?.username,
      fullname: data?.fullname,
      status: !checked,
    };

    dispatch(updateUserAction.request({ body }, handleUpdateUserSuccess));
  };

  const handleUpdateUserSuccess = () => {
    onReload?.();
  };

  const columns = [
    {
      key: 'username',
      dataIndex: 'username',
      title: 'User Name',
      sorter: true,
    },
    {
      key: 'active_code',
      dataIndex: 'active_code',
      title: 'Promo Code',
      sorter: true,
      render: (value) => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'created_at',
      dataIndex: 'created_at',
      title: 'Created Date',
      sorter: true,
      render: (value) => moment(value).fromNow(),
    },
    {
      key: 'apps_count',
      dataIndex: 'apps_count',
      title: 'Apps',
      sorter: true,
      render: (value) => <span style={{ color: EIconColor.LIMEADE }}>{value}</span>,
    },
    {
      key: 'keywords_count',
      dataIndex: 'keywords_count',
      title: 'Keywords',
      sorter: true,
      render: (value) => <span style={{ color: EIconColor.LIMEADE }}>{value}</span>,
    },
    {
      key: 'plan',
      dataIndex: 'plan',
      title: 'Plan',
      sorter: true,
      render: (value) => <span className="text-capitalize">{value || EEmpty.STRIKE_THROUGH}</span>,
    },
    {
      key: 'statusList',
      dataIndex: 'statusList',
      title: 'GA/Shopify',
      sorter: true,
      render: () => (
        <div className="UsersTable-status-list">
          <div className="UsersTable-status-list-item flex items-center cancel">
            <div className="UsersTable-status-list-item-circle" />
            <span className="UsersTable-status-list-item-label">Google is connected</span>
          </div>

          <div className="UsersTable-status-list-item flex items-center success">
            <div className="UsersTable-status-list-item-circle" />
            <span className="UsersTable-status-list-item-label">Shopify is connected</span>
          </div>
        </div>
      ),
    },
    {
      key: 'inactive',
      dataIndex: 'inactive',
      title: 'Status',
      render: (value, record) => {
        return (
          <Switch
            value={!value}
            onChange={(checked) => handleChangeStatusUser(checked, record)}
            disabled={updateUserLoading}
          />
        );
      },
    },
  ];

  const dataSources = getUsersState?.data?.map((item) => ({
    ...item,
  }));

  return (
    <div className="UsersTable">
      <div className="UsersTable-header">
        <Row gutter={[16, 16]} justify="space-between" align="middle">
          <Col>
            <Row gutter={[16, 16]}>
              <Col>
                <div className="UsersTable-header-title">Users Listing</div>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row gutter={[16, 16]}>
              <Col>
                <Button title="Add New" icon={<PlusOutlined />} type="primary" />
              </Col>
              <Col>
                <Button shape="circle" icon={<DownloadOutlined />} type="default" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="UsersTable-table">
        <Table columns={columns} dataSources={dataSources} onChange={onTableChange} />
      </div>
      <div className="UsersTable-pagination flex justify-end">
        <Pagination
          page={page}
          pageSize={limit}
          total={total}
          showTotal={(total) => <Button title={`${total} users`} type="defautl" />}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default UsersTable;
