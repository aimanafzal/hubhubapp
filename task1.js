function calculateSurfaceArea(coordinates) {
	const sides = [
		[-1, 0, 0], [1,0, 0], [0,-1,0], [0, 1, 0], [0,0,-1], [0,0,1]
	];
	let surfaceArea = 0;
	for (const coord of coordinates){
		for (const side of sides){
			const neighbour = [
				coord[0] + side [0], coord[1] + side[1], coord[2] + side[2]
			];
			if ( !coordinates.some(c => c[0] === neighbour[0] && c[1] === neighbour[1] && c[2] === neighbour[2])){
				surfaceArea++;
			}
		}
	}
	return surfaceArea;
}
const coordinates = [
	[2, 2, 2],
    [1, 2, 2],
    [3, 2, 2],
    [2, 1, 2],
    [2, 3, 2],
    [2, 2, 1],
    [2, 2, 3],
    [2, 2, 4],
    [2, 2, 6],
    [1, 2, 5],
    [3, 2, 5],
    [2, 1, 5],
    [2, 3, 5]

]

const surfaceArea = calculateSurfaceArea(coordinates);
console.log(`The surfce area of the scanned lava droplet is ${surfaceArea}.`);