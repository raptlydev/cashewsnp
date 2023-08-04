import { SET_DATABASE_DATA } from '../../constants/actionTypes';

const INITIAL_STATE = {
    positionData: [],
    cashewSnpData: [],
    totalRecords: 0,
    genotypeName: "",
    scaffoldNo: "",
    positionIds: "", 
    snpTypes: "", 
    mutationType: "",
    zygosity: "", 
    locationGene: "",
    searchName: "",
    searchInstituteName: "",
    searchEmail: "",
    loadingData: false,
    pageNo: 1,
    tableDataLoading: false
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
