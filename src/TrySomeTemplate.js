import React from 'react';
import "./App.css";
import Node from "./components/Nodes"
import Connectors from "./components/Connectors"
import Subjects from "./components/Subjects"

// import the DiagramComponent
import { DiagramComponent,
    DataBinding, 
    MindMap, 
    DiagramTools, 
    Inject} from "@syncfusion/ej2-react-diagrams";
import { DataManager } from '@syncfusion/ej2-data';



export default class App extends React.Component {

  render(){
    return <DiagramComponent
      id="diagram" 
      width={'100%'} 
      height={'500px'} 

    //Configures data source
    dataSourceSettings={{
        id: 'Name',
        parentId: 'Category',
        dataManager: new DataManager(Subjects),
        //binds the external data with node
        doBinding: (nodeModel, data, diagram) => {
            nodeModel.annotations = [{
                    /* tslint:disable:no-string-literal */
                    content: data['Name'],
                    margin: {
                        top: 10,
                        left: 10,
                        right: 10,
                        bottom: 0
                    },
                    style: {
                        color: 'black'
                    }
                }];
            /* tslint:disable:no-string-literal */
            nodeModel.style = {
                fill: '#ffeec7',
                strokeColor: '#f5d897',
                strokeWidth: 1
            };
        }
    }} 
    //Configrues HierarchicalTree layout
    layout={{
        type: 'MindMap',
        horizontalSpacing: 15,
        verticalSpacing: 50,
        margin: {
            top: 10,
            left: 10,
            right: 10,
            bottom: 0
        },
    }} 
    //Sets the default values of nodes
    getNodeDefaults={(obj, diagram) => {
        //Initialize shape
        obj.shape = {
            type: 'Basic',
            shape: 'Rectangle'
        };
        obj.style = {
            strokeWidth: 1
        };
        obj.width = 95;
        obj.height = 30;
    }} 
    //Sets the default values of connectors
    getConnectorDefaults={(connector, diagram) => {
        connector.type = 'Orthogonal';
        connector.style.strokeColor = '#4d4d4d';
        connector.targetDecorator.shape = 'None';
    }} 
    //Disables all interactions except zoom/pan
    tool={DiagramTools.ZoomPan} snapSettings={{
        constraints: 0
    }}>
        <Inject services={[DataBinding, MindMap]}/>
    </DiagramComponent>
  }
}