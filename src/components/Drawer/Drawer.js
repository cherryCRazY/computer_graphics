import React, { Component } from "react";
import classes from "./Drawer.module.css";
import { FaHighlighter, FaObjectGroup, FaBezierCurve } from "react-icons/fa";
import CategoryItem from "./CategoryItem/CategoryItem";
import TabContent from "./TabContent/TabContent";

class Drawer extends Component {
    render() {
        return (
            <div className={classes.Drawer}>
                <div className={classes.Menu}>
                    <CategoryItem
                        Icon={FaHighlighter}
                        clicked={this.props.onSetCategory}
                        name="Draw"
                    />
                    <CategoryItem
                        Icon={FaObjectGroup}
                        clicked={this.props.onSetCategory}
                        name="Transform"
                    />
                    <CategoryItem
                        Icon={FaBezierCurve}
                        clicked={this.props.onSetCategory}
                        name="Arhimed"
                    />
                </div>
                <div
                    className={classes.Container}
                    category={this.props.category}
                >
                    <TabContent
                        clicked={this.props.transform}
                        category={this.props.category}
                    />
                </div>
            </div>
        );
    }
}

export default Drawer;
