import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Canvas from "../../components/Canvas/Canvas";
import Menu from "../../components/Menu/Menu";
import Drawer from "../../components/Drawer/Drawer";

class ControlPanel extends Component {
    state = {
        drawer: false
    };
    c;

    toggleDrawerHandler = () => {
        this.setState({ drawer: !this.state.drawer });
    };

    render() {
        const drawDrawer = this.state.drawer ? (
            <Drawer toggle={this.toggleDrawerHandler} />
        ) : null;
        return (
            <Aux>
                <Menu clicked={this.toggleDrawerHandler} />
                {drawDrawer}
                <Canvas />
            </Aux>
        );
    }
}

export default ControlPanel;
