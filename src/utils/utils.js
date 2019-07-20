/**
 * 放置一些共用的 help function
 *
 * */


export const deepCloneObj = (obj) => JSON.parse(JSON.stringify(obj));

export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const getRandomIntList = (len = 3, maxNum) => {
  let list = [];
  for (let i = 0; i < len;) {
    let temp = getRandomInt(maxNum);
    // 避免遇到重複的 randomInt
    if (!list.includes(temp)) {
      list.push(temp);
      i++
    }
  }
  return list;
};

export const choicesHelper = {
  // get service like object for choices
  getCheckedChoices: (choices) => {
    // get data structure like ['心情', '天氣熱']
    return choices.reduce( (checkedList, choices) => {
      let result = choices.data.filter((choice) => {
        // find checked object
        return choice.checked;
      }).reduce((accList, obj) => {
        // reduce to one single label
        return [...accList, obj.label];
      },[]);
      // concat all for choices type
      return [...checkedList, ...result];
    }, []);
  }
};