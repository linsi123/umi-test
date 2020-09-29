import React, { useRef } from 'react';
import { DownSquareOutlined, UpSquareOutlined } from '@ant-design/icons';
import { useVisible } from '../hooks/useVisible';
import CommentModal from './CommentModal';
import styles from '../pages/index.less';
import { isToday, format } from 'date-fns';

interface ItemStruct {
  commentor: string;
  commentContent: string;
  createTime: number;
  pid: number;
  child?: ItemStruct[];
}

interface ItemProps {
  item: ItemStruct;
}

const Title = ({ commentor, createTime }: any) => {
  const now = new Date().getTime();

  return (
    <p>
      <span>{commentor}</span>
      {now - createTime <= 1000 ? (
        <span>{Math.ceil((now - createTime) / 1000)} 秒前</span>
      ) : (
        <span>{format(createTime, 'yyyy-MM-dd hh:mm:ss')}</span>
      )}
    </p>
  );
};

function loop(item: any) {
  if (item.child) {
    return item.child.map((itemChild: ItemStruct) => {
      if (itemChild.child) {
        loop(itemChild.child);
      }
      return <Item item={itemChild} />;
    });
  }
}

const Item = ({ item }: ItemProps) => {
  const [visible, toggle] = useVisible(true);

  const [modalVisible, toggleModal] = useVisible(false);

  const MemoTitle: any = React.memo(Title);

  const reply = (pid: number) => {
    modalRef.current.show();
  };

  const modalRef = useRef();

  return (
    <div className={styles.item}>
      <div style={{ display: 'flex' }}>
        <MemoTitle commentor={item.commentor} createTime={item.createTime} />
        <div onClick={toggle} className={styles.icon}>
          {visible ? <DownSquareOutlined /> : <UpSquareOutlined />}
        </div>
      </div>
      {visible ? (
        <div className="comment-detail">
          <div className="comment-detail-main">
            <p>{item.commentContent}</p>
            <a href="javascript:void(0)" onClick={() => reply(item.id)}>
              回复
            </a>
          </div>
          <div className="comment-detail-aside">{loop(item)}</div>
        </div>
      ) : null}
      <CommentModal ref={modalRef} item={item} />
    </div>
  );
};

export default Item;
