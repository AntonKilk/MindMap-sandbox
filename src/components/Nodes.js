
// A node is created and stored in nodes array.
let nodeData = [{
    id: 'node1',
    annotations: [{
        content: 'JavaScript Fundamentals'
    }],
    offsetX: 80,
    offsetY: 0,
}, {
    id: 'node2',
    annotations: [{
        content: 'Intermediate JavaScript'
    }],
    offsetX: 415,
    offsetY: 0,
}, {
    id: 'node3',
    annotations: [{
        content: 'Functional JavaScript'
    }],
    offsetX: 570,
    offsetY: 60,
}, {
    id: 'node4',
    annotations: [{
        content: 'React Fundamentals'
    }],
    branch: 'root'
}, {
    id: 'node5',
    annotations: [{
        content: 'Intermediate React'
    }]
}, {
    id: 'node6',
    annotations: [{
        content: 'HTML & CSS Fundamentals'
    }]
}, {
    id: 'node7',
    annotations: [{
            content: 'Intermediate CSS'
    }]
}, {
    id: 'node8',
    annotations: [{
            content: 'HTTP Fundamentals'
    }]
}, {
    id: 'node9',
    annotations: [{
            content: 'REST API with Micro Framework'
    }]
}, {
    id: 'node10',
    annotations: [{
            content: 'Node Fundamentals'
    }]
}, {
    id: 'node11',
    annotations: [{
            content: 'Intermediate Node'
    }]
}, {
    id: 'node12',
    annotations: [{
            content: 'Postgres Fundamentals'
    }]
}, {
    id: 'node13',
    annotations: [{
            content: 'Intermediate Postgres'
    }]
}, {
    id: 'node14',
    annotations: [{
            content: 'OS Fundamentals'
    }]
}, {
    id: 'node15',
    annotations: [{
            content: 'Node CLI Scripting'
    }]
},
];

// Add common node fields: id, width, height.
let Nodes = nodeData.map((node, index) => {
    node.width = 150
    node.height = 70
    return node
})

export default Nodes;