import { SET_CHOICES, RESET_ALL_CHOICES, SET_REST_INPUT_VALUES } from '../constants/ActionTypes';
import RestChoiceData from "../utils/RestChoicesData";

const initialState = {
  choices: RestChoiceData.getChoiceData(),
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
  }
};

let choicesPanel = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHOICES:
      return { ...state, choices: action.choices };
    case SET_REST_INPUT_VALUES:
      return {...state, restInfo: action.restInfo };
    case RESET_ALL_CHOICES:
      state = {...initialState};
      return state;
    default:
      return state;
  }
};

export default choicesPanel;