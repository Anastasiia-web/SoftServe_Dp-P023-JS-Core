
function sound(ev) {
    var audio = new Audio(); // Создаём новый элемент Audio ??
    audio.src = 'Fujiya_amp'; 
    audio.autoplay = true; 
}

document.querySelector('#music_on').addEventListener('click', sound);


// работающее, но с ошибкой если щелкнуть на фото
const todosPhotos = [ 
    {
        text : 'Walter', 
        id : 1,
        photo : `<img src="style/images/Walter.jpg" width="100" height="135">`
    },
    {   text : 'Jesse', 
        id : 2,
        photo : `<img src="style/images/Jesse.jpg" width="100" height="135">`
    },
    {
        text : 'Skyler', 
        id : 3,
        photo : `<img src="style/images/Skyler.jpg" width="100" height="135">`
    }
    ]

function render(data){
    const list = document.querySelector('.photos');
    list.innerHTML = data.map(todo => `<div style="padding: 30px;"> 
    <li> ${todo.photo} </li> 
    <li style="padding-left: 27px; cursor: pointer"> ${todo.text} </li> 
    </div>`).join('');
}

function onPhotoClick(ev){
    const textName = ev.target.parentElement.innerText;
    const str = textName.replace(/\s+/g, '');
    const url = `https://www.breakingbadapi.com/api/characters?name=${str}`;
        
    fetch(url).then(req => {
        console.log(req);
        return req.json();
    }).then(data => renderHeroPhoto(data));
}

    function renderHeroPhoto(characters){
        const gInfo = document.querySelector('.general-info');
        const p = document.querySelector('#portrait');
        const strSts = document.querySelector('#infoStatus');

        const heroName = characters[0].name;
        const heroPortrait = characters[0].img;
        const heroOccupation = characters[0].occupation;
        const heroNickname = characters[0].nickname;
        const heroStatus = characters[0].status;

        const strInfo = `
        <p>  ${heroName} </p>
        <p>  Occupation: ${heroOccupation} </p>
        <p>  Nickname: ${heroNickname} </p>
        `
        
        gInfo.innerHTML = strInfo;
        gInfo.style.backgroundColor = "grey";
        strSts.innerHTML = heroStatus;

        p.style.backgroundImage = `url(${heroPortrait})`;
        
        if(heroStatus == `?`) {
            strSts.style.color = 'orange';
            strSts.style.fontSize = '15px';
            } else if(heroStatus == `Presumed dead`) {
                strSts.style.color = 'red';
                strSts.style.fontSize = '20px';
                strSts.style.fontWeight = 'bold';
            } else if(heroStatus == `Alive`) {
                strSts.style.color = 'yellow';
                strSts.style.fontSize = '15px';
            } else if(heroStatus == `Deceased`) {
                strSts.style.color = 'black';
                strSts.style.fontSize = '20px';
                strSts.style.fontWeight = 'bold';
            }
    }

document.querySelector('.photos').addEventListener('click', onPhotoClick);

render(todosPhotos);


// РАБОТАЮЩЕЕ выпадающий список)
function getCharacterDrop() {

    let selectedName = document.querySelector('#drop-down-list-names').value;
    
    const heroNameFromDropDown = selectedName;

        const url = `https://www.breakingbadapi.com/api/characters?name=${heroNameFromDropDown}`;
        
        fetch(url).then(req => {
            console.log(req);
            return req.json();
        }).then(data => renderHeroDrop(data));
    }
    
        function renderHeroDrop(characters){
            const gInfo = document.querySelector('.general-info');
            const p = document.querySelector('#portrait');
            const strSts = document.querySelector('#infoStatus');

            const heroName = characters[0].name;
            const heroPortrait = characters[0].img;
            const heroOccupation = characters[0].occupation;
            const heroNickname = characters[0].nickname;
            const heroStatus = characters[0].status;

            const strInfo = `
            <p>  ${heroName} </p>
            <p>  Occupation: ${heroOccupation} </p>
            <p>  Nickname: ${heroNickname} </p>
            `
        
            gInfo.innerHTML = strInfo;
            gInfo.style.backgroundColor = "grey";
            strSts.innerHTML = heroStatus;

            p.style.backgroundImage = `url(${heroPortrait})`;
        
            if(heroStatus == `?`) {
                strSts.style.color = 'orange';
                strSts.style.fontSize = '15px';
            } else if(heroStatus == `Presumed dead`) {
                strSts.style.color = 'red';
                strSts.style.fontSize = '20px';
                strSts.style.fontWeight = 'bold';
            } else if(heroStatus == `Alive`) {
                strSts.style.color = 'yellow';
                strSts.style.fontSize = '15px';
            } else if(heroStatus == `Deceased`) {
                strSts.style.color = 'black';
                strSts.style.fontSize = '20px';
                strSts.style.fontWeight = 'bold';
            }
    }

