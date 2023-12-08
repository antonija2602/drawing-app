// ==================== VARIABLES ====================
const canvas = document.getElementById("canvas")
const increaseButton = document.getElementById("increase")
const decreaseButton = document.getElementById("decrease")
const sizeEl = document.getElementById("size")
const colorEl = document.getElementById("color")
const clearEl = document.getElementById("clear")
const ctx = canvas.getContext("2d")

// ==================== INITIAL VALUES ====================
let size = 20
let isPressed = false
let color = "black"
let x = undefined
let y = undefined

// we use both function parallel to fill line. both functions make the line smooth and without blank spaces.
// ==================== function drawCircle ====================
// draw circles one after one
function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

// ==================== function drawLine ====================
// draw strokes one after one
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}
// we use both function parallel to fill line. both functions make the line smooth and without blank spaces.

// ==================== function updateSizeOnScreen ====================
// showing the size of line in toolbox
function updateSizeOnScreen() {
    sizeEl.innerText = size
}

// ==================== addEventListener CANVAS ====================
// waiting for mouse to be pressed to start drawing
canvas.addEventListener("mousedown", (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

// waiting for mousepress ending to stop drawing
canvas.addEventListener("mouseup", (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

// until mouse is pressed, line is drawn
canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawLine(x, y, x2, y2)
        drawCircle(x2, y2)

        x = x2
        y = y2
    }
})

// =============== addEventListener BUTTONS ===============
// decrease line size
decreaseButton.addEventListener("click", () => {
    size -= 5

    if (size < 5) {
        size = 5
    }
    updateSizeOnScreen()
})

// increase line size
increaseButton.addEventListener("click", () => {
    size += 5

    if (size > 50) {
        size = 50
    }
    updateSizeOnScreen()
})

// ==================== addEventListener COLOR ====================
// change line color
colorEl.addEventListener("change", (e) => {
    color = e.target.value
})

// ==================== addEventListener CLEAR ====================
// clear canvas
clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})
