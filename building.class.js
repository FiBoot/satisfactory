class Building {
	constructor({ name, size, connections }, x = 0, y = 0) {
		this.selected = false
		this.name = name
		this.size = size
		this.x = x
		this.y = y

		this.connections = []
		if (connections) for (let connection of connections) this.connections.push(new Connection(connection))
		this.draw()
	}

	setPos(x, y) {
		this.x = x
		this.y = y
	}

	rotate() {
		const { x, y } = this.size
		this.size = { x: y, y: x }
		for (let connection of this.connections) connection.rotate()
	}

	mouseIn() {
		return (
			mouseX > this.x - this.size.x / 2 &&
			mouseX < this.x + this.size.x / 2 &&
			mouseY > this.y - this.size.y / 2 &&
			mouseY < this.y + this.size.y / 2
		)
	}

	mouseOver() {
		this.selected = this.mouseIn()
	}

	draw() {
		this.mouseOver()
		stroke(COLORS.BORDER)
		fill(this.selected ? COLORS.HOVER : COLORS.BUILDING)
		rect(this.x - this.size.x / 2, this.y - this.size.y / 2, this.size.x, this.size.y, UNIT / 2)
		for (let connection of this.connections) connection.draw(this.x, this.y)
	}

	openMenu() {}
}
