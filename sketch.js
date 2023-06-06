const UNIT = 10
const HALF_ALPHA = Math.round(255 / 2).toString(16)

var buildings = []
var links = []
var selectedBuilding
var selectedConnection
var openedMenu

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	background(COLORS.BACKGROUND)
	buildings.forEach((b) => b.draw())
	drawSelectedBuilding()
}

function calpha(color) {
	return `${color}${HALF_ALPHA}`
}

function drawSelectedBuildingConnections(x, y, connections) {
	if (connections)
		for (let connection of connections) {
			fill(COLORS.EMPTY)
			stroke(calpha(connection.type === CONNECTION_TYPES.INPUT ? COLORS.GREEN : COLORS.RED))
			circle(x + connection.x, y + connection.y, CONNECTION_CIRCLE_SIZE)
		}
}

function drawSelectedBuilding() {
	if (selectedBuilding) {
		selectedBuilding.setPos(mouseX, mouseY)
		selectedBuilding.draw()
	}
}

function checkClicked() {
}

function deleteBuilding(building) {
	buildings.splice(
		buildings.findIndex((b) => b === building),
		1
	)
}

function keyPressed() {
	switch (keyCode) {
		case 82: // r
			if (selectedBuilding) selectedBuilding.rotate()
			break
		default:
			const buildingConfig = Object.values(BUILDINGS).find((bc) => keyCode === bc.keyCode)
			if (buildingConfig)
				selectedBuilding =
					buildingConfig.name === selectedBuilding?.name ? undefined : new Building(buildingConfig)
	}
}

function mouseClicked() {
	const { type, item } = checkClicked()
	switch (type) {
		case TYPES.BUILDING:
			item.openMenu()
			break
		case TYPES.CONNECTION:
			selectedConnection = item
			break
		default:
			if (selectedBuilding) buildings.push(new Building(selectedBuilding, mouseX, mouseY))
	}
}
