// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("game-board");
    const size = 4;
    let cells = [];
    let score = 0;

    function createBoard() {
        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            board.appendChild(cell);
            cells.push(cell);
        }
        addRandomCell();
        addRandomCell();
        updateBoard();
    }

    function addRandomCell() {
        const emptyCells = cells.filter(cell => !cell.dataset.value);
        if (emptyCells.length > 0) {
            const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            randomCell.dataset.value = 2;
        }
    }

    function updateBoard() {
        cells.forEach(cell => {
            const value = cell.dataset.value;
            cell.textContent = value ? value : "";
            cell.className = "cell";
            if (value) {
                cell.classList.add(`cell-${value}`);
            }
        });
    }

    function move(direction) {
        let hasMoved = false;
        let merged = Array(size * size).fill(false);

        function moveCell(i, targetIndex) {
            if (cells[targetIndex].dataset.value === cells[i].dataset.value && !merged[targetIndex]) {
                cells[targetIndex].dataset.value *= 2;
                cells[i].dataset.value = "";
                merged[targetIndex] = true;
                hasMoved = true;
            } else if (!cells[targetIndex].dataset.value) {
                cells[targetIndex].dataset.value = cells[i].dataset.value;
                cells[i].dataset.value = "";
                hasMoved = true;
            }
        }

        for (let step = 0; step < size - 1; step++) {
            for (let i = 0; i < size * size; i++) {
                if (!cells[i].dataset.value) continue;

                let targetIndex = i;
                switch (direction) {
                    case "up":
                        targetIndex = i - size;
                        break;
                    case "down":
                        targetIndex = i + size;
                        break;
                    case "left":
                        targetIndex = i - 1;
                        break;
                    case "right":
                        targetIndex = i + 1;
                        break;
                }

                if (targetIndex >= 0 && targetIndex < size * size) {
                    if ((direction === "left" || direction === "right") && Math.floor(i / size) !== Math.floor(targetIndex / size)) {
                        continue;
                    }

                    moveCell(i, targetIndex);
                }
            }
        }

        if (hasMoved) {
            addRandomCell();
            updateBoard();
        }
    }

    document.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "ArrowUp":
                move("up");
                break;
            case "ArrowDown":
                move("down");
                break;
            case "ArrowLeft":
                move("left");
                break;
            case "ArrowRight":
                move("right");
                break;
        }
    });

    createBoard();
});
