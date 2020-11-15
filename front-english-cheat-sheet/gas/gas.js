const fs = require('fs');

// .filter(function(row){
//   const cont = [];
//   row.forEach(function(item) {
//     if(item) cont.push(item);
//   });
//   return cont.length > 0;
// })

// getData
function getData(id, sheetName) {
  const rows = [
    {
      pageTitle: 'ページタイトル1',
      sectionTitle: 'セクションタイトル1',
      ja: 'ハロー1',
      en: 'hello1',
    },
    {
      pageTitle: '',
      sectionTitle: '',
      ja: 'ハロー2',
      en: 'hello2',
    },
    {
      pageTitle: '',
      sectionTitle: '',
      ja: 'ブロック1',
      en: 'block1',
    },
    // {
    //   pageTitle: 'ページタイトル2',
    //   sectionTitle: 'セクションタイトル2',
    //   ja: 'わんこ1',
    //   en: 'wanko1',
    // },
    // {
    //   pageTitle: '',
    //   sectionTitle: '',
    //   ja: 'わんこ2',
    //   en: 'wanko2',
    // },
  ];
  return rows;
}

const v = getDataView(null, null);
fs.writeFileSync('try.json', JSON.stringify(v));

// getDataView
function getDataView(id, sheetName) {
  const rows = getData(id, sheetName);
  // const keys = rows.splice(0, 1)[0];
  const keys = ['pageTitle', 'sectionTitle', 'ja', 'en'];

  const ori = splitPageData(rows, keys);
  const d = ori.map((ary) => mergeChildren(ary));
  return d;
}

// タイトルブロックを区別する
// タイトルが存在する場合配列を別にする
function splitPageData(rows, keys) {
  const ori = [];
  let tmp = [];
  rows.forEach(function (row) {
    const obj = makeDirObj(row, keys);
    if (obj.title) {
      if (tmp.length > 0) ori.push(tmp);
      tmp = [];
    }
    tmp.push(obj);
  });
  if (tmp.length > 0) ori.push(tmp);
  return ori;
}

// childrenをマージする
function mergeChildren(items) {
  const ret = {
    children: [],
  };
  items.forEach(function (item) {
    Object.keys(item).forEach((key) => {
      if (key === 'children') {
        ret.children = ret.children.concat(item.children);
      } else {
        ret[key] = item[key];
      }
    });
  });

  if (ret.children[0] && ret.children[0].children) {
    ret.children = [mergeChildren(ret.children)];
  }

  return ret;
}

// ディレクトリにchildrenとtitleを配置したオブジェクトを生成
function makeDirObj(data, keys) {
  let ret = null;
  let tmp = null;
  let jaen = {};
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const str = data[key];
    if (key === 'ja' || key === 'en') {
      jaen[key] = str;
      if (jaen.ja && jaen.en) {
        tmp.children.push(jaen);
        jaen = {};
      }
      continue;
    }
    const item = {
      children: [],
    };
    if (str) {
      item.title = str;
    }
    if (!ret) {
      ret = item;
    }
    if (tmp) {
      tmp.children.push(item);
    }
    tmp = item;
  }
  console.log('makeDirObj', data);
  return ret;
}
