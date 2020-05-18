/*function change_page_color() {
    document.body.style.backgroundColor="lavender";
}
 
fifth_square.onclick = function() {
    document.body.style.backgroundColor = change_page_color();  
}
*/

/*функция изменения цвета выпадающего списка
document.querySelectorAll('#fifth_square').forEach(function(element){
    element.onclick = bgChange;
});

// let timer = 0;

// function bgChange(){
// 	let btnlist = document.querySelectorAll('.btn__list');
// 	timer++;
//     if(timer%2 == 0){
//     	for(let i = 0; i < btnlist.length; i++){
    		
//     	        btnlist.style.color = '#ffffff';
    		
//         }
//     }
//     else if(timer%2 != 0){
//         for(let i = 0; i < btnlist.length; i++){
    
//     	        btnlist[i].style.background = '#ffcc00';
            
//         }

//         let change = document.querySelectorAll('.btn__list p');
//   	    for(let i = 0; i < change.length; i++){
  	    	
// 		        change[i].style.color = '#ba0000';
	        
// 	    }
//     }

//     document.querySelector('.red').style.maxHeight = 'none';
// 	document.querySelector('.red').style.minHeight = '340px';
// }
