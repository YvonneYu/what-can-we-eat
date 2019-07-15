import RestChoices from './restChoicesData.json';

const getCheckedList = (list) => {
  return list.map((item) => {
    return {
      label: item,
      checked: false
    }
  })
};

const restChoicesData = {
  getTypes: () => {
    return getCheckedList(RestChoices.types);
  },
  getPrices: () => {
    return getCheckedList(RestChoices.prices);
  },
  getTimeList: () => {
    return getCheckedList(RestChoices.time);
  },
  getModes: () => {
    return getCheckedList(RestChoices.modes);
  }
};

export default restChoicesData;