import { SET_CHOICES,
         RESET_ALL_CHOICES,
         SET_REST_INPUT_VALUES,
         MAP_CHOICES_INPUTS,
} from '../constants/ActionTypes';
import { deepCloneObj } from '../utils/utils';

// return choices mapping for UI { label, checked }
const getCheckedList = (list) => {
  return list.map((item) => {
    return {
      label: item,
      checked: false
    }
  })
};

const initialState = {
  choices: [{
      type: 'RES_PRICE',
      label: '價格',
      data: getCheckedList(['便宜', '還可以', '貴'])
    },
    {
      type: 'RES_STYLE',
      label: '風格',
      data: getCheckedList(['中式', '火鍋', '西式', '日式', '異國料理', '便當', '麵店', '速食', '素食', '小吃', '早餐店', '垃圾食物'])
    },
    {
      type: 'RES_TIME',
      label: '時間',
      data: getCheckedList(['全天', '早餐', '中餐', '晚餐', '宵夜'])
    },
    {
      type: 'RES_MODE',
      label: '心情',
      data: getCheckedList(['有湯', '無湯', '天氣熱想吃', '天氣冷想吃', '有服務費', '無服務費', '聚餐', '有酒', '有外帶'])
    }
  ],
  restInfo: {
    name: {
      value: '',
        label: '*名稱',
        inputProps: {
          type: 'text',
          placeholder: '請輸入餐廳名稱...',
          errorMessage: '此欄位為必填'
      },
      isValid: false,
        isRequired: true,
        showInCreationMode: true
    },
    tel: {
      value: '',
        label: '電話',
        inputProps: {
          type: 'tel',
          placeholder: '請輸入餐廳電話...',
          errorMessage: '此欄位必須為數字'
      },
      isValid: true,
        isRequired: false,
        showInCreationMode: false
    },
    address: {
      value: '',
        label: '地址',
        inputProps: {
          type: 'text',
          placeholder: '請輸入餐廳地址...'
      },
      isValid: true,
        isRequired: false,
        showInCreationMode: false
    }
  },
  id: '',
  isEditMode: false
};

/***
 * 回傳 UI choices list initialState form service choices data
 *
 * ['天氣熱', '西式'] -> [{choices: type, label, choices}]
 *
 */
const getMappingChoices = (targetChoices = []) => {
  let newChoices = [...deepCloneObj(initialState.choices)];
  // 回傳 UI choices list initialState form service choices data
  return newChoices.map( (choice) => {
    let checkedChoices = choice.data.map((currentData) => {
      currentData.checked = targetChoices.includes(currentData.label);
      return {...currentData};
    });
    return {...choice, data: checkedChoices }
  })
};

const getMappingRestInfo = (rest) => {
  let newRestInfo = {...deepCloneObj(initialState.restInfo)};
  newRestInfo.name.value = rest.name || '';
  newRestInfo.name.isValid = true;
  newRestInfo.tel.value = rest.tel || '';
  newRestInfo.address.value = rest.address || '';
  return newRestInfo;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHOICES:
      return { ...state, choices: action.choices };
    case SET_REST_INPUT_VALUES:
      return {...state, restInfo: action.restInfo };
    case RESET_ALL_CHOICES:
      return {...deepCloneObj(initialState)};
    // return a mapping state of edit rest obj
    case MAP_CHOICES_INPUTS:
      return {
        id: action.rest.id,
        restInfo: getMappingRestInfo(action.rest),
        choices: getMappingChoices(action.rest.choices),
        isEditMode: true
      };
    default:
      return state;
  }
};