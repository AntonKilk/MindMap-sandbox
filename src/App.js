import React from 'react';
import "./App.css";
import Nodes from "./components/Nodes"
import Connectors from "./components/Connectors"
import { DiagramComponent, Inject, DataBinding, ComplexHierarchicalTree, ConnectorBridging, DiagramConstraints } from "@syncfusion/ej2-react-diagrams";


// Initializes Diagram
export default class App extends React.Component {

  render(){
    return <DiagramComponent 
        id="diagram" 
        width={'100%'} 
        height={1000} 
        nodes={Nodes} 
        connectors={Connectors}
        backgroundColor='#fefcf1'

        // add assistant? additional fields 

        //Uses layout to auto-arrange nodes on the diagram page
        // layout={{
        //     //Sets layout type
        //     type: 'ComplexHierarchicalTree',
        //     orientation: 'LeftToRight'
        // }}

        //Sets the default properties for nodes and connectors
        getNodeDefaults={(obj) => {
            obj.shape = {
                type: 'Flow',
                shape:'Terminator',
                cornerRadius:'30',
                style: {
                    color: 'white'
                }
            };
            obj.style = {
                fill: '#fcebe6',
                strokeColor: 'none',
                strokeWidth: 2
            };
            //obj.borderColor = 'white';
            //obj.borderWidth = 1;
            //obj.backgroundColor = '#6BA5D7';
            obj.shape.margin = {
                left: 5,
                right: 5,
                top: 5,
                bottom: 5
            };
            return obj;
        }} 
        
        getConnectorDefaults={(connector, diagram) => {
        connector.style = {
            strokeColor: '#6BA5D7',
            strokeWidth: 2
        };
        connector.targetDecorator.style.fill = '#6BA5D7';
        connector.targetDecorator.style.strokeColor = '#6BA5D7';
        connector.type = 'Straight';
        connector.constraints = DiagramConstraints.Default | DiagramConstraints.Bridging;
        return connector;
        }}>
        <Inject services={[ComplexHierarchicalTree, DataBinding, ConnectorBridging]}/>
    </DiagramComponent>
  }
}