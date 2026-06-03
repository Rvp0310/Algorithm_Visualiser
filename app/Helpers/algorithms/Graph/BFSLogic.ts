import { Node, Edge, GraphAction } from "../../Types"

export const bfsWithSteps = ({nodes, edges, start, goal}: {nodes: Node[], edges: Edge[], start: number, goal: number}): {steps: GraphAction[]} => {
    const steps: GraphAction[] = [];
    const queue: number[] = [];
    const visited = new Set<number>();
    const parent = new Map<number, number>();

    // build adj
    const adj = new Map<number, number[]>();
    for(const node of nodes){
        adj.set(node.id, []);
    }
    for (const edge of edges) {
        adj.get(edge.from)!.push(edge.to);
        adj.get(edge.to)!.push(edge.from);
    }

    visited.add(start);

    steps.push({
        action: "discover",
        node: start
    });

    queue.push(start);
    while(queue.length > 0){
        let curr = queue.shift()!;

        steps.push({
            action: "visit",
            node: curr
        })

        if(curr == goal){
            const path: number[] = [];
            while(curr != start){
                path.push(curr);
                curr = parent.get(curr)!;
            }
            path.push(start);
            steps.push({
                action: "path",
                nodes: path
            })
            break;
        }

        for(const neighbour of adj.get(curr)!){
            if(visited.has(neighbour)){
                continue;
            } 
            visited.add(neighbour);
            queue.push(neighbour);
            steps.push({
                action: "discover",
                node: neighbour
            })
            parent.set(neighbour, curr);
        }
    }
    steps.push({
        action: "done"
    })

    return {steps};
}