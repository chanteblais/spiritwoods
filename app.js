class App {
    initProject() {
        let background = document.getElementById("background");

        let x = 0;
        let y = 0;
        let scrollSpeed = 4;

        document.querySelector('.left').addEventListener('mouseover', function () {
            this.iid = setInterval(function() {
                if (x < 0) {
                    x += scrollSpeed
                }
                background.style.left = x;
            }, 10);
        });
        document.querySelector('.left').addEventListener('mouseleave', function () {
            this.iid && clearInterval(this.iid);
        });

        document.querySelector('.right').addEventListener('mouseover', function () {
            this.iid = setInterval(function() {
                if (x > -Math.abs(background.offsetWidth / 2)) {
                    x -= scrollSpeed
                }
                background.style.left = x;
            }, 10);
        });
        document.querySelector('.right').addEventListener('mouseleave', function () {
            this.iid && clearInterval(this.iid);
        });
    }
}

window.onload = function () {
    window.app = new App();
    window.app.initProject()
}