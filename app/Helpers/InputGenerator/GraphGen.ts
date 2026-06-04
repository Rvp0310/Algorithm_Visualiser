import {Node, Edge} from "../../Helpers/Types"

export const graphGen = (nodeN: number, edgeN: number) => {

    const min_dist = 50;

    const graphNodes: Node[] = [];

    for (let i = 0; i < nodeN; i++) {
        let x,y;
        let valid = false;
        while(!valid){
            x = Math.random() * 500 + 60;
            y = Math.random() * 300 + 70;

            valid = true;

            for(const node of graphNodes){
                const dx = node.x - x;
                const dy = node.y - y;

                if(Math.sqrt(dx * dx + dy * dy) < min_dist){
                    valid = false;
                    break;
                }
            }
        }

        graphNodes.push({
            id: i,
            x: x!,
            y: y!
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