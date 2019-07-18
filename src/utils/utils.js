/**
 * 放置一些共用的 help function
 *
 * */


export const deepCloneObj = (obj) => JSON.parse(JSON.stringify(obj));


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