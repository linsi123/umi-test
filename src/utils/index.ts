function getCommentList(data) {
  data.forEach(function(item) {
    delete item.child;
  });

  var map: any = {};
  data.forEach(function(item) {
    map[item.id] = item;
  });
  let val: any = [];
  data.forEach(function(item) {
    // 以当前遍历项，的pid,去map对象中找到索引的id
    var parent = map[item.pid];
    // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
    if (parent) {
      (parent.child || (parent.child = [])).push(item);
    } else {
      //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
      val.push(item);
    }
  });
  return val;
}

const utils = {
  getCommentList,
};

export default utils;
