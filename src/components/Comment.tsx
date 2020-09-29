import React, { useRef } from 'react';
import { Button } from 'antd';
import TextView from './TextView';

const Comment = ({ pid = 0 }) => {
  const textRef = useRef();

  const add = () => {
    textRef.current.submit();
  };

  return (
    <div style={{ margin: '0 auto', width: '750px' }}>
      <TextView ref={textRef} />
      <Button
        type="primary"
        style={{ display: 'block', marginTop: '20px' }}
        onClick={add}
      >
        添加评论
      </Button>
    </div>
  );
};

export default Comment;
