
// A node is created and stored in nodes array.
let nodeData = [{
    annotations: [{
        content: 'JavaScript Fundamentals'
    }],
    offsetX: 80,
    offsetY: 0,
}, {
    annotations: [{
        content: 'Intermediate JavaScript'
    }],
    offsetX: 415,
    offsetY: 0,
}, {
    annotations: [{
        content: 'Functional JavaScript'
    }],
    offsetX: 570,
    offsetY: 60,
}, {
    annotations: [{
        content: 'React Fundamentals'
    }],
    offsetX: 80,
    offsetY: 400,
}, {
    annotations: [{
        content: 'Intermediate React'
    }],
    offsetX: 415,
    offsetY: 400,
}, {
    annotations: [{
        content: 'HTML & CSS Fundamentals'
    }],
    offsetX: 170,
    offsetY: 150,
}, {
    annotations: [{
            content: 'Intermediate CSS'
        }],
        offsetX: 550,
        offsetY: 150,
}];

// Add common node fields: id, width, height.
let Nodes = nodeData.map((node, index) => {
    node.id = `node${index+1}`
    node.width = 150
    node.height = 70
    return node
})

export default Nodes;