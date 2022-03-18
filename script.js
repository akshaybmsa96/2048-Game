const keyControls = {
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
};

class Game2048 {
  constructor() {}

  initiliazeGame() {
    this.#addControls();
  }

  #addControls() {
    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case keyControls.ARROW_LEFT:
          this.#arrowLeftControl();
          break;
        case keyControls.ARROW_RIGHT:
          this.#arrowRightControl();
          break;
        case keyControls.ARROW_UP:
          this.#arrowUpControl();
          break;
        case keyControls.ARROW_DOWN:
          this.#arrowDownControl();
          break;
      }
    });
  }

  #arrowUpControl() {}
  #arrowRightControl() {}
  #arrowDownControl() {}
  #arrowLeftControl() {}
}

document.addEventListener("keyup", (e) => {
  console.log(e.key);
});
