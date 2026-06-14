import { Node, Edge, GraphAction } from "../../Types"

export const dfsWithSteps = (nodes: Node[], edges: Edge[], start: number, goal: number): {steps: GraphAction[]} => {
    const steps: GraphAction[] = [];
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

    const dfsRec = (curr: number) => {
        visited.add(curr);
        steps.push({
            action: "discover",
            node: curr
        });
        steps.push({
            action: "visit",
            node: curr
        });

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
            });

            steps.push({
                action: "done"
            })

            return {steps};
        }  

        for(let i of adj.get(curr)!){
            if(!visited.has(i)){
                parent.set(i, curr);
                dfsRec(i);
            }
        }
    }

    dfsRec(start);
    steps.push({
        action: "done"
    })

    return {steps};
}