document.querySelector('#drop-down-list-names').addEventListener('change', getCharacterDrop);




/*
// РАБОТАЮЩЕЕ выпадающий список)
function getCharacterDrop() {

    let selectedName = document.querySelector('#drop-down-list-names').value;
    
    const heroNameFromDropDown = selectedName;

        const url = `https://www.breakingbadapi.com/api/characters?name=${heroNameFromDropDown}`;
        
        fetch(url).then(req => {
            console.log(req);
            return req.json();
        }).then(data => renderHeroDrop(data));
    }
    
        function renderHeroDrop(characters){
            const a = document.querySelector('#info');
            const p = document.querySelector('#portrait');
            const u = document.querySelector('#info2');
            const y = document.querySelector('#info3');
            const r = document.querySelector('#info4');

            const heroName = characters[0].name;
            const heroPortrait = characters[0].img;
            const heroOccupation = characters[0].occupation;
            const heroNickname = characters[0].nickname;
            const heroStatus = characters[0].status;
            
            a.innerHTML = heroName;
            u.innerHTML = `Occupation: ${heroOccupation}`;
            y.innerHTML = `Nickname: ${heroNickname}`;
            r.innerHTML = heroStatus;
            p.style.backgroundImage = `url(${heroPortrait})`;
            if(heroStatus == `?`) {
                r.style.color = 'orange';
                r.style.fontSize = '15px';
                } else if(heroStatus == `Presumed dead`) {
                    r.style.color = 'red';
                    r.style.fontSize = '15px';
                } else if(heroStatus == `Alive`) {
                    r.style.color = 'yellow';
                    r.style.fontSize = '15px';
                } else if(heroStatus == `Deceased`) {
                    r.style.color = 'black';
                    r.style.fontSize = '25px';
                    r.style.fontWeight = 'bold';
                }
        }

document.querySelector('#drop-down-list-names').addEventListener('change', getCharacterDrop);
        
*/



/* // работающее на подпись под фото и фото, но с ошибкой
// работающее но с ошибкой если щелкнуть на имя под фото
const todos = [ 
    {
        text : 'Walter', 
        id : 1,
        photo : `<img src="style/images/Walter.jpg" width="100" height="135">`
    },
    {   text : 'Jesse', 
        id : 2,
        photo : `<img src="style/images/Jesse.jpg" width="100" height="135">`
    },
    {
        text : 'Skyler', 
        id : 3,
        photo : `<img src="style/images/Skyler.jpg" width="100" height="135">`
    }
    ]

function render(data){
    const list = document.querySelector('.photos');
    list.innerHTML = data.map(todo => `<div style="padding: 30px;"> <li> ${todo.photo} </li> <li style="padding: 25px; cursor: pointer"> ${todo.text} </li> </div>`).join('');
}

function onPhotoClick(ev){
    const textName = ev.target.parentElement.innerText;
    const str = textName.replace(/\s+/g, '');
    const url = `https://www.breakingbadapi.com/api/characters?name=${str}`;
        
    fetch(url).then(req => {
        console.log(req);
        return req.json();
    }).then(data => renderHeroPhoto(data));
}

    function renderHeroPhoto(characters){
        const a = document.querySelector('#info');
        const p = document.querySelector('#portrait')
        const u = document.querySelector('#info2')
        const y = document.querySelector('#info3')
        const r = document.querySelector('#info4')

        const heroName = characters[0].name;
        const heroPortrait = characters[0].img;
        const heroOccupation = characters[0].occupation;
        const heroNickname = characters[0].nickname;
        const heroStatus = characters[0].status;
        
        a.innerHTML = heroName;
        u.innerHTML = `Occupation: ${heroOccupation}`;
        y.innerHTML = `Nickname: ${heroNickname}`;
        r.innerHTML = heroStatus;
        p.style.backgroundImage = `url(${heroPortrait})`;
        if(heroStatus == `?`) {
            r.style.color = 'orange';
            r.style.fontSize = '15px';
            } else if(heroStatus == `Presumed dead`) {
                r.style.color = 'red';
                r.style.fontSize = '15px';
            } else if(heroStatus == `Alive`) {
                r.style.color = 'yellow';
                r.style.fontSize = '15px';
            } else if(heroStatus == `Deceased`) {
                r.style.color = 'black';
                r.style.fontSize = '25px';
                r.style.fontWeight = 'bold';
            }
    }

document.querySelector('.photos').addEventListener('click', onPhotoClick);

render(todos);
*/
/* на случай если не пойдет) работающее
function render(data){
    const list = document.querySelector('.photos');
    list.innerHTML = data.map(todo => `<li> ${todo.photo} ${todo.text} </li>`).join('');
}
*/


