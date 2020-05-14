function start() {
    return 'rgb(255,215,0)';
}
start_button.onclick = function() {
    cover.style.background = start();
}

function attention() {
    return 'rgb(255,0,0)';
}

function black() {
    return 'rgb(0,0,0)';
}

function count() {
    first_price = document.getElementById('a1').value;
    second_price = document.getElementById('a2').value;
    third_price = document.getElementById('a3').value;
    first_capacity = document.getElementById('b1').value;
    second_capacity = document.getElementById('b2').value;
    third_capacity = document.getElementById('b3').value;

    sum1_1 = first_price * first_capacity;
    sum1_2 = first_price * second_capacity;
    sum1_3 = first_price * third_capacity;

    sum2_1 = second_price * first_capacity;
    sum2_2 = second_price * second_capacity;
    sum2_3 = second_price * third_capacity;

    sum3_1 = third_price * first_capacity;
    sum3_2 = third_price * second_capacity;
    sum3_3 = third_price * third_capacity;

    the_biggest_amount = Math.max(sum1_1, sum1_2, sum1_3, sum2_1, sum2_2, sum2_3, sum3_1, sum3_2, sum3_3);

    alert(`You can earn ${the_biggest_amount} $ if you follow the highlighted option.`);
    document.getElementById('area').innerHTML = `Total: ${the_biggest_amount} $.`;
    area.style.color = black();

    if(Math.max(sum1_1, sum1_2, sum1_3, sum2_1, sum2_2, sum2_3, sum3_1, sum3_2, sum3_3) == sum1_1){
        a1.style.background = attention();
        b1.style.background = attention();
    } else if(Math.max(sum1_1, sum1_2, sum1_3, sum2_1, sum2_2, sum2_3, sum3_1, sum3_2, sum3_3) == sum1_2) {
        a1.style.background = attention();
        b2.style.background = attention();
    } else if(Math.max(sum1_1, sum1_2, sum1_3, sum2_1, sum2_2, sum2_3, sum3_1, sum3_2, sum3_3) == sum1_3) {
        a1.style.background = attention();
        b3.style.background = attention();
    } else if(Math.max(sum1_1, sum1_2, sum1_3, sum2_1, sum2_2, sum2_3, sum3_1, sum3_2, sum3_3) == sum2_1) {
        a2.style.background = attention();
        b1.style.background = attention();
    } else if(Math.max(sum1_1, sum1_2, sum1_3, sum2_1, sum2_2, sum2_3, sum3_1, sum3_2, sum3_3) == sum2_2) {
        a2.style.background = attention();
        b2.style.background = attention();
    } else if(Math.max(sum1_1, sum1_2, sum1_3, sum2_1, sum2_2, sum2_3, sum3_1, sum3_2, sum3_3) == sum2_3) {
        a2.style.background = attention();
        b3.style.background = attention();
    } else if(Math.max(sum1_1, sum1_2, sum1_3, sum2_1, sum2_2, sum2_3, sum3_1, sum3_2, sum3_3) == sum3_1) {
        a3.style.background = attention();
        b1.style.background = attention();
    } else if(Math.max(sum1_1, sum1_2, sum1_3, sum2_1, sum2_2, sum2_3, sum3_1, sum3_2, sum3_3) == sum3_2) {
        a3.style.background = attention();
        b2.style.background = attention();
    } else if(Math.max(sum1_1, sum1_2, sum1_3, sum2_1, sum2_2, sum2_3, sum3_1, sum3_2, sum3_3) == sum3_3) {
        a3.style.background = attention();
        b3.style.background = attention();
    }
}