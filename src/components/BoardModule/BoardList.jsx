import React from 'react';
import Board from './Board';
import '../../styles/Main.css';
import { Animated } from "react-animated-css";

function BoardList({ boards }) {

    return (
        <Animated animationIn="fadeIn" 
        animationInDuration={1800}
        animationOut="fadeOut" 
        isVisible={true}>
        <main className="flexbox">
            {boards && boards.map(item => <Board key={item.id } {...item}/>)}
        </main></Animated>
    );
}

export default BoardList;