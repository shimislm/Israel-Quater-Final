window.onload = function(){
  declareEvents();
}


function declareEvents(){
  let id_form = document.querySelector("#id_form");
  // e - פרמטר שיכיל את כל המידע שקשור לאירוע
  id_form.addEventListener("submit",function(e){
    // מונע את הברירת מחדל של שיגור הטופס
    e.preventDefault();
    restoreMassages();
    let name_val = document.querySelector("#id_name").value;
    let phone_val = document.querySelector("#id_phone").value;
    let email_val = document.querySelector("#id_email").value;

    if(name_val.length < 3){
      document.querySelector("#id_spanName").innerHTML = "Invalid, name must be longer the 3 letters"
      return; 
    }
    else if(checkNumbers(name_val)){
      document.querySelector("#id_spanName").innerHTML = "Invalid, name can't contain digits"
      return; 
    }
    //טלפון חייב להכיל מספרים
    else if(!checkChar(phone_val)){
      document.querySelector("#id_spanPhone").innerHTML = "Invalid, phone must contain only digits"
      return; 
    }
    // טלפון חייב לפחות 5 תווים
    else if(phone_val.length < 9){
      document.querySelector("#id_spanPhone").innerHTML = "Invalid, phone must be at list 9 digits"
      return; 
    }
    // indexOf == -1 -> אומר שזה לא מצא את הביטוי
    else if(!checkEmail(email_val)){
              document.querySelector("#id_spanEmail").innerHTML = "Invalid, Email need to contain format must be example@example.com"
              return; 
    }
    submission(name_val);
    
  })

  function submission(name){
    alert(`Thank you ${name} your massge was sent, we will contact you soon!!!`);
    document.querySelector("#id_name").value = '';
    document.querySelector("#id_email").value = '';
    document.querySelector("#id_phone").value = '';
    document.querySelector("#id_text").value = '';
    restoreMassages()
    
  }
  function clearForm(){
    restoreMassages()
  }
}
function restoreMassages(){
  document.querySelector("#id_spanEmail").innerHTML = ""
  document.querySelector("#id_spanName").innerHTML = ""
  document.querySelector("#id_spanPhone").innerHTML = ""
}
// בודק האם קיימים מספרים בסטרינג
function checkNumbers(str){
  return /\d/.test(str);
}
function checkChar(str){
  return /^[0-9]+$/.test(str);
}
function checkEmail(mail){
  return mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
}