import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Input, Select, Button, Modal } from 'antd';
import { useVisible } from '../hooks/useVisible';
import TextView from './TextView';

const CommentModal = (props, ref) => {
  const { item } = props;
  const [modalVisible, toggleModal] = useVisible(false);

  const ok = () => {
    textViewRef.current.submit();
    toggleModal();
  };
  const cancel = () => {
    toggleModal();
  };

  useImperativeHandle(ref, () => ({
    show: (type: any, data: any) => {
      toggleModal();
    },
  }));

  const textViewRef = useRef();
  return (
    <Modal
      title="回复评论"
      visible={modalVisible}
      onOk={ok}
      onCancel={cancel}
      okText="确认"
      cancelText="取消"
    >
      <TextView ref={textViewRef} pid={item.id} />
    </Modal>
  );
};

export default forwardRef(CommentModal);
