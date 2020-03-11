import React from 'react';
import "./App.css";
import Nodes from "./components/Nodes"
import Connectors from "./components/Connectors"
import { DiagramComponent, Inject, DataBinding, HierarchicalTree} from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from '@syncfusion/ej2-data';
//Initializes data source
let data = [{
    id: 1,
    Label: 'StackPanel'
},
{
    id: 2,
    Label: 'Label',
    parentId: 1
},
{
    id: 3,
    Label: 'ListBox',
    parentId: 1
},
{
    id: 4,
    Label: 'StackPanel',
    parentId: 2
},
{
    id: 5,
    Label: 'Border',
    parentId: 2
},
{
    id: 6,
    Label: 'Border',
    parentId: 4
},
{
    id: 7,
    Label: 'Button',
    parentId: 4
},
{
    id: 8,
    Label: 'ContentPresenter',
    parentId: 5
},
{
    id: 9,
    Label: 'Text Block',
    parentId: 5
},
];
let items = new DataManager(data, new Query().take(7));
// console.log(data[1].id)
// let connectors = [{
//     id: "connector1",
//     sourceID: data[5].id,
//     targetID: data[1].id
// }];
// Include Automatic line routing to avoid connectors crosisng nodes
// Include Bridging if needed

// Initializes Diagram
export default class App extends React.Component {

  render(){

    return <DiagramComponent 
        id="diagram" 
        width={'100%'} 
        height={1000} 
        nodes={Nodes} 
        connectors={Connectors} //change back to Connectors
        backgroundColor='#fefcf1'

        // add assistant? additional fields 

        //Uses layout to auto-arrange nodes on the diagram page
        layout={{
            //Sets layout type
            type: 'HierarchicalTree',
            orientation: 'LeftToRight',
            root: 'parent'
        }}
        
        //Configures data source for diagram
        dataSourceSettings={{
            id: 'id',
            parentId: 'parentId',
            dataManager: items,
            root: String(1)
        }} 

        //Sets the default properties for nodes and connectors
        getNodeDefaults={(obj) => {
            obj.shape = {
                //delete later. Type change to 'Flow'
                type: 'Flow',
                //content: obj.data.Label,
                //
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
        connector.type = 'Orthogonal';
        //diagram.constraints = DiagramConstraints.Default | DiagramConstraints.LineRouting 
        return connector;
        }}>
        <Inject services={[HierarchicalTree, DataBinding]}/>
    </DiagramComponent>
  }
}
