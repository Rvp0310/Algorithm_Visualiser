import {Node, Edge} from "../../Helpers/Types"

export const graphGen = (nodeN: number, edgeN: number) => {
    const graphNodes: Node[] = [];

    for (let i = 0; i < nodeN; i++) {
        graphNodes.push({
            id: i,
            x: Math.random() * 400 + 50,
            y: Math.random() * 400 + 50,
        });
    }

    const graphEdges: Edge[] = [];

    while (graphEdges.length < edgeN) {
        const from = Math.floor(Math.random() * nodeN);
        const to = Math.floor(Math.random() * nodeN);

        if (from === to) continue;

        graphEdges.push({ from, to });
    }

    const startNode = Math.floor(Math.random() * nodeN);
    let goalNode = Math.floor(Math.random() * nodeN);
    while (goalNode === startNode) {
        goalNode = Math.floor(Math.random() * nodeN);
    }
    
    return {graphNodes, graphEdges, startNode, goalNode};
}