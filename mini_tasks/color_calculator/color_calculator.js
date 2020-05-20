const btns = document.querySelectorAll('.btn-num');
const inpText = document.querySelector('.inp');
const color_square = document.querySelector('#square');
const circle_f = document.querySelectorAll('#circle');
btns.forEach(btn => btn.addEventListener('click', onBtnClick));


function onBtnClick(ev){
    inpText.value += ev.target.innerText;
    if(ev.target.innerText == 0) {
        color_square.style.backgroundColor = 'rgb(247, 111, 111)';
        inpText.style.color = 'rgb(127, 255, 0)';
        color_square.style.display = 'block';
    } else if (ev.target.innerText == 1){
        circle.style.backgroundColor = 'rgb(111, 136, 247)';
        inpText.style.color = 'rgb(255, 30, 0)';
        circle.style.display = 'block';
    } else if (ev.target.innerText == 2) {
        circle.style.backgroundColor = 'rgb(253, 18, 253)';
        inpText.style.color = 'rgb(18, 20, 17)';
        circle.style.display = 'block';
        rhombus.style.backgroundColor = 'rgb(253, 18, 253)';
        rhombus.style.display = 'block';
    } else if (ev.target.innerText == 3) {
        color_square.style.backgroundColor = 'rgb(111, 247, 229)';
        inpText.style.color = 'rgb(245, 125, 13)';
        circle.style.backgroundColor = 'rgb(111, 247, 229)';
        circle.style.display = 'block';
        rhombus.style.backgroundColor = 'rgb(111, 247, 229)';
        rhombus.style.display = 'block';
        oval.style.backgroundColor = 'rgb(111, 247, 229)';
        oval.style.display = 'block';
    } else if (ev.target.innerText == 4) {
        color_square.style.backgroundColor = 'rgb(56, 45, 45)';
        inpText.style.color = 'rgb(4, 0, 255)';
        circle.style.backgroundColor = 'rgb(56, 45, 45)';
        circle.style.display = 'block';
        rhombus.style.backgroundColor = 'rgb(56, 45, 45)';
        rhombus.style.display = 'block';
        oval.style.backgroundColor = 'rgb(56, 45, 45)';
        oval.style.display = 'block';
        triangle.style.borderBottom = '140px solid rgb(56, 45, 45)';
        triangle.style.display = 'block';
    } else if (ev.target.innerText == 5) {
        color_square.style.backgroundColor = 'rgb(247, 238, 111)';
        inpText.style.color = 'rgb(247, 111, 111)';
        circle.style.backgroundColor = 'rgb(247, 238, 111)';
        circle.style.display = 'block';
        rhombus.style.backgroundColor = 'rgb(247, 238, 111)';
        rhombus.style.display = 'block';
        oval.style.backgroundColor = 'rgb(247, 238, 111)';
        oval.style.display = 'block';
        triangle.style.borderBottom = '140px solid rgb(247, 238, 111)';
        triangle.style.display = 'block';
        rectangle.style.backgroundColor = 'rgb(247, 238, 111)';
        rectangle.style.display = 'block';
    } else if (ev.target.innerText == 6) {
        color_square.style.backgroundColor = 'rgb(247, 111, 111)';
        inpText.style.color = 'rgb(53, 48, 53)';
        circle.style.backgroundColor = 'rgb(247, 111, 111)';
        circle.style.display = 'block';
        rhombus.style.backgroundColor = 'rgb(247, 111, 111)';
        rhombus.style.display = 'block';
        oval.style.backgroundColor = 'rgb(247, 111, 111)';
        oval.style.display = 'block';
        triangle.style.borderBottom = '140px solid rgb(247, 111, 111)';
        triangle.style.display = 'block';
        rectangle.style.backgroundColor = 'rgb(247, 111, 111)';
        rectangle.style.display = 'block';
        pacman.style.borderTop = '70px solid rgb(247, 111, 111)';
        pacman.style.borderLeft = '70px solid rgb(247, 111, 111)';
        pacman.style.borderBottom = '70px solid rgb(247, 111, 111)';
        pacman.style.display = 'block';
    } else if (ev.target.innerText == 7) {
        color_square.style.backgroundColor = 'rgb(4, 0, 255)';
        inpText.style.color = 'rgb(127, 255, 0)';
        circle.style.backgroundColor = 'rgb(4, 0, 255)';
        circle.style.display = 'block';
        rhombus.style.backgroundColor = 'rgb(4, 0, 255)';
        rhombus.style.display = 'block';
        oval.style.backgroundColor = 'rgb(4, 0, 255)';
        oval.style.display = 'block';
        triangle.style.borderBottom = '140px solid rgb(4, 0, 255)';
        triangle.style.display = 'block';
        rectangle.style.backgroundColor = 'rgb(4, 0, 255)';
        rectangle.style.display = 'block';
        pacman.style.borderTop = '70px solid rgb(4, 0, 255)';
        pacman.style.borderLeft = '70px solid rgb(4, 0, 255)';
        pacman.style.borderBottom = '70px solid rgb(4, 0, 255)';
        pacman.style.display = 'block';
        trapezium.style.borderBottom = '120px solid rgb(4, 0, 255)';
        trapezium.style.display = 'block';
    } else if (ev.target.innerText == 8) {
        color_square.style.backgroundColor = 'rgb(18, 20, 17)';
        inpText.style.color = 'rgb(18, 20, 17)';
        inpText.value = 'white font color for 8)';
        circle.style.backgroundColor = 'rgb(18, 20, 17)';
        circle.style.display = 'block';
        rhombus.style.backgroundColor = 'rgb(18, 20, 17)';
        rhombus.style.display = 'block';
        oval.style.backgroundColor = 'rgb(18, 20, 17)';
        oval.style.display = 'block';
        triangle.style.borderBottom = '140px solid rgb(18, 20, 17)';
        triangle.style.display = 'block';
        rectangle.style.backgroundColor = 'rgb(18, 20, 17)';
        rectangle.style.display = 'block';
        pacman.style.borderTop = '70px solid rgb(18, 20, 17)';
        pacman.style.borderLeft = '70px solid rgb(18, 20, 17)';
        pacman.style.borderBottom = '70px solid rgb(18, 20, 17)';
        pacman.style.display = 'block';
        trapezium.style.borderBottom = '120px solid rgb(18, 20, 17)';
        trapezium.style.display = 'block';
        square2.style.backgroundColor = 'rgb(18, 20, 17)';
        square2.style.display = 'block';
    } else if (ev.target.innerText == 9) {
        color_square.style.backgroundColor = 'rgb(172, 245, 99)';
        inpText.style.color = 'rgb(172, 245, 99)';
        circle.style.backgroundColor = 'rgb(172, 245, 99)';
        circle.style.display = 'block';
        rhombus.style.backgroundColor = 'rgb(172, 245, 99)';
        rhombus.style.display = 'block';
        oval.style.backgroundColor = 'rgb(172, 245, 99)';
        oval.style.display = 'block';
        triangle.style.borderBottom = '140px solid rgb(172, 245, 99)';
        triangle.style.display = 'block';
        rectangle.style.backgroundColor = 'rgb(172, 245, 99)';
        rectangle.style.display = 'block';
        pacman.style.borderTop = '70px solid rgb(172, 245, 99)';
        pacman.style.borderLeft = '70px solid rgb(172, 245, 99)';
        pacman.style.borderBottom = '70px solid rgb(172, 245, 99)';
        pacman.style.display = 'block';
        trapezium.style.borderBottom = '120px solid rgb(172, 245, 99)';
        trapezium.style.display = 'block';
        square2.style.backgroundColor = 'rgb(172, 245, 99)';
        square2.style.display = 'block';
        triangle_down.style.borderTop = '120px solid rgb(172, 245, 99)';
        triangle_down.style.display = 'block';
    } 
}


function reset_all() {
    inpText.value = '';
    color_square.style.backgroundColor = 'rgb(255, 255, 255)';
    color_square.style.display = 'none';
    circle.style.display = 'none';
    rhombus.style.display = 'none';
    oval.style.display = 'none';
    triangle.style.display = 'none';
    rectangle.style.display = 'none';
    pacman.style.display = 'none';
    trapezium.style.display = 'none';
    square2.style.display = 'none';
    triangle_down.style.display = 'none';
}