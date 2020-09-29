import React, { useState, useEffect, SyntheticEvent } from 'react';
import { Input, Select, Button } from 'antd';
import { useDispatch, useSelector } from 'dva';
import { DownSquareOutlined, UpSquareOutlined } from '@ant-design/icons';
import Item from './Item';
import { useVisible } from '../hooks/useVisible';

const List = ({ list }: any) => {
  return (
    <div>
      {list.map((item: any) => {
        return <Item item={item} />;
      })}
    </div>
  );
};

export default List;
