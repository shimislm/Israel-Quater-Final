let videoArr = ['27XfmRkTfOE??playlist=27XfmRkTfOE?','s1iax85nUGY??playlist=s1iax85nUGY?','jv4kbM2qJrM??playlist=jv4kbM2qJrM?'];

function bannerLeft() {
    let rnd = Math.floor(Math.random() * (videoArr.length-1));
    document.querySelector("#id_main").innerHTML += `    
<div id="id_bannerLeft"
data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
class="row col-12 col-md-2 flex-column bannerLeft justify-content-center p-0 m-auto">
<button onclick="hideBanLeft()" class=" center col-2 bg-transparent">
    <h3>X</h3>
</button>
<h4 class="m-2 p-2">Adv.</h4>
<div class="center">
<h5 class="m-2 p-2">Planing trip....get in now!!!!</h5>
</div>
<iframe muted class="col-12 m-0 center" width="800" height="315"
    sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
    src= "https://www.youtube.com/embed/${videoArr[rnd]}&controls=0&autoplay=1&mute=1&loop=1" title="
    YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <a href="https://www.tiuli.com/" target= "_blank"  class="center"><h2>More Info</h2></a>
    <img class="m-auto center" src="https://i.ibb.co/8NfKH0F/flag.png" width=100>
</div>
`
}
function bannerRight() {
    let rnd = Math.floor(Math.random() * 3);
    document.querySelector('#id_main').innerHTML += `    
    <div id="id_bannerRight" 
    data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
    class="row col-2 flex-column bannerRight justify-content-center p-0 m-auto">
    <button onclick="hideBanRight()" class="center col-1 bg-transparent">
        <h3>X</h3>
    </button>
    <h4 class="m-2 p-2">Adv.</h4>
    <div class="center">
    <h5 class="m-2 p-2">Planing trip....get in now!!!!</h5>
    </div>
    <iframe muted class="col-12 m-0" width="800" height="315"
        sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
        src= "https://www.youtube.com/embed/${videoArr[rnd]}&controls=0&autoplay=1&mute=1&loop=1" title="
        YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <a href="https://www.tiuli.com/" target= "_blank" class="center"><h2>More Info</h2></a>
        <img class="m-auto center" src="https://i.ibb.co/8NfKH0F/flag.png" width=100>
    </div>
    `
}
function hideBanLeft() {
    document.querySelector('#id_bannerLeft').style.display = 'none';
}
function hideBanRight() {
    document.querySelector('#id_bannerRight').style.display = 'none';
}