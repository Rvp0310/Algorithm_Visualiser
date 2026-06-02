import {Node, Edge} from "../../Helpers/Types"

export const graphGen = (nodeN: number, edgeN: number) => {
    const nodes: Node[] = [];

    for (let i = 0; i < nodeN; i++) {
        nodes.push({
            id: i,
            x: Math.random() * 500 + 50,
            y: Math.random() * 500 + 50,
        });
    }

    const edges: Edge[] = [];

    while (edges.length < edgeN) {
        const from = Math.floor(Math.random() * nodeN);
        const to = Math.floor(Math.random() * nodeN);

        if (from === to) continue;

        edges.push({ from, to });
    }

    return {nodes, edges};
}