app = {
    counter: null,

    init() {
        app.listenersInit();
    },

    //Initialization of listeners
    listenersInit() {
        document.querySelector('.increase').addEventListener('click', app.increaseFunc);
        document.querySelector('.decrease').addEventListener('click', app.decreaseFunc);

        document.querySelector('.reset').addEventListener('click', app.resetFunc);
    },

    increaseFunc() {
        app.counter++;
        document.querySelector('.counter').textContent = app.counter;
    },

    decreaseFunc() {
        app.counter--;
        document.querySelector('.counter').textContent = app.counter;
    },

    resetFunc() {
        document.querySelector('.counter').textContent = 0;
    }
}

document.addEventListener('DOMContentLoaded', app.init);