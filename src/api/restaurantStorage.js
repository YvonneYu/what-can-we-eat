/**
 * Get and Save restaurant list using localstorage
 */

// 模擬 call api
const TIMEOUT = 1000;
const STORE_ID = 'restaurants_list';

export default {
  geRestList: new Promise(function(resolve) {
      setTimeout(() => {
        let list = localStorage.getItem(STORE_ID);
        resolve(list && JSON.parse(list));
      }, TIMEOUT);
    }),
  saveRestList: (value, callback= () => {}) => {
    localStorage.setItem(STORE_ID, JSON.stringify(value));
    callback();
  }
}