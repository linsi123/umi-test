import React, { useState, useEffect, SyntheticEvent } from 'react';
import Item from './Item';

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
