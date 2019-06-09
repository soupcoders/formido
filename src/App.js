import React from 'react';
import ComponentPanel from './component-panel/ComponentPanel';
import FormPreview from './form-preview/FormPreview';
import NavBar from './navbar/NavBar'
import './App.scss'

function App() {
    return (
        <div>
            <NavBar/>
            <div className="container ">
                <div className="row App-content">
                    <ComponentPanel/>
                    <FormPreview/>
                </div>
            </div>
        </div>
    );
}

export default App;
