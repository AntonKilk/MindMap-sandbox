import { render } from 'react-dom';
import './index.css';
import * as React from "react";
import { StackPanel, ComplexHierarchicalTree, randomId, TextElement, HierarchicalTree, DataBinding, DiagramComponent, SnapConstraints, Inject, DiagramTools } from "@syncfusion/ej2-react-diagrams";
import { SampleBase } from './sample-base';
import { DataManager } from "@syncfusion/ej2-data";
import { pertChartData } from './diagram-data';
function getTextElement(text, alignment, width, valignment) {
    let textElement = new TextElement();
    textElement.content = text;
    textElement.id = randomId();
    textElement.width = width;
    textElement.height = 25;
    textElement.horizontalAlignment = alignment;
    textElement.verticalAlignment = valignment;
    textElement.style.strokeWidth = 1;
    textElement.style.strokeColor = "#b5b5b5";
    textElement.style.fill = "transparent";
    textElement.style.color = "#3c3c3c";
    textElement.relativeMode = "Object";
    return textElement;
}
let sDate = "startDate";
let eDate = "endDate";
let duration = "duration";
let addRows = (column, node) => {
    column.children.push(getTextElement(node.data[sDate], "Left", 70));
    column.children.push(getTextElement(node.data[duration], "Center", 30));
    column.children.push(getTextElement(node.data[eDate], "Right", 70));
};
let diagramInstance;
export class PertChart extends SampleBase {
    rendereComplete() {
        diagramInstance.fitToPage();
    }
    render() {
        return (<div className="control-pane">
        <div className="control-section">
          <div style={{ width: "100%" }}>
            <DiagramComponent id="diagram" ref={diagram => (diagramInstance = diagram)} width={"100%"} height={"499px"} snapSettings={{ constraints: SnapConstraints.None }} dataSourceSettings={{
            id: "id",
            parentId: "Category",
            dataSource: new DataManager(pertChartData),
            doBinding: (nodeModel, data, diagram) => {
                let shape = "shape";
                let name = "id";
                /* tslint:disable:no-string-literal */
                nodeModel["shape"] = { type: "Text" };
            }
        }} layout={{
            type: "ComplexHierarchicalTree",
            orientation: "LeftToRight",
            verticalSpacing: 100,
            horizontalSpacing: 70
        }} //Sets the default values of connector
         getConnectorDefaults={(connector, diagram) => {
            connector.type = "Straight";
            connector.style.strokeColor = "#979797";
            connector.targetDecorator.width = 10;
            connector.targetDecorator.height = 10;
            connector.targetDecorator.style = {
                fill: "#979797",
                strokeColor: "#979797"
            };
            return connector;
        }} 
        //used to customize template of the node.
        setNodeTemplate={(node) => {
            return getNodeTemplate(node);
        }} tool={DiagramTools.ZoomPan}>
              <Inject services={[
            DataBinding,
            HierarchicalTree,
            ComplexHierarchicalTree
        ]}/>
            </DiagramComponent>
          </div>
        </div>
      </div>);
    }
}
//customization of the node template.
function getNodeTemplate(node) {
    let table = new StackPanel();
    table.style.fill = "#0069d9";
    table.id = randomId();
    table.orientation = "Vertical";
    let nameKey = "id";
    let stack = new StackPanel();
    stack.children = [];
    stack.id = randomId();
    stack.height = 25;
    stack.orientation = "Horizontal";
    stack.style.fill = "white";
    stack.horizontalAlignment = "Stretch";
    addRows(stack, node);
    table.children = [
        getTextElement(node.data[nameKey], "Stretch", 170, "Stretch"),
        stack
    ];
    table.children[0].style.color = "white";
    table.children[0].style.fontSize = 14;
    return table;
}

render(<PertChart />, document.getElementById('sample'));