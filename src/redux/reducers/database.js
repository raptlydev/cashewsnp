import { SET_DATABASE_DATA } from '../../constants/actionTypes';

const INITIAL_STATE = {
    scaffoldData: [],
    genomicInSilicoData: [],
    transcriptData: [],
    genicInSilicoData: [],
    genicExpData: [],
    genomicExpData: [],
    tabChanged: false,
    tabValue: "1",
    repeatMotif: "",
    repeatSizeLessEqual: "", 
    repeatSizeEqual: "", 
    repeatSizeGreaterEqual: "",
    copyNoLessEqual: "", 
    copyNoEqual: "", 
    copyNoGreaterEqual: "",
    PICLessEqual: "",
    PICEqual: "", 
    PICGreaterEqual: "",
    tempLessEqual: "", 
    tempEqual: "", 
    tempGreaterEqual: "",
    repeatType: "",
    loadingData: false
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_DATABASE_DATA:
      return {
        ...state,
        ...action.content,
      };
    default:
      return state;
  }
};