/* // РАБОТАЮЩЕЕ ПОЛУЧАЕМ ИМЯ ИЗ ОБЪЕКТА МАССИВА ЧЕРЕЗ ПОДПИСЬ ПОД ФОТО
const todos = [ 
    {
        text : 'Walter', 
        isDone : false,
        id : 1,
        photo : `<img src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg" width="50" height="50">`
    },
    {   text : 'Jesse', 
        isDone : true,
        id : 2,
        photo : `<img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg" width="50" height="50">`
    },
    {
        text : 'Skyler', 
        isDone : true,
        id : 3,
        photo : `<img src="https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg" width="50" height="50">`
    }
    ]

function render(data){
    const list = document.querySelector('.photos');
    list.innerHTML = data.map(todo => `<li> ${todo.photo} ${todo.text} </li>`).join('');
}

function onTodoClick(ev){
    const textName = ev.target.innerText;
    console.log(textName);
}

document.querySelector('.photos').addEventListener('click', onTodoClick);

render(todos);
*/


/* // работающая часть для проверки


function onPhotoClick(ev){
    const textName = ev.target.parentElement.innerText;
    const str = textName.replace(/\s+/g, '');
    const url = `https://www.breakingbadapi.com/api/characters?name=${str}`;
        
    fetch(url).then(req => {
        console.log(req);
        return req.json();
    }).then(data => renderHeroPhoto(data));
}

    function renderHeroPhoto(characters){
console.log(characters);
    }
    document.querySelector('.photos').addEventListener('click', onPhotoClick);
    */














