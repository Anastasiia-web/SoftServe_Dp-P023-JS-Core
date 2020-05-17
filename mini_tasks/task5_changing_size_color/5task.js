function change_color() {
    return 'rgb(255,215,0)';
}

function original_color() {
    return 'rgb(128, 128, 128)';
}

change_size_btn.onclick = function() {
    btn.style.background = change_color();

    const widthPx = width_input.value + 'px';
    const heightPx = height_input.value + 'px';

    circle.style.width = widthPx;
    circle.style.height = heightPx;
    if(widthPx == "px" && heightPx == "px") {
        alert('Enter numbers please!');
        btn.style.background = original_color();
    }
}

function change_circle_color() {
    const firstNumberColor = color_input_1.value;
    const secondNumberColor = color_input_2.value;
    const thirdNumberColor = color_input_3.value;
    return `rgb(${firstNumberColor}, ${secondNumberColor}, ${thirdNumberColor})`;
}

change_circle_color_btn.onclick = function() {
    btn.style.background = change_color();
    circle.style.backgroundColor = change_circle_color();   
}