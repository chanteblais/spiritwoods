class App {
    initProject() {
        let background = document.getElementById("background");
        let audio = new Audio('Audio/searching.wav')

        document.getElementById("background").addEventListener('mousedown', function () {
            let playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(function() {
                }).catch(function(error) {
                    console.log(error)
                });
            }
        })

        let x = 0;
        let y = 0;
        let scrollSpeed = 6;

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
                if (x > -Math.abs(background.offsetWidth / 2 ) +200) {
                    x -= scrollSpeed
                }
                background.style.left = x;
            }, 10);
        });
        document.querySelector('.right').addEventListener('mouseleave', function () {
            this.iid && clearInterval(this.iid);
        });

        document.querySelector('.item').addEventListener('mousedown', function() {
            this.remove()
            addInventory(this.getAttribute('title'));
        })
    }
}

window.onload = function () {
    window.app = new App();
    window.app.initProject()
}

function addInventory(name) {
    let inventory = document.querySelector('.inventoryItem');
    let newInventory = inventory.cloneNode(true);
    let url = "url('Art/click_$.png')"
    url = url.replace('$', name);
    newInventory.style.background = url;
    newInventory.style.backgroundRepeat = 'no-repeat';
    document.getElementById("inventory").appendChild(newInventory)
    newInventory.style.visibility = 'visible';
}