/*
function getPollutionRate() {
    const url = 'https://www.iqair.com/air-pollution-data-api.airvisual.com/v2/states?country=USA&key={{dada1e79-ce46-45d2-9600-42150f1c2190}}';

    fetch(url, {
        mode: 'no-cors'
    }).then(req => {
        console.log(req);
        return req.json();
    }).then(data => console.log(data));
}

getPollutionRate();
*/
/*
function getSmth() {
    const url = 'https://randomuser.me/api/';

    fetch(url).then(req => {
        console.log(req);
        return req.json();
    }).then(data => console.log(data));
}

getSmth();
*/
/*
function getSmth() {
    const url = 'https://api.edamam.com/api/nutrition-details?app_id=${0b052f8a}&app_key=${3557cbed9d83ff8c181d76afc5960dbc}';

    fetch(url, {
        mode: 'no-cors'
    }).then(req => {
        console.log(req);
        return req.json();
    }).then(data => console.log(data));
}

getSmth();
// Nutrition Wizard
*/
/*
function getSmth() {
    const url = 'https://www.breakingbadapi.com/api/quote/random';

    fetch(url).then(req => {
        console.log(req);
        return req.json();
    }).then(data => console.log(data));
}

getSmth();
*/
/*
 //РАБОТАЮЩЕЕ!!!
function getCharacter() {
const heroName = document.querySelector('.who-is-hero');
const heroNameValue = heroName.value;
    const url = `https://www.breakingbadapi.com/api/characters?name=${heroNameValue}`;
    
    fetch(url).then(req => {
        console.log(req);
        return req.json();
    }).then(data => renderHero(data));
}

    function renderHero(characters){
        const a = document.querySelector('#info');
        const b = document.querySelector('.status-info');
    
        const heroName = characters[0].name;
        const heroStatus = characters[0].status;

        console.log(characters);
        console.log(characters[0].char_id);
        a.innerHTML = heroName;
        b.innerHTML = heroStatus;
        if(heroStatus == `?`) {
        b.style.color = 'red';
        } else if(heroStatus == `Presumed dead`) {
            b.style.color = 'blue';
        } else if(heroStatus == `Alive`) {
            b.style.color = 'yellow';
        } else if(heroStatus == `Deceased`) {
            b.style.color = 'black';
        }
    }


document.querySelector('.search').addEventListener('click', getCharacter);
*/
/* работающее
document.querySelector('.hero-name2').addEventListener('click', getName);
document.querySelector('.hero-nameb').addEventListener('click', getName);

function getName() {
    const a = document.querySelector('.hero-name2');
    const getNameFrom = a.innerHTML;
    const Na = getNameFrom;
   
    const url = `https://www.breakingbadapi.com/api/characters?name=${Na}`;
    
    fetch(url).then(req => {
        console.log(req);
        return req.json();
    }).then(data => renderHero2(data));
}

    function renderHero2(characters){
        const a = document.querySelector('#info')
        const heroName = characters[0].name;

        console.log(characters);
        console.log(characters[0].char_id);
        a.innerHTML = heroName;
       
}
*/
/*
/// РАБОТАЮЩЕЕ выпадающий список)
function getCharacterDrop() {

    let selectedName = document.querySelector('#drop-down-list-names').value;
    
    const heroNameFromDropDown = selectedName;
    console.log(heroNameFromDropDown);
        const url = `https://www.breakingbadapi.com/api/characters?name=${heroNameFromDropDown}`;
        
        fetch(url).then(req => {
            console.log(req);
            return req.json();
        }).then(data => renderHeroDrop(data));
    }
    
        function renderHeroDrop(characters){
            const a = document.querySelector('#info');
            const p = document.querySelector('#portrait')
            const u = document.querySelector('#info2')
            const y = document.querySelector('#info3')
            const r = document.querySelector('#info4')

            const heroName = characters[0].name;
            const heroPortrait = characters[0].img;
            const heroOccupation = characters[0].occupation;
            const heroNickname = characters[0].nickname;
            const heroStatus = characters[0].status;
            
            console.log(characters);
            a.innerHTML = heroName;
            u.innerHTML = heroOccupation;
            y.innerHTML = heroNickname;
            r.innerHTML = heroStatus;
            p.style.backgroundImage = `url(${heroPortrait})`;
            if(heroStatus == `?`) {
                r.style.color = 'orange';
                } else if(heroStatus == `Presumed dead`) {
                    r.style.color = 'red';
                } else if(heroStatus == `Alive`) {
                    r.style.color = 'yellow';
                } else if(heroStatus == `Deceased`) {
                    r.style.color = 'black';
                    r.style.fontSize = '25px';
                    r.style.fontWeight = 'bold';
                }
        }

        document.querySelector('#drop-down-list-names').addEventListener('change', getCharacterDrop);
        */


/*
document.querySelector('.photos').addEventListener('click', getNameFromPhoto); //работает на выдачу всего array


function getNameFromPhoto() {
// пока не получается для фото отдельного
const a = document.querySelector('.photos');    // для одного .Walter-photo
    const getNameFromPh = a.id;
    console.log(getNameFromPh);
    const NaP = getNameFromPh;
    console.log(NaP);
    const url = `https://www.breakingbadapi.com/api/characters?name=${NaP}`;
    
    fetch(url).then(req => {
        console.log(req);
        return req.json();
    }).then(data => renderHero3(data));
}

    function renderHero3(characters){
   
        const m = document.querySelector('#info')
        const heroNameFromP = characters[0].name;

        console.log(characters);
        console.log(characters[0].char_id);
        m.innerHTML = heroNameFromP;
    
}
*/



        /* // С бибилиотекой https://codepen.io/collection/XLebem/
//АНИМАЦИЯ С ГРИДАМИ  https://animejs.com/documentation/#gridStaggering   https://animejs.com/documentation/#morphing  
        anime.stagger(value, {grid: [rows, columns]})
        anime({
            targets: '.staggering-grid-demo .el',
            scale: [
              {value: .1, easing: 'easeOutSine', duration: 500},
              {value: 1, easing: 'easeInOutQuad', duration: 1200}
            ],
            delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
          });

*/

