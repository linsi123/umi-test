import { Reducer } from 'redux';
import utils from '../utils';

const CommentModel: any = {
  namespace: 'comment',
  state: {
    list: [],
    commentList: [],
  },
  effects: {
    *add({ payload, seqId, resourceType }: any, { call, put, error }: any) {
      console.log(payload);
      yield put({
        type: 'save',
        payload: {
          ...payload,
        },
      });
    },
  },
  reducers: {
    save(state: any, { payload }: any) {
      let nextList = [...state.list];
      nextList.push({
        id: state.list.length + 1,
        ...payload,
      });

      return {
        ...state,
        list: nextList.sort((a, b) => b.createTime - a.createTime),
        commentList: utils.getCommentList(nextList),
      };
    },
  },
};

export default CommentModel;
