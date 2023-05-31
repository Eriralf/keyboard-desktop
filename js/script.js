const selectOne = document.getElementById("select-one");
const selectTwo = document.getElementById("select-two");
const selectThree = document.getElementById("select-three");
const keycaps = document.querySelectorAll(".keycaps");

selectOne.addEventListener("click", () => {
    const positionToKeyOrange = [0];
    const positionToKeyBlack = [
        6, 7, 8, 9, 13, 14, 15, 16, 29, 30, 31, 44, 45, 46, 58, 59, 60, 71, 73,
        74, 75, 76, 78, 79, 80,
    ];
    const positionToKeyGray = [
        1, 2, 3, 4, 5, 10, 11, 12, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 47, 48, 49, 50, 51,
        52, 53, 54, 55, 56, 57, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73,
        72, 77, 81, 82, 83,
    ];
    positionToKeyGray.forEach((position) => {
        keycaps[position].classList.remove(...keycaps[position].classList);
        keycaps[position].classList.add("gray-key");
    });
    positionToKeyBlack.forEach((position) => {
        keycaps[position].classList.remove(...keycaps[position].classList);
        keycaps[position].classList.add("black-key");
    });
    positionToKeyOrange.forEach((position) => {
        keycaps[position].classList.remove(...keycaps[position].classList);
        keycaps[position].classList.add("orange-key");
    });
});

selectTwo.addEventListener("click", () => {
    const positionToKeyPurple = [0, 72, 77, 81, 82, 83];
    const positionToKeyGold = [
        6, 7, 8, 9, 13, 14, 15, 16, 29, 30, 31, 44, 45, 46, 58, 59, 60, 71, 73,
        74, 75, 76, 78, 79, 80,
    ];
    const positionToKeyWhite = [
        1, 2, 3, 4, 5, 10, 11, 12, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 47, 48, 49, 50, 51,
        52, 53, 54, 55, 56, 57, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73,
    ];
    positionToKeyPurple.forEach((position) => {
        keycaps[position].classList.remove(...keycaps[position].classList);
        keycaps[position].classList.add("purple-key");
    });
    positionToKeyGold.forEach((position) => {
        keycaps[position].classList.remove(...keycaps[position].classList);
        keycaps[position].classList.add("gold-key");
    });
    positionToKeyWhite.forEach((position) => {
        keycaps[position].classList.remove(...keycaps[position].classList);
        keycaps[position].classList.add("white-key");
    });
});

selectThree.addEventListener("click", () => {
    const positionToKeyRed = [33, 47, 48, 49, 72, 81, 82, 83];
    const positionToKeyBlack = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
        60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 74, 75, 76, 77, 78,
        79, 80,
    ];
    positionToKeyBlack.forEach((position) => {
        keycaps[position].classList.remove(...keycaps[position].classList);
        keycaps[position].classList.add("black-key");
    });
    positionToKeyRed.forEach((position) => {
        keycaps[position].classList.remove(...keycaps[position].classList);
        keycaps[position].classList.add("red-key");
    });
});

/* window.addEventListener("keydown", (event) => {
    if (event.preventDefault()) {
        return;
    }
    const btnEsc = keycaps[0];
    const btnF1 = keycaps[1];
    const btnF2 = keycaps[2];
    const btnF3 = keycaps[3];
    const btnF4 = keycaps[4];

    switch (event.code) {
        case "Escape":
            btnEsc.focus();
            console.log("Esc");
            break;
        case "F1":
            btnF1.focus();
            console.log("Digito F1");
            break;
        case "F2":
            btnF2.focus();
            console.log("Digito F2");
            break;
        case "F3":
            btnF3.focus();
            console.log("Digito F3");
            break;
        case "F4":
            btnF4.focus();
            console.log("Digito F4");
            break;
    }
});
 */