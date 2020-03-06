import React from 'react';
import "./App.css";
import Node from "./components/Nodes"
import Connectors from "./components/Connectors"
// import the DiagramComponent
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";


export default class App extends React.Component {

  render(){
    return <DiagramComponent
      id="diagram" 
      width={'100%'} 
      height={'600px'} 
      // Add node
      nodes={Node}
      // Add connectors
      connectors={Connectors} 
    />
  }
}

