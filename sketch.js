const UNIT = 10
const HALF_ALPHA = Math.round(255 / 2).toString(16)

var buildings = []
var selectedBuilding
var openedMenu

function setup() {
	createCanvas(800, 800)
}

function draw() {
	background(255)
	buildings.forEach((b) => b.draw())
	drawSelectedBuilding()
}

function calpha(color) {
	return `${color}${HALF_ALPHA}`
}

function rotateConnections(connections) {
	rotatedConnections = []
	if (connections)
		for (var connection of connections) {
			switch (connection.o) {
				case ORIENTATION.NORTH:
					rotatedConnections.push({ x: connection.y * -1, y: connection.x, o: ORIENTATION.EAST })
					break
				case ORIENTATION.EAST:
					rotatedConnections.push({ x: connection.y * -1, y: connection.x, o: ORIENTATION.SOUTH })
					break
				case ORIENTATION.SOUTH:
					rotatedConnections.push({ x: connection.y * -1, y: connection.x, o: ORIENTATION.WEST })
					break
				case ORIENTATION.WEST:
					rotatedConnections.push({ x: connection.y, y: connection.x, o: ORIENTATION.NORTH })
					break
			}
		}
	return rotatedConnections
}

function rotateSelectedBuilding() {
	if (selectedBuilding) {
		var rotateBuilding = JSON.parse(JSON.stringify(selectedBuilding)) // deepclone
		rotateBuilding.size.x = selectedBuilding.size.y
		rotateBuilding.size.y = selectedBuilding.size.x
		rotateBuilding.inputs = rotateConnections(rotateBuilding.inputs)
		rotateBuilding.outputs = rotateConnections(rotateBuilding.outputs)
		selectedBuilding = rotateBuilding
	}
}

function drawSelectedBuildingConnections(x, y, connections, color) {
	if (connections)
		for (var connection of connections) {
			fill(COLORS.EMPTY)
			stroke(color)
			circle(x + connection.x, y + connection.y, CONNECTION_CIRCLE_SIZE)
		}
}

function drawSelectedBuilding() {
	if (selectedBuilding) {
		const bsx = selectedBuilding.size.x,
			bsy = selectedBuilding.size.y,
			x = mouseX - bsx / 2,
			y = mouseY - bsy / 2
		stroke(calpha(COLORS.BORDER))
		fill(calpha(COLORS.BACKGROUND))
		rect(x, y, bsx, bsy, UNIT / 2)
		drawSelectedBuildingConnections(mouseX, mouseY, selectedBuilding.inputs, calpha(COLORS.GREEN))
		drawSelectedBuildingConnections(mouseX, mouseY, selectedBuilding.outputs, calpha(COLORS.RED))
	}
}

function checkClicked() {
	for (let building of buildings) {
		if (building.mouseIn()) {
			return building
		}
	}
}

function keyPressed() {
	switch (keyCode) {
		case 82: // r
			rotateSelectedBuilding()
			break
		default:
			building = Object.values(BUILDINGS).find((bc) => keyCode === bc.keyCode)
			selectedBuilding = building === selectedBuilding ? undefined : building
	}
}

function deleteBuilding(building) {
	buildings.splice(
		buildings.findIndex((b) => b === building),
		1
	)
}

function mouseClicked() {
	var buildingClicked = checkClicked()
	if (buildingClicked) {
		buildingClicked.openMenu()
	} else {
		if (selectedBuilding) {
			buildings.push(new Building(mouseX, mouseY, selectedBuilding))
		}
	}
}
