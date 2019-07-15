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
    return {
      label: RestChoices.types.label,
      data: getCheckedList(RestChoices.types.data)
    };
  },
  getPrices: () => {
    return {
      label: RestChoices.prices.label,
      data: getCheckedList(RestChoices.prices.data)
    };
  },
  getTimeList: () => {
    return {
      label: RestChoices.time.label,
      data: getCheckedList(RestChoices.time.data)
    };
  },
  getModes: () => {
    return {
      label: RestChoices.modes.label,
      data: getCheckedList(RestChoices.modes.data)
    };
  }
};

export default restChoicesData;