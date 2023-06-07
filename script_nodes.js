//import {edges} from './edges.js'
//import {nodes} from './nodes.js'

export function draw() {
    var LENGTH_MAIN = 350,
        LENGTH_SERVER = 150,
        LENGTH_SUB = 50,
        WIDTH_SCALE = 2,
        GREEN = "green",
        RED = "#C5000B",
        ORANGE = "orange",
        //GRAY = '#666666',
        GRAY = "gray",
        BLACK = "#2B1B17";
    /*var edges = [];
    fetch('edges.json').then(response => edges = response.json());
    var nodes = [];
    fetch('nodes.json').then(response => nodes = response.json());*/
    var container = document.getElementById("mynetwork");
    console.log(nodes);
    console.log(edges);
    var nodes = [];
    var edges = [];
    nodes.push({ id: 1, label: "192.168.0.1", group: "switch", value: 10 });
        nodes.push({ id: 2, label: "192.168.0.2", group: "switch", value: 8 });
        nodes.push({ id: 3, label: "192.168.0.3", group: "switch", value: 6 });
        edges.push({
          from: 1,
          to: 2,
          length: LENGTH_MAIN,
          width: WIDTH_SCALE * 6,
          label: "0.71 mbps",
        });
        edges.push({
          from: 1,
          to: 3,
          length: LENGTH_MAIN,
          width: WIDTH_SCALE * 4,
          label: "0.55 mbps",
        });
    var data = {
        nodes: edges,
        edges: nodes,
    };
    var options = {
        nodes: {
        scaling: {
            min: 16,
            max: 32,
        },
        },
        edges: {
        color: GRAY,
        smooth: false,
        },
        physics: {
        barnesHut: { gravitationalConstant: -30000 },
        stabilization: { iterations: 2500 },
        },
        /*groups: {
        switch: {
            shape: "triangle",
            color: "#FF9900", // orange
        },
        desktop: {
            shape: "dot",
            color: "#2B7CE9", // blue
        },
        mobile: {
            shape: "dot",
            color: "#5A1E5C", // purple
        },
        server: {
            shape: "square",
            color: "#C5000B", // red
        },
        internet: {
            shape: "square",
            color: "#109618", // green
        },
        },*/
    };
    network = new vis.Network(container, data, options);
}