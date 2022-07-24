// own code 
//פןנקציה שמקבלת שני פרמטרים כפתור וקטע 
function extend(p, b){
    let btn,par;
    par = document.querySelector('#'+p);
    btn = document.querySelector('#'+b)
// בודק אם הגובה מוגדר 100%
      if ( par.style.height !='100%'){
// אם לא משנה אותו ל100%
        par.style.height ='100%'
// משנה את הכיתוב על הכפתור
        btn.innerHTML = 'Less...'
      }
// אחרת מחזיר אותו לגובה מקסימלי שהוגדר מראש
      else{
        par.style.height ='300px'
// משנה את הכיתוב על הכפתור
        btn.innerHTML = 'More...'
      }
    }