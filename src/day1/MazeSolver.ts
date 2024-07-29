const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    path: Point[],
    seen: boolean[][],
): boolean {
    // Base Cases
    // 1. if it's off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // 2. if it's a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // 3. if it's the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    // 4. if we have seen it
    if (seen[curr.y][curr.x]) {
        return false;
    }

    path.push(curr);
    seen[curr.y][curr.x] = true;

    for (let i = 0; i < dir.length; i++) {
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + dir[i][0],
                    y: curr.y + dir[i][1],
                },
                end,
                path,
                seen,
            )
        ) {
            return true;
        }
    }

    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, path, seen);
    return path;
}
