import uuid from "uuid/v4";

/**
 * Get and Save restaurant list using localstorage
 *
 * isInitialized: boolean
 * restInfo: array
 *
 */

// 模擬 call api
const TIMEOUT = 1000;
const REST_STORE_ID = 'MY-REST-LIST';
const INIT_STORE_ID = 'INIT_STORE_ID';
// 先暫存在此 file 裡面避免一直呼叫
let isSiteInitialized = false;

const defaultRestInfo  = [
  {
    id: uuid(),
    name: '麥當勞',
    tel: '',
    choices: ['便宜', '速食', '垃圾食物', '全天', '有外帶']
  },
  {
    id: uuid(),
    name: '便利商店',
    address: '',
    choices: ['便宜', '全天', '方便']
  },
  {
    id: uuid(),
    name: 'Default 餐廳',
    tel: '021234567',
    address:'Default 地址',
    choices: ['異國料理']
  }
];

const getDataFromLocalStorage = (key) => {
  try {
    let json = localStorage.getItem(key);
    return json && JSON.parse(json);
  } catch (err) {
    console.error(err);
    alert('發生錯誤了！please reload the page!');
    setDataToLocalStorage(REST_STORE_ID, defaultRestInfo);
  }
  return '';
};

const setDataToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const isInitializedChecked = () => {
  if (!isSiteInitialized) {
      let isInitialized = getDataFromLocalStorage(INIT_STORE_ID);
      if (!isInitialized) {
        // set localstorage
        setDataToLocalStorage(INIT_STORE_ID, true);
        setDataToLocalStorage(REST_STORE_ID, defaultRestInfo);
      }
      isSiteInitialized = true;
  }
  return isSiteInitialized;
};

export const fetchRestListFromApi = (callback) => {
  isInitializedChecked();
  setTimeout(() => {
    let data = getDataFromLocalStorage(REST_STORE_ID);
    callback( Array.isArray(data) ? data : [] );
  }, TIMEOUT)
};

export const saveRestListToApi = (list, callback) => {
  setTimeout(() => {
    setDataToLocalStorage(REST_STORE_ID, list);
    callback();
  }, TIMEOUT)
};
