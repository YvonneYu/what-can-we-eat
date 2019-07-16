import { GET_DEFAULT_CHOICES, RESET_CHOICES } from '../constants/ActionTypes';
import RestChoiceData from "../utils/RestChoicesData";

const initialState = {
  choices: RestChoiceData.getChoiceData(),
  resInfo: {
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
    case GET_DEFAULT_CHOICES:
      return {...initialState};
    case RESET_CHOICES:
      state = {...initialState};
      return state;
    default:
      return state;
  }

};

export default choicesPanel;