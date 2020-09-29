import React from 'react';
import styles from './index.less';
import { useDispatch, useSelector } from 'dva';
import Comment from '../components/Comment';
import List from '../components/List';

export default () => {
  const commentList = useSelector((state: any) => state.comment.commentList);
  return (
    <div className={styles.index}>
      <h1 className={styles.title}>回复中心</h1>
      <div>
        <Comment />
        <List list={commentList} />
      </div>
    </div>
  );
};
