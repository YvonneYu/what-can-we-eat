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
  getTypes: RestChoices.types,
  getChoiceData: () => {
    let list = [];
    for (let [, value] of Object.entries(RestChoices.list)) {
      list.push({...value, data: getCheckedList(value.data)});
    }
    return list;
  }
};

export default restChoicesData;