/*
function getSmth() {
    const url = 'https://www.breakingbadapi.com/api/quote/random';

    fetch(url).then(req => {
        console.log(req);
        return req.json();
    }).then(data => renderQuote(data));
}
*/

/* Выпадающий список из учебника
<select>
    <option value="hello">Hello World</option>
</select>
Эта опция имеет:

Индекс = 0
Значение = привет
Текст = Hello World
*/
/* работающее с выбором из списка
const h = function getNameChosen() {
    let selectedName = document.querySelector('#w').value;
    return selectedName;
}

//document.querySelector('#w').addEventListener('change', getNameChosen);
*/

/*
//работающее с полем ввода
function getCharacter() {
    const inpHero = document.querySelector('#who-is-hero');
    const a = document.querySelector('#info')
    const hero = inpHero.value;
    console.log(hero);
    a.innerHTML = hero;
    inpHero.value = '';
}
document.querySelector('#hero-name').addEventListener('click', getCharacter);
*/

/*
const ar = document.querySelector('.photos');    // для одного .Walter-photo

   let arr = Array.from(ar);
    console.log(arr);
    */

/* //фильтрация массива
   const studentsAge = ['Henry', 'Jane', 'Jesse'];
   const ableToDrink = studentsAge.filter( age => age == 'Jesse' );
   console.log(ableToDrink);
*/

