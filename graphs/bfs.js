// Sample graph (Adjacency List)
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

const bfs = (graph, start) => {
    const queue = [start];
    const visitedSet = new Set();
    while (queue.length > 0) {
        const top = queue.shift();
        if (visitedSet.has(top)) continue;
        visitedSet.add(top);
        console.log(top);
        for (const neighbor of graph[top]) {
            queue.push(neighbor);
        }
    }
}

const bfs_recursion = (graph, queue, visitedSet = new Set()) => {
    if (queue.length === 0) return;
    const top = queue.shift();
    if (visitedSet.has(top)) return;
    visitedSet.add(top);
    console.log(top);
    for (const neighbor of graph[top]) {
        if (!visitedSet.has(neighbor)) queue.push(neighbor);
    }
    bfs_recursion(graph, queue, visitedSet);
}

console.log(`BFS using function with loops`)
bfs(graph, 'A');

console.log(`BFS using recursion`);
bfs_recursion(graph, ['A'])