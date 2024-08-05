document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("game-board");
    const scoreElement = document.getElementById("score");
    const bestScoreElement = document.getElementById("best-score");
    const gameOverElement = document.getElementById("game-over");
    const restartButton = document.getElementById("restart-btn");
    const difficultySelector = document.getElementById("difficulty");
    const helpButton = document.getElementById("help-btn");
    const closeHelpButton = document.getElementById("close-help-btn");
    const themeSelector = document.getElementById("theme");
    const size = 4;
    let cells = Array(size * size).fill(null).map(() => ({ value: 0 }));
    let score = 0;
    let bestScore = localStorage.getItem('bestScore') || 0;

    // Inicialização
    bestScoreElement.textContent = bestScore;
    createBoard();
    
    // Funções principais
    function createBoard() {
        board.innerHTML = '';
        cells.forEach(() => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            board.appendChild(cell);
        });
        addRandomCell();
        addRandomCell();
        updateBoard();
    }

    function addRandomCell() {
        const emptyCells = cells.filter(cell => cell.value === 0);
        if (emptyCells.length > 0) {
            const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            randomCell.value = Math.random() < 0.9 ? 2 : 4; // 90% chance of 2, 10% chance of 4
        }
    }

    function updateBoard() {
        const cellElements = document.querySelectorAll(".cell");
        cellElements.forEach((element, index) => {
            const value = cells[index].value;
            element.textContent = value > 0 ? value : "";
            element.dataset.value = value;
            element.style.backgroundColor = getCellColor(value);
            element.style.color = value > 4 ? '#fff' : '#776e65';
            // Adiciona a animação
            element.classList.add('move');
            setTimeout(() => element.classList.remove('move'), 300);
        });
        scoreElement.textContent = score;
        if (score > bestScore) {
            bestScore = score;
            localStorage.setItem('bestScore', bestScore);
            bestScoreElement.textContent = bestScore;
        }
        if (checkGameOver()) {
            showGameOver();
        }
    }

    function getCellColor(value) {
        switch (value) {
            case 2: return '#eee4da';
            case 4: return '#ede0c8';
            case 8: return '#f2b179';
            case 16: return '#f59563';
            case 32: return '#f67c5f';
            case 64: return '#f65e3b';
            case 128: return '#edcf72';
            case 256: return '#edcc61';
            case 512: return '#edc850';
            case 1024: return '#edc53f';
            case 2048: return '#edc22e';
            default: return '#cdc1b4';
        }
    }

    function move(direction) {
        const previousState = JSON.stringify(cells);
        let hasMoved = false;
        for (let i = 0; i < size; i++) {
            let line = [];
            for (let j = 0; j < size; j++) {
                let index = getCellIndex(i, j, direction);
                line.push(cells[index].value);
            }
            let newLine = mergeLine(line);
            for (let j = 0; j < size; j++) {
                let index = getCellIndex(i, j, direction);
                if (cells[index].value !== newLine[j]) {
                    hasMoved = true;
                    if (cells[index].value !== 0) {
                        mergeSound.play();
                    }
                }
                cells[index].value = newLine[j];
            }
        }
        if (hasMoved) {
            moveSound.play();
            addRandomCell();
            updateBoard();
        }
    }

    function getCellIndex(row, col, direction) {
        if (direction === 'left') return row * size + col;
        if (direction === 'right') return row * size + (size - 1 - col);
        if (direction === 'up') return col * size + row;
        if (direction === 'down') return (size - 1 - col) * size + row;
    }

    function mergeLine(line) {
        line = line.filter(value => value !== 0);
        for (let i = 0; i < line.length - 1; i++) {
            if (line[i] === line[i + 1]) {
                line[i] *= 2;
                score += line[i];
                line[i + 1] = 0;
            }
        }
        return line.filter(value => value !== 0).concat(Array(size).fill(0)).slice(0, size);
    }

    function checkGameOver() {
        return !cells.some(cell => cell.value === 0) && !canMove();
    }

    function canMove() {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const index = i * size + j;
                const value = cells[index].value;
                if (value === 0) return true;
                if (j < size - 1 && value === cells[index + 1].value) return true;
                if (i < size - 1 && value === cells[index + size].value) return true;
            }
        }
        return false;
    }

    function showGameOver() {
        gameOverElement.style.display = 'block';
    }

    function restartGame() {
        gameOverElement.style.display = 'none';
        cells = Array(size * size).fill(null).map(() => ({ value: 0 }));
        score = 0;
        createBoard();
    }

    // Eventos
    restartButton.addEventListener('click', restartGame);

    document.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "ArrowUp":
            case "w":
                move("up");
                break;
            case "ArrowDown":
            case "s":
                move("down");
                break;
            case "ArrowLeft":
            case "a":
                move("left");
                break;
            case "ArrowRight":
            case "d":
                move("right");
                break;
        }
    });

    difficultySelector.addEventListener('change', (e) => {
        const difficulty = e.target.value;
        switch (difficulty) {
            case 'easy':
                // Configurações para dificuldade fácil
                break;
            case 'medium':
                // Configurações para dificuldade média
                break;
            case 'hard':
                // Configurações para dificuldade difícil
                break;
        }
    });

    helpButton.addEventListener('click', () => {
        document.getElementById("help-screen").style.display = 'block';
    });

    closeHelpButton.addEventListener('click', () => {
        document.getElementById("help-screen").style.display = 'none';
    });

    themeSelector.addEventListener('change', (e) => {
        const theme = e.target.value;
        if (theme === 'dark') {
            document.body.classList.add('theme-dark');
            document.body.classList.remove('theme-light');
        } else {
            document.body.classList.add('theme-light');
            document.body.classList.remove('theme-dark');
        }
    });

    // Suporte para controle por toque
    board.addEventListener('touchstart', handleTouchStart, false);
    board.addEventListener('touchend', handleTouchEnd, false);

    let touchStartX = 0;
    let touchStartY = 0;

    function handleTouchStart(e) {
        const touch = e.touches[0];
        touchStartX = touch.pageX;
        touchStartY = touch.pageY;
    }

    function handleTouchEnd(e) {
        const touch = e.changedTouches[0];
        const touchEndX = touch.pageX;
        const touchEndY = touch.pageY;

        const xDiff = touchEndX - touchStartX;
        const yDiff = touchEndY - touchStartY;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                move("right");
            } else {
                move("left");
            }
        } else {
            if (yDiff > 0) {
                move("down");
            } else {
                move("up");
            }
        }
    }

    // Sons
    const moveSound = new Audio('move.mp3');
    const mergeSound = new Audio('merge.mp3');
    const gameOverSound = new Audio('game-over.mp3');
});
