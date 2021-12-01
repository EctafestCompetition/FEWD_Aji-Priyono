let bio = document.querySelectorAll('.container section .up-section .right ul li');
let p = document.querySelectorAll('.container-produk .down-section .down-card .control .narasi');


class Car {
    constructor(bio) {
        this.bio = bio;
        // this.bioCont = bioCont;
    }

    position() {
        let bioCont = document.querySelectorAll('.container section .up-section .right ul .content-bio');

        this.bio[0].onclick = function() {
            bioCont[0].classList.toggle('content-bio-block');
            if( bioCont[1].className = "content-bio-block" ) {
                bioCont[1].classList.replace('content-bio-block', 'content-bio');
            }
            if( bioCont[2].className = "content-bio-block" ) {
                bioCont[2].classList.replace('content-bio-block', 'content-bio');
            }
        }

        this.bio[1].onclick = function() {
            bioCont[1].classList.toggle('content-bio-block');
            bioCont[1].style.height = 'auto';
            bioCont[1].style.padding = '3px';
            bioCont[1].style.fontSize = '15px';

            if( bioCont[0].className = "content-bio-block" ) {
                bioCont[0].classList.replace('content-bio-block', 'content-bio');
            }
            if( bioCont[2].className = "content-bio-block" ) {
                bioCont[2].classList.replace('content-bio-block', 'content-bio');
            }
        }

        this.bio[2].onclick = function() {
            bioCont[2].classList.toggle('content-bio-block');
            bioCont[2].style.height = 'auto';
            bioCont[2].style.paddingTop = '5px';
            bioCont[2].style.paddingBottom = '5px';

            if( bioCont[0].className = "content-bio-block" ) {
                bioCont[0].classList.replace('content-bio-block', 'content-bio');
            }
            if( bioCont[1].className = "content-bio-block" ) {
                bioCont[1].classList.replace('content-bio-block', 'content-bio');
            }

        }

        // return true;
    }
}

let myCar = new Car(bio);
myCar.position();

