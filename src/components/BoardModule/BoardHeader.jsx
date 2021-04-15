import React, { useState } from "react";
import AddCardPopup from "./BoardPopup/AddCardPopup";
import AddIcon from "@material-ui/icons/Add";
import "../../styles/Main.css";
import { Animated } from "react-animated-css";

function BoardHeader({ canBeAdded, boardName, boardId, type, colorBg }) {
  const [isShow, setIsShow] = useState(null);

  const setPopupValue = () => {
    setIsShow(null);
  };

  const showPopup = () => {
    setIsShow(true);
  };

  const style_circle = {
    background: colorBg,
  };

  return (
    <div className="boardheader">
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="boardheader__body"></div>
      </Animated>
      <div className="boardheader__body">
        <div className="titlebody">
          <div className="circle-icon">
            <div className="circle" style={style_circle}></div>
          </div>
          <p>{boardName}</p>
        </div>
        <div className="add-icon">
          {canBeAdded && <AddIcon onClick={showPopup} />}
        </div>
      </div>
      {isShow && (
        <AddCardPopup
          setPopupValue={setPopupValue}
          boardId={boardId}
          type={type}
        />
      )}
    </div>
  );
}

export default BoardHeader;
