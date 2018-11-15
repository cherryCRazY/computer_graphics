import React from "react";
import classes from "./Menu.module.css";

const Menu = props => (
    <div className={classes.Menu}>
        <button onClick={props.clicked} className={classes.Button}>
            Меню
        </button>
    </div>
);

export default Menu;
