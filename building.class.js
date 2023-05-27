class Building {
	constructor(x, y, data) {
		this.selected = false
		this.x = x - data.size.x / 2
		this.y = y - data.size.y / 2
		this.data = data
		this.connections = []

		if (this.data.inputs)
			for (var input of this.data.inputs)
				this.connections.push(
					new Connection(this.x + input.x + this.data.size.x / 2, this.y + input.y + this.data.size.y / 2)
				)

		if (this.data.outputs)
			for (var output of this.data.outputs)
				this.connections.push(
					new Connection(
						this.x + output.x + this.data.size.x / 2,
						this.y + output.y + this.data.size.y / 2,
						false
					)
				)

		this.draw()
	}

	draw() {
		this.mouseOver()
		stroke(COLORS.BORDER)
		fill(this.selected ? COLORS.HOVER : COLORS.BACKGROUND)
		rect(this.x, this.y, this.data.size.x, this.data.size.y, UNIT / 2)
		for (var connection of this.connections) connection.draw()
	}

	openMenu() {}

	mouseOver() {
		this.selected = this.mouseIn()
	}

	mouseIn() {
		return (
			mouseX > this.x &&
			mouseX < this.x + this.data.size.x &&
			mouseY > this.y &&
			mouseY < this.y + this.data.size.y
		)
	}
}
