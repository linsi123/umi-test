import React, {
  useState,
  useEffect,
  SyntheticEvent,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { Input, Select, Button } from 'antd';
import { useDispatch, useSelector } from 'dva';

const { TextArea } = Input;

interface TextViewProps {
  pid: number;
}

const TextView = (props: TextViewProps, ref: any) => {
  const { pid = 0 } = props;

  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const add = () => {
    dispatch({
      type: 'comment/add',
      payload: {
        commentor: 'linsi',
        commentContent: text,
        createTime: new Date().getTime(),
        pid,
      },
    });

    setText('');
  };

  useImperativeHandle(ref, () => ({
    submit: (type: any, data: any) => {
      add();
    },
  }));

  const onTextChange = (event: SyntheticEvent) => {
    setText((event.target as any).value);
  };
  return (
    <TextArea
      value={text}
      style={{ width: '300px', display: 'block' }}
      onChange={onTextChange}
    />
  );
};

export default forwardRef(TextView);
