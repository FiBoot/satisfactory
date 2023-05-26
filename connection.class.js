const CONNECTION_CIRCLE_SIZE = 10

class Connection {
    constructor(x, y, input = true) {
        this.selected = false;
        this.x = x;
        this.y = y
        this.input = input
    }

    hover() {
        return dist(mouseX, mouseY, this.x, this.y) < CONNECTION_CIRCLE_SIZE
    }

    draw() {
        fill(this.hover() ? COLORS.HOVER : COLORS.EMPTY)
        stroke(this.input ? COLORS.GREEN : COLORS.RED)
        circle(this.x, this.y, CONNECTION_CIRCLE_SIZE)
    }
}