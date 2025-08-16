// Sample graph (Adjacency List)
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};


const dfs = (graph, start) => {
    const stack = [start];
    const visitedSet = new Set();
    while(stack.length > 0) {
        const top = stack.pop();
        if (visitedSet.has(top)) continue;
        visitedSet.add(top);
        console.log(top + ', ');
        const neibors = graph[top];
        for (let idx = 0; idx < neibors.length; idx++) {
            const element = neibors[idx];
            stack.push(element);
        }
    }
}

const dfs_recursive = (graph, start, visitedSet = new Set()) => {
    if (visitedSet.has(start)) return;
    visitedSet.add(start);
    console.log(start);
    for (let idx = 0; idx < graph[start].length; idx++) {
        const element = graph[start][idx];
        dfs_recursive(graph, element, visitedSet);
    }
}

console.log(`DFS using function - loops`);
dfs(graph, 'A');

console.log(`DFS using recursion`);
dfs_recursive(graph, 'A');