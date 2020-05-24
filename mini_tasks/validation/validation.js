$(function() {
  $(".btn-submit").on("click", validate);
 
  // Validate email
  function validateName(text) {                 
    var re = /^[A-Za-z]+$/;
    return re.test(String(text));                        
  }
  
  // send form
  function sendForm() {
    $(".error").text("Form sending").fadeIn();
  }
 
  // validate email and send form after success validation
  function validate() {
    var text = $(".text").val();
    var $error = $(".error");
    $error.text("");
 
    if (validateName(text)) {
      $error.fadeOut();
      sendForm();
    } else {
      $error.fadeIn();
      $error.text(text + " is not valid");
    }
    return false;
  }
});


/*
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabetcharactersonly');
uname.focus();
return false;
}
}
*/













/*
$(function() {
  $(".btn-submit").on("click", validate);
 
  // Validate email
  function validateEmail(text) {
    var re = /[^-0-9]/;                                   // /[a-z].*;  плюс экранирование g для поиска всех совпадений
    return re.test(String(text));
  }
   
  // send form
  function sendForm() {
    $(".error").text("Form sending").fadeIn();
  }
 
  // validate email and send form after success validation
  function validate() {
    var text = $(".text").val();
    var $error = $(".error");
    $error.text("");
 
    if (validateEmail(text)) {
      $error.fadeOut();
      sendForm();
    } else {
      $error.fadeIn();
      $error.text(text + " is not valid");
    }
    return false;
  }
});
*/
/*
 <form class="form" action="javascript:void(0)">
            <div class="form-row">
              <div class="form-col">
                <input type="text" class="text" placeholder="Name">
                <span class="error"></span>
              </div>
            </div>
            <button type="submit" class="btn-submit">Get Discount</button>
          </form>
*/





/* работает для цирр
<form class="trial">
<input id="id1" type="number" min="100" max="300" required>
<button onclick="myFunction()">OK</button>

<p id="demo"></p>

<script>
function myFunction() {
var inpObj = document.getElementById("id1");
if (!inpObj.checkValidity()) {
document.getElementById("demo").innerHTML = inpObj.validationMessage;
}
}
</script>
</form>
*/


// валидация без js https://habr.com/ru/post/332804/
//https://developer.mozilla.org/ru/docs/Learn/HTML/Forms/%D0%92%D0%B0%D0%BB%D0%B8%D0%B4%D0%B0%D1%86%D0%B8%D1%8F_%D1%84%D0%BE%D1%80%D0%BC%D1%8B
// https://monsterlessons.com/project/lessons/validaciya-formy-v-javascript