import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Select } from 'antd';
import { Button, DatePicker, TextField, Popover, Stack } from '@shopify/polaris';
import Icon, { EIconName } from '@/components/Icon';

import './DatePickerRange.scss';

const { Option } = Select;

const defaultValue = { label: 'Today', value: '0' };

const OmegaDateRange = (props) => {
  const [popoverActive, setPopoverActive] = useState(false);
  const togglePopoverActive = useCallback(() => setPopoverActive((popoverActive) => !popoverActive), []);

  const [selected, setSelected] = useState(defaultValue);
  const handleSelectChange = (date, isChange = true) => {
    setSelected(date);
    let start = moment();
    let end = moment();
    switch (date.value) {
      case '0':
        break;
      case '1':
        start = moment().subtract(1, 'days');
        break;
      case '7':
        start = moment().subtract(7, 'days');
        break;
      case '30':
        start = moment().subtract(30, 'days');
        break;
      case '60':
        start = moment().subtract(60, 'days');
        break;

      default:
        break;
    }

    if (date.value !== 'custom' && isChange) {
      setSelectedDates({
        start: start.toDate(),
        end: end.toDate(),
      });
      props.onSelected(date);

      props.onSelectedDates({
        start: start.toDate(),
        end: end.toDate(),
      });
    }
  };
  const options = [
    { label: 'Today', value: '0' },
    { label: 'Yesterday', value: '1' },
    { label: 'Last 7 days', value: '7' },
    { label: 'Last 30 days', value: '30' },
    { label: 'Last 60 days', value: '60' },
    { label: 'Custom', value: 'custom', disabled: true },
  ];

  const [selectedDates, setSelectedDates] = useState({
    start: new Date(),
    end: new Date(),
  });

  const [{ month, year }, setDate] = useState({ month: 10, year: 2021 });

  const handleMonthChange = useCallback((month, year) => {
    setDate({ month, year });
  }, []);

  const getDateFormat = (date) => {
    return moment(date).format('YYYY-MM-DD');
  };

  const handleDateChange = (value) => {
    setSelectedDates(value);
    setSelected({ label: 'Custom', value: 'custom', key: 'custom' });
  };

  const handleDateReset = () => {
    setSelectedDates({
      start: new Date(),
      end: new Date(),
    });
    setSelected({ value: '0', key: '0' });
    props.onSelected({ value: '0', key: '0' });

    props.onSelectedDates({
      start: new Date(),
      end: new Date(),
    });
    setPopoverActive(false);
  };

  const handleSelectedDate = () => {
    handleDateChange(selectedDates);
    setPopoverActive(false);
    props.onSelected({
      label: 'Custom',
      value: 'custom',
      key: 'custom',
    });

    props.onSelectedDates(selectedDates);
  };

  const activator = (
    <div className="OmegaDateRange-btn">
      <Button
        onClick={togglePopoverActive}
        icon={
          <div style={{ opacity: 0.5 }}>
            <Icon name={EIconName.Calendar} />
          </div>
        }
      >
        {moment(selectedDates.start).format('MMM DD, YYYY') === moment(new Date()).format('MMM DD, YYYY') &&
        moment(selectedDates.end).format('MMM DD, YYYY') === moment(new Date()).format('MMM DD, YYYY')
          ? 'Today'
          : moment(selectedDates.start).format('MMM DD, YYYY') === moment(selectedDates.end).format('MMM DD, YYYY')
          ? moment(selectedDates.start).format('MMM DD, YYYY')
          : moment(selectedDates.start).format('MMM DD, YYYY') +
            ' - ' +
            moment(selectedDates.end).format('MMM DD, YYYY')}
      </Button>
    </div>
  );

  useEffect(() => {
    handleMonthChange(moment().month(), moment().year());
  }, []);

  useEffect(() => {
    handleSelectChange(props.selected, false);
  }, [props.selected]);

  useEffect(() => {
    if (props.selected.value === 'custom') {
      setSelectedDates(props.selectedDates);
    }
  }, [props.selectedDates]);

  useEffect(() => {
    if (props.defaultValue) {
      handleSelectChange(props.defaultValue);
    }
  }, []);

  return (
    <>
      <Popover
        active={popoverActive}
        activator={activator}
        onClose={() => setPopoverActive(false)}
        ariaHaspopup={false}
        sectioned
        preferredAlignment="right"
      >
        <div className="Omega-Date-Range">
          <div className="Omega-Date-Range-Content">
            <div className="Omega-Select">
              <label style={{ marginBottom: '0.4rem' }}>Date Range</label>
              <Select labelInValue value={selected} onChange={handleSelectChange}>
                {options.map((option) => (
                  <Option key={option.value} value={option.value} disabled={option.disabled}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </div>
            <div style={{ marginTop: '1.6rem' }}></div>
            <Stack distribution="fill" spacing="loose">
              <TextField label="Starting" value={getDateFormat(selectedDates.start)} />
              <TextField label="Ending" value={getDateFormat(selectedDates.end)} />
            </Stack>
            <DatePicker
              month={month}
              year={year}
              onChange={handleDateChange}
              onMonthChange={handleMonthChange}
              selected={selectedDates}
              multiMonth
              allowRange
              disableDatesAfter={new Date(new Date().getTime())}
              disableDatesBefore={new Date(new Date().getTime() - 61 * 24 * 60 * 60 * 1000)}
            />
            <Stack distribution="fill" spacing="loose">
              <Button primary fullWidth onClick={handleSelectedDate}>
                Selected DateTime
              </Button>
              <Button fullWidth onClick={handleDateReset}>
                Reset DateTime
              </Button>
            </Stack>
          </div>
        </div>
      </Popover>
    </>
  );
};

OmegaDateRange.propTypes = {
  selected: PropTypes.object,
  defaultValue: PropTypes.object,
  selectedDates: PropTypes.object,
  onSelected: PropTypes.func,
  onSelectedDates: PropTypes.func,
};

OmegaDateRange.defaultProps = {
  selected: defaultValue,
  open: {
    start: new Date(),
    end: new Date(),
  },
  onSelected: () => {},
  onSelectedDates: () => {},
};

export default OmegaDateRange;