/* //работа с массивом
   const studentsAge = ['Henry', 'Jane', 'Jesse'];
   const ableToDrink = studentsAge.filter( age => age == 'Henry' );
   console.log(ableToDrink);
   */
  /*// проба для каждого отдельно, но пока нет (:)
  function getCharacterDropPhoto() {

    let selectedPhoto = document.querySelector('.qw').id;
    console.log(selectedPhoto);
    
    const heroNameFromDropDownPhoto = selectedPhoto;
    console.log(heroNameFromDropDownPhoto);
        const url = `https://www.breakingbadapi.com/api/characters?name=${heroNameFromDropDownPhoto}`;
        
        fetch(url).then(req => {
            console.log(req);
            return req.json();
        }).then(data => renderHeroDropPhoto(data));
    }
    
        function renderHeroDropPhoto(characters){
            const a = document.querySelector('#info');
            const p = document.querySelector('#portrait')
            const u = document.querySelector('#info2')
            const y = document.querySelector('#info3')
            const r = document.querySelector('#info4')

            const heroName = characters[0].name;
            const heroPortrait = characters[0].img;
            const heroOccupation = characters[0].occupation;
            const heroNickname = characters[0].nickname;
            const heroStatus = characters[0].status;
            
            console.log(characters);
            a.innerHTML = heroName;
            u.innerHTML = heroOccupation;
            y.innerHTML = heroNickname;
            r.innerHTML = heroStatus;
            p.style.backgroundImage = `url(${heroPortrait})`;
            if(heroStatus == `?`) {
                r.style.color = 'orange';
                } else if(heroStatus == `Presumed dead`) {
                    r.style.color = 'red';
                } else if(heroStatus == `Alive`) {
                    r.style.color = 'yellow';
                } else if(heroStatus == `Deceased`) {
                    r.style.color = 'black';
                    r.style.fontSize = '25px';
                    r.style.fontWeight = 'bold';
                }
        }

        document.querySelector('.qw').addEventListener('click', getCharacterDropPhoto);
        */ 
       /*// работает полностью, но для одного с фото
       function getCharacterDropPhoto(ev) {
        let df = document.querySelector('.qw').id;
        const url = `https://www.breakingbadapi.com/api/characters?name=${df}`;
        
        fetch(url).then(req => {
            console.log(req);
            return req.json();
        }).then(data => renderHeroDropPhoto(data));
    }
    
        function renderHeroDropPhoto(characters){
            const a = document.querySelector('#info');
            const p = document.querySelector('#portrait')
            const u = document.querySelector('#info2')
            const y = document.querySelector('#info3')
            const r = document.querySelector('#info4')

            const heroName = characters[0].name;
            const heroPortrait = characters[0].img;
            const heroOccupation = characters[0].occupation;
            const heroNickname = characters[0].nickname;
            const heroStatus = characters[0].status;
            
            console.log(characters);
            a.innerHTML = heroName;
            u.innerHTML = heroOccupation;
            y.innerHTML = heroNickname;
            r.innerHTML = heroStatus;
            p.style.backgroundImage = `url(${heroPortrait})`;
            if(heroStatus == `?`) {
                r.style.color = 'orange';
                } else if(heroStatus == `Presumed dead`) {
                    r.style.color = 'red';
                } else if(heroStatus == `Alive`) {
                    r.style.color = 'yellow';
                } else if(heroStatus == `Deceased`) {
                    r.style.color = 'black';
                    r.style.fontSize = '25px';
                    r.style.fontWeight = 'bold';
                }
        }
       
       document.querySelector('.qw').addEventListener('click', getCharacterDropPhoto);
       */
      /*
              <div class="Walter-photo" id="Walter">
            <span class="status-info">a</span>
        </div>
        <div class="Domingo-photo" id="Domingo">Domingo</div>
        <div class="Gustavo-photo" id="Gustavo"></div>
        <div class="Hector-photo" id="Hector"></div>
        <div class="Henry-photo" id="Henry"></div>
        <div class="Jane-photo" id="Jane"></div>
        <div class="Jesse-photo" id="Jesse"></div>
        <div class="Laura-photo" id="Laura"></div>
        <div class="Marie-photo" id="Marie"></div>
        <div class="Mike-photo" id="Mike"></div>
        <div class="Mitte-Walter-White-Jr-photo" id="Mitte-Walter-White-Jr"></div>
        <div class="Sau-photo" id="Sau"></div>
        <div class="Skyler-photo" id="Skyler"></div>
        <div class="Todd-photo" id="Todd"></div>
        <div class="Tuco-photo" id="Tuco"></div>
        */
       /*
       
.Domingo-photo, .Gustavo-photo, .Hector-photo, .Henry-photo, .Jane-photo, .Jessy-photo, .Laura-photo, .Marie-photo, .Mike-photo, .Mitte-Walter-White-Jr-photo, .Sau-photo, .Skyler-photo, .Todd-photo, .Tuco-photo, .Walter-photo {
    width: 150px;
    height: 150px;
    background-size: 90% 90%;
    background-repeat: no-repeat;
}
.Walter-photo {
    background-image: url(images/Walter.jpg);
    display: flex;
    flex-direction: column;

    justify-content: space-evenly;
}
.Domingo-photo {
    background-image: url(images/Domingo.png);
}
.Gustavo-photo {
    background-image: url(images/Gustavo.jpg);
}
.Hector-photo {
    background-image: url(images/Hector.jpg);
}
.Henry-photo {
    background-image: url(images/Henry.jpg);
}
.Jane-photo {
    background-image: url(images/Jane.jpg);
}
.Jesse-photo {
    background-image: url(images/Jesse.jpg);
}
.Laura-photo {
    background-image: url(images/Laura.jpg);
}
.Marie-photo {
    background-image: url(images/Marie.jpg);
}
.Mike-photo {
    background-image: url(images/Mike.jpg);
}
.Mitte-Walter-White-Jr-photo {
    background-image: url(images/Mitte-Walter-White-Jr.jpg);
}
.Sau-photo {
    background-image: url(images/Sau.jpg);
}
.Skyler-photo {
    background-image: url(images/Skyler.jpg);
}
.Todd-photo {
    background-image: url(images/Todd.png);
}
.Tuco-photo {
    background-image: url(images/Tuco.jpg);
}
*/