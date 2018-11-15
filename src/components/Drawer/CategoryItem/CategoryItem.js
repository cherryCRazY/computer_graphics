import classes from "./CategoryItem.module.css";
import React, { Component } from "react";
import { connect } from "react-redux";

class CategoryItem extends Component {
    render() {
        const { Icon, name, clicked } = this.props;
        const selected = this.props.category === name.toLowerCase();
        const icon = [classes.Icon];
        const categotyItem = [classes.CategoryItem];
        if (selected) {
            icon.push(classes.selected);
            categotyItem.push(classes.categorySelected);
        }
        return (
            <div
                className={categotyItem.join(" ")}
                onClick={() => clicked(name.toLowerCase())}
            >
                <div className={icon.join(" ")}>
                    <Icon size="30" />
                </div>

                <div className={classes.text}>{name}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.context.category
    };
};

export default connect(mapStateToProps)(CategoryItem);
