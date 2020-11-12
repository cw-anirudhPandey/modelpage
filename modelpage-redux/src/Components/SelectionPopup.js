import React, { useState } from "react";
import { connect } from "react-redux";
import Popup from "./Popup";

function changeSelectedCity(selectedText) {
  return {
    type: "CHANGE_SELECTED_CITY",
    data: selectedText,
  };
}

function changeSelectedVersion(selectedText) {
  return {
    type: "CHANGE_SELECTED_VERSION",
    data: selectedText,
  };
}

function changeShowToolTip(showToolTip) {
  return {
    type: "CHANGE_SHOW_TOOLTIP",
    data: showToolTip,
  };
}

function mapStateToProps(store) {
  return {
    city: store.selected.city,
    version: store.selected.version,
    cityList: store.list.city,
    versionList: store.list.version,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeSelectedCity: function (selectedText) {
      dispatch(changeSelectedCity(selectedText));
    },
    changeSelectedVersion: function (selectedText) {
      dispatch(changeSelectedVersion(selectedText));
    },
    changeShowToolTip: function (showToolTip) {
      dispatch(changeShowToolTip(showToolTip));
    },
  };
}

const SelectionPopup = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const list = props.type === "City" ? props.cityList : props.versionList;
  const title = `Select ${props.type ? props.type : "City"}`;
  
  const changeToolTipStatus = () => {
    props.changeShowToolTip(true);
    setTimeout(() => {
      props.changeShowToolTip(false);
    }, 5000);
  };

  const handleChange = (selectedText) => {
    if (props.type === "City") {
      props.changeSelectedCity(selectedText);
      changeToolTipStatus();
    } else if (props.type === "Version") {
      props.changeSelectedVersion(selectedText);
    }
    setIsOpen(false);
  };

  const renderList = list.map((element, index) => {
    return (
      <li
        style={{ cursor: "pointer" }}
        key={index}
        value={element}
        onClick={() => handleChange(element)}
      >
        {element}
      </li>
    );
  });

  return (
    <div style={{ display: "inline-block", margin: "0 15px", padding: "0 5px", maxWidth: "50%" }}>
      <h4>
        {props.type}: <span style={{fontFamily: "sans-serif"}}>{props.type === "City" ? props.city : props.version}</span>
      </h4>
      <button onClick={() => setIsOpen(true)}>Select {props.type}</button>
      {isOpen ? (
        <Popup
          status={isOpen}
          changeIsOpen={setIsOpen}
          title={title}
        >
          <ul>{renderList}</ul> 
        </Popup>
      ) : null}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPopup);
