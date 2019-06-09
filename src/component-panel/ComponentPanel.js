import React from 'react';
import './ComponentPanel.scss'
import InputComponent from "./components/input-component/InputComponent";


class ComponentPanel extends React.Component {

    render() {
        return (
            <div className="ComponentPanel col-4">
                <div className="components-holder container">
                    <div className="component-container">
                        <InputComponent />
                    </div>
                    <div className="component-container">
                        <InputComponent />
                    </div>
                    <div className="component-container">
                        <InputComponent />
                    </div>
                    <div className="component-container">
                        <InputComponent />
                    </div>
                </div>
            </div>
        )
    }

}

export default ComponentPanel;