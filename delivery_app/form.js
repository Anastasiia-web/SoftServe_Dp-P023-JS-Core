function count() {
    quantity_of_oil = document.getElementById('oil').value;
    quantity_of_bread = document.getElementById('bread').value;
    quantity_of_juice = document.getElementById('juice').value;
    quantity_of_beer = document.getElementById('beer').value;
    quantity_of_fish = document.getElementById('fish').value;
    quantity_of_tomato = document.getElementById('tomato').value;
    quantity_of_potato = document.getElementById('potato').value;
    price_of_oil = 15;
    price_of_bread = 2;
    price_of_juice = 5;
    price_of_beer = 5;
    price_of_fish = 20;
    price_of_tomato = 3;
    price_of_potato = 7;
    total_sum = quantity_of_oil * price_of_oil + quantity_of_bread * price_of_bread + quantity_of_juice * price_of_juice + quantity_of_beer * price_of_beer + quantity_of_fish * price_of_fish + quantity_of_tomato * price_of_tomato + quantity_of_potato * price_of_potato;

    if(quantity_of_bread == ""){
        confirm("Are you sure you don't need any bread?");
        document.getElementById('area').innerHTML = `Total: ${total_sum} $`;
    } else if(quantity_of_potato == ""){
        confirm("Are you sure you don't need any potato?");
        document.getElementById('area').innerHTML = `Total: ${total_sum} $`;
    } else {
        document.getElementById('area').innerHTML = `Total: ${total_sum} $`;
    }
    }