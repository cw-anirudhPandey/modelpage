import React, { useState } from "react";
import Image from "./Image";
import Popup from "./Popup";
import { connect } from "react-redux";

function mapStateToProps(store) {
  return {
    city: store.selected.city,
    cityList: store.list.city,
    showToolTip: store.showToolTip,
  };
}

function changeSelectedCity(selectedText) {
  return {
    type: "CHANGE_SELECTED_CITY",
    data: selectedText,
  };
}

function changeShowToolTip(showToolTip) {
  return {
    type: "CHANGE_SHOW_TOOLTIP",
    data: showToolTip,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeSelectedCity: function (selectedText) {
      dispatch(changeSelectedCity(selectedText));
    },
    changeShowToolTip: function (showToolTip) {
      dispatch(changeShowToolTip(showToolTip));
    },
  };
}

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
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
    }
    setIsOpen(false);
  };

  const renderList = props.cityList.map((element, index) => {
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
    <React.Fragment>
      <span
        style={{ cursor: "pointer", marginLeft: "120px" }}
        onClick={() => setIsOpen(true)}
        className="tooltip"
      >
        <Image
          width={"20"}
          height={"20"}
          url={"https://www.flaticon.com/svg/static/icons/svg/67/67347.svg"}
        />
        {props.showToolTip ? (
          <span className="tooltiptext">{props.city}</span>
        ) : null}
      </span>

      {isOpen ? (
        <Popup
        status={isOpen}
        changeIsOpen={setIsOpen}
        title={title}
      >
        <ul>{renderList}</ul> 
      </Popup>
      ) : null}
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
