const CONNECTION_CIRCLE_SIZE = 10

class Connection {
	constructor({ x, y, type, orientation }) {
		this.selected = false
		this.x = x
		this.y = y
		this.type = type
		this.orientation = orientation
	}

	rotate() {
		const x = this.x,
			y = this.y
		this.x = y * -1
		this.y = x
		this.orientation = (this.orientation + 1) % ORIENTATIONS.length
	}

	isInput() {
		return this.type === CONNECTION_TYPES.INPUT
	}

	mouseOver(x, y) {
		return dist(x + this.x, y + this.y, mouseX, mouseY) < CONNECTION_CIRCLE_SIZE
	}

	draw(x, y) {
		const connectionColor = this.isInput() ? COLORS.GREEN : COLORS.RED
		fill(this.mouseOver(x, y) ? connectionColor : COLORS.BUILDING)
		stroke(connectionColor)
		circle(x + this.x, y + this.y, CONNECTION_CIRCLE_SIZE)
	}
}
