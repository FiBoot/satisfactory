var buildings = []
var selectedBuilding
var openedMenu

function setup() {
    createCanvas(800, 800)
}

function draw() {
    background(255)
    buildings.forEach(b => b.draw())
    drawHover()
}

function rotateConnections(connections) {
    console.log(connections)
    rotatedConnections = []
    if (connections)
        for (var connection of connections) {
            switch (connection.o) {
                case ORIENTATION.NORTH:
                    rotatedConnections.push({ x: connection.y * -1, y: connection.x, o: ORIENTATION.EAST })
                    break;
                case ORIENTATION.EAST:
                    rotatedConnections.push({ x: connection.y * -1, y: connection.x, o: ORIENTATION.SOUTH })
                    break;
                case ORIENTATION.SOUTH:
                    rotatedConnections.push({ x: connection.y * -1, y: connection.x, o: ORIENTATION.WEST })
                    break;
                case ORIENTATION.WEST:
                    rotatedConnections.push({ x: connection.y, y: connection.x, o: ORIENTATION.NORTH })
                    break;
            }
        }
    console.warn(rotatedConnections)
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

function drawHover() {
    if (selectedBuilding) {
        const bsx = selectedBuilding.size.x,
            bsy = selectedBuilding.size.y,
            x = mouseX - bsx / 2,
            y = mouseY - bsy / 2
        stroke(COLORS.LINE)
        fill(COLORS.BACKGROUND)
        rect(x, y, bsx, bsy)
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
            building = Object.values(BUILDINGS).find(bc => keyCode === bc.keyCode)
            selectedBuilding = building === selectedBuilding ? undefined : building
    }
}

function deleteBuilding(building) {
    buildings.splice(buildings.findIndex(b => b === building), 1)
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