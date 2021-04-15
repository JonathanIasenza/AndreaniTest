import React, { useState, useContext } from "react";
import { Context } from "../../../context";
import * as uuid from "uuid";
import "../../../styles/Popup.css";
import "../../../styles/Main.css";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddCardPopup(props) {
  const { dispatch } = useContext(Context);
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  const createCard = (e) => {

    if (cardTitle.length && cardDescription.length) {
      dispatch({
        type: "ADD_CARD",
        payload: {
          board_id: props.boardId,
          card: {
            title: cardTitle,
            description: cardDescription,
            id: uuid.v4(),
            type: props.type,
            draggable: "true",
            className: "card",
          },
        },
      });

      setCardTitle("");
      props.setPopupValue();

      setCardDescription("");
      props.setPopupValue();
    }
  };

  const createCardByEnter = (e) => {
    if (e.key === "Enter" && cardTitle.length && cardDescription.length) {
      dispatch({
        type: "ADD_CARD",
        payload: {
          board_id: props.boardId,
          card: {
            title: cardTitle,
            description: cardDescription,
            id: uuid.v4(),
            type: props.type,
            draggable: "true",
            className: "card",
          },
        },
      });

      setCardTitle("");
      props.setPopupValue();

      setCardDescription("");
      props.setPopupValue();
    }
  };

  const closePopupNoPropagation = (e) => {
    e.stopPropagation();
  };

  const closePopup = () => {
    props.setPopupValue();
  };


  return (
    
    <div className="popup-container" onClick={closePopup}>
      <div className="popup-content" onClick={closePopupNoPropagation}>
        <div className="create-wrapper">
          <h2>Agregar tarea:</h2>
          <input
            type="text"
            placeholder="Nombre de la tarea"
            value={cardTitle}
            maxLength="10"
            onKeyPress={createCardByEnter}
            onChange={(event) => setCardTitle(event.target.value)}
          />
          <br/>
          <input
            type="text"
            placeholder="Descripción de la tarea"
            value={cardDescription}
            maxLength="20"
            onKeyPress={createCardByEnter}
            onChange={(event) => setCardDescription(event.target.value)}
          />
          <br/>
          <br/>
          <div className="close-wrapper">
            <Button className="btn btn-danger" onClick={closePopup}>Cerrar</Button>
            <Button className="btn btn-info" onClick={createCard}>Aceptar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCardPopup;
