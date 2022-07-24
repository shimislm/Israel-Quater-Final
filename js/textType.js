
// function type() {
//     if (charIndex < textArray[textArrayIndex].length) {
//       if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//       typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//       charIndex++;
//       setTimeout(type, typingDelay);
//     } 
//     else {
//       cursorSpan.classList.remove("typing");
//         setTimeout(erase, newTextDelay);
//     }
//   }
  
//   function erase() {
//       if (charIndex > 0) {
//       if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//       typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
//       charIndex--;
//       setTimeout(erase, erasingDelay);
//     } 
//     else {
//       cursorSpan.classList.remove("typing");
//       textArrayIndex++;
//       if(textArrayIndex>=textArray.length) textArrayIndex=0;
//       setTimeout(type, typingDelay + 1000);
//     }
//   }

//   document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
//     if(textArray.length) setTimeout(type, newTextDelay + 250);
//   });
//   const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

// const textArray = ["I want to show you the buty of ISRAEL", "Lets take a good look on our butifful cities", "Remember to follow us!", "Hope to see you soon"];
// const typingDelay = 70;
// const erasingDelay = 100;
// const newTextDelay = 2000; // Delay between current and next text
// let textArrayIndex = 0;
// let charIndex = 0;

// function openWin() {
//   myWindow = window.open("", "myWindow", "width=200,height=100");   // Opens a new window
// }

// function closeWin() {
//   myWindow.close();   // Closes the new window
// }

function animate_string(id) 
{
    let element = document.getElementById(id);
    let textNode = element.childNodes[0]; // assuming no other children
    let text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}