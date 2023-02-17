import React from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';

import ImageBook from '@/assets/images/emotion/icon-books.svg';
import './CategoriesEmotion.scss';

const CategoriesEmotion = ({ loading, titleSticky, ids = [], data = [], onClickItem, onLoadMore }) => {
  const handleScroll = (e) => {
    const element = e.currentTarget;
    const isScrollEnd = element.offsetWidth + Math.ceil(element.scrollLeft) >= element.scrollWidth;

    if (isScrollEnd && !loading) onLoadMore?.();
  };

  return (
    <div className="CategoriesEmotion">
      <div className="container">
        <div className="CategoriesEmotion-wrapper">
          <div
            className="CategoriesEmotion-filters"
            style={{ overflow: titleSticky ? undefined : 'auto' }}
            onScroll={handleScroll}
          >
            {data.map((item, index) => (
              <>
                <div className={classNames('CategoriesEmotion-filters-item-title', { sticky: titleSticky })}>
                  {item.title}
                </div>
                <div
                  className="CategoriesEmotion-filters-item-list"
                  style={{ overflow: !titleSticky ? undefined : 'auto' }}
                >
                  <Row gutter={[0, 12]} wrap={false}>
                    {item.list.map((list, listIdx) => (
                      <Col key={listIdx}>
                        <div
                          className={classNames('CategoriesEmotion-filters-item-list-item flex items-center', {
                            active: ids.includes(list._id),
                          })}
                          onClick={() => onClickItem?.(list, index)}
                        >
                          <div className="CategoriesEmotion-filters-item-list-item-icon">
                            <img src={list.iconPath || ImageBook} alt="" />
                          </div>
                          <div className="CategoriesEmotion-filters-item-list-item-label">{list.name}</div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesEmotion;
