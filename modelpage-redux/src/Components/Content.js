import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

// Components
import Image from "./Image";
import LinkList from "./LinkList";
import ModelDetails from "./ModelDetails";
import SelectionPopup from "./SelectionPopup";
import PriceDetails from "./PriceDetails";
import EmiWidget from "./EmiWidget";

// Props data
const listOfLinks = [
  {
    title: "Colors",
    href: "colors",
    imgUrl:
      "https://cdn.zeplin.io/5f489c7913d2623062e791d1/assets/4E6F07CF-813B-4F3C-8798-0283BD8E9B04.svg",
  },
  {
    title: "Images",
    href: "images",
    imgUrl:
      "https://cdn.zeplin.io/5f489c7913d2623062e791d1/assets/E778A3F2-4C9A-44A3-9591-91551C68B3C3.svg",
  },
  {
    title: "Videos",
    href: "videos",
    imgUrl:
      "https://cdn.zeplin.io/5f489c7913d2623062e791d1/assets/83BBF4DC-B856-47FA-B8B1-92AAB991711C.svg",
  },
  {
    title: "360 view",
    href: "view",
    imgUrl:
      "https://cdn.zeplin.io/5f489c7913d2623062e791d1/assets/197D5552-0F5E-4ED5-B14B-DADE28E826EF.svg",
  },
];

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

function changeCityList(cityList) {
  return {
    type: "CHANGE_CITY_LIST",
    data: cityList,
  };
}

function changeVersionList(versionList) {
  return {
    type: "CHANGE_VERSION_LIST",
    data: versionList,
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
    changeCityList: function (cityList) {
      dispatch(changeCityList(cityList));
    },
    changeVersionList: function (versionList) {
      dispatch(changeVersionList(versionList));
    },
  };
}

const Content = (props) => {
  const [data, setData] = useState({});
  const [carName, setCarName] = useState("");
  const [carImage, setCarImage] = useState("");
  const [priceDetails, setPriceDetails] = useState({});
  const [reviewDetails, setReviewDetails] = useState({});
  const [emiDetails, setEmiDetails] = useState({});

  useEffect(() => {
    const apicall = async () => {
      try {
        const response = await axios.get("http://localhost:5000/carmodel");
        console.log(response.data);
        if (response.data) {
          setData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    apicall();
  }, []);

  useEffect(() => {
    if (!(Object.keys(data).length === 0 && data.constructor === Object)) {
      props.changeCityList(data.cityList);
      props.changeVersionList(data.versionList);
      props.changeSelectedCity(data.cityList[0]);
      props.changeSelectedVersion(data.versionList[0]);
      setEmiDetails(data.emiDetail);
      setReviewDetails(data.reviewDetail);
      setPriceDetails(data.priceDetail);
      setCarName(data.name);
      setCarImage(data.imageUrl);
    }
  }, [data]);

  return (
    <React.Fragment>
      <Image url={carImage} alt={"Car"} height={202} width={340} />
      <LinkList listOfLinks={listOfLinks} />
      <ModelDetails name={carName} reviewDetails={reviewDetails} />
      <SelectionPopup type={"Version"} />
      <SelectionPopup type={"City"} />

      <PriceDetails details={priceDetails} />
      <EmiWidget details={emiDetails} />
    </React.Fragment>
  );
};

export default connect(null, mapDispatchToProps)(Content);
