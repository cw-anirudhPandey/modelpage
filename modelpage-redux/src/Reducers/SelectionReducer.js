const applicationData = {
  selected: {
    city: "",
    version: ""
  },
  list: {
    city: [],
    version: []
  },
  showToolTip: false
};

function SelectionReducer(state = applicationData, action) {
  if(action.type === "CHANGE_SELECTED_CITY") {
    const newState = {
      ...state
    };
    newState.selected.city = action.data;
    return newState;
  } else if(action.type === "CHANGE_SELECTED_VERSION") {
    const newState = {
      ...state
    };
    newState.selected.version = action.data;
    return newState;
  }  else if(action.type === "CHANGE_SHOW_TOOLTIP") {
    const newState = {
      ...state
    };
    newState.showToolTip = action.data;
    return newState;
  }  else if(action.type === "CHANGE_CITY_LIST") {
    const newState = {
      ...state
    };
    newState.list.city = action.data;
    return newState;
  }  else if(action.type === "CHANGE_VERSION_LIST") {
    const newState = {
      ...state
    };
    newState.list.version = action.data;
    return newState;
  }

  return state;
}

export default SelectionReducer;
