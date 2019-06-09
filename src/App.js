import React from 'react';
import './App.scss';
import ComponentPanel from './component-panel/ComponentPanel';
import FormPreview from './form-preview/FormPreview';

function App() {
  return (
    <div className="App">
      <ComponentPanel />
      <FormPreview />
    </div>
  );
}

export default App;
