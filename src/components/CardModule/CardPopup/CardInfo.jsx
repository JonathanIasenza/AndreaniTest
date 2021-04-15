import React from "react";
import "../../../styles/Popup.css";
import "../../../styles/Main.css";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function CardInfo(props) {
  const closePopupNoPropagation = (e) => {
    e.stopPropagation();
  };

  const closePopup = () => {
    props.closeCardInfoHandler();
  };

  return (
    <div className="popup-container" onClick={closePopup}>
      <div className="popup-content" onClick={closePopupNoPropagation}>
        <div className="header">
          <form>
            <main>
              <h2>Tarea:</h2>
              <div className="text-wrapper">
                <p>Nombre de la tarea: {props.card_title}</p>
                <p>Descripción de la tarea: {props.card_description}</p>
                <p>La tarea está en: {props.board_name}</p>
              </div>
              <div className="close-wrapper">
                <Button className="btn btn-dark" onClick={closePopup}>Cerrar</Button>
              </div>
            </main>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
