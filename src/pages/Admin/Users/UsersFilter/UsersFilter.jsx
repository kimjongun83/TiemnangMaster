import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';

import Input from '@/components/Input';
import Select from '@/components/Select';
import Button from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import moment from 'moment/moment';
import { EFormat } from '@/common/enums';

import { plansOptions, statusOptions } from './UsersFilter.data';
import './UsersFilter.scss';
import DatePickerRange from '@/components/DatePickerRange';

const UsersFilter = ({ params, onFilter }) => {
  const [form] = Form.useForm();
  const [visibleAdvancedFilter, setVisibleAdvancedFilter] = useState(false);
  const { q, plan, status, created_at_min, created_at_max } = params;

  const planValue = plansOptions.find((option) => option.value === plan);
  const statusValue = statusOptions.find((option) => option.value === status);
  const createdAtMinValue = created_at_min ? moment(created_at_min, EFormat.DATE_TIME) : undefined;
  const createdAtMaxValue = created_at_min ? moment(created_at_max, EFormat.DATE_TIME) : undefined;

  const handleChangeFilter = (key, value) => {
    onFilter?.({
      ...params,
      [key]: value,
    });
  };

  return (
    <div className="UsersFilter">
      <Form form={form} className="UsersFilter-wrapper">
        <Row justify="space-between" gutter={[24, 24]}>
          <Col>
            <Row gutter={[24, 24]}>
              <Col>
                <Form.Item label="User name">
                  <Input placeholder="User name or User email" onSearch={(value) => handleChangeFilter('q', value)} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Created Date">
                  <DatePickerRange
                    defaultValue={{ label: 'Last 7 days', value: '7' }}
                    onSelectedDates={(values) => {
                      const { start, end } = values || {};

                      onFilter?.({
                        ...params,
                        created_at_min: start ? moment(start).format(EFormat.DATE_TIME) : undefined,
                        created_at_max: end ? moment(end).format(EFormat.DATE_TIME) : undefined,
                      });
                    }}
                  />
                  {/* <DatePicker
                    value={[createdAtMinValue, createdAtMaxValue]}
                    picker="range"
                    allowClear
                    placeholder={['Start Date', 'End Date']}
                    onChange={(value) => {
                      const [start, end] = value || [];

                      onFilter?.({
                        ...params,
                        created_at_min: start ? moment(start).format(EFormat.DATE_TIME) : undefined,
                        created_at_max: end ? moment(end).format(EFormat.DATE_TIME) : undefined,
                      });
                    }}
                  /> */}
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row gutter={[24, 24]}>
              {visibleAdvancedFilter && (
                <>
                  <Col>
                    <Form.Item label="User status">
                      <Select
                        value={statusValue}
                        placeholder="User status"
                        allowClear
                        options={statusOptions}
                        onChange={(option) => handleChangeFilter('status', option?.value)}
                      />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item label="Plan">
                      <Select
                        value={planValue}
                        placeholder="Plan"
                        allowClear
                        options={plansOptions}
                        onChange={(option) => handleChangeFilter('plan', option?.value)}
                      />
                    </Form.Item>
                  </Col>
                </>
              )}

              <Col>
                <Button
                  title="Advance filter"
                  type="link"
                  icon={visibleAdvancedFilter ? <UpOutlined /> : <DownOutlined />}
                  reverse
                  onClick={() => setVisibleAdvancedFilter(!visibleAdvancedFilter)}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default UsersFilter;
