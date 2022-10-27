
tippy('#getImage', {
    content: 'Salut! tu peux cliquer sur moi!',

  });

 let typed2 = new Typed(".auto-input2", {
  strings: [ " fait du HTML, CSS ", " adore le Javascript", "connait Wordpress" , "aime bien Linux" ," se sert de Bootstrap","va bientot s'acheter un Raspberry" ,"utilise Node JS + Express", " compte apprendre Python (ツ) ", " connait SQL et PostgreSQL "],
  typeSpeed: 50,
  backSpeed: 80,
  loop: true
});



function afficherlebail(){
let text;

const selection = document.getElementById("darkselect").value;

switch (selection){
case "0":
text ="Je suis un développeur informatique qui a démarré l'apprentissage du code informatique en autodidacte sur Youtube, à présent je suis développeur web front-end et back-end";
break;
case "1":
text="J'aime créer, rever, apprendre et je suis tres curieux, je me suis donc naturellement tourné vers le developpement informatique qui permet de faire vivre virtuellement mon imaginaire";
break;
case "2":
text = "La trilogie du seigneur des Anneaux, Matrix, Pulp Fiction, La fureur du Dragon, Terminator II, Starship Troopers, Avengers: Infinity war, et tant d'autres.. ";
break;
case "3":
text = "Tout d'abord Les fourmis de Bernard Werber, ensuite..Psychologie des Foules de Gustave Lebon, Propaganda d'Edwards Bernays,  Bel-Ami de Maupassant et... A rebours de Joris Karl Huysmans"
break;
default:
text = "Mauvais choix! Recommence!";





}
document.getElementById("talk").innerHTML = text;

};



function imagefun() {
          const body = document.querySelector('body');
    

     var salutation = document.getElementById('talk');
        var Image_Id = document.getElementById('getImage');
        if (Image_Id.src.match("IMGTEST.png")) {
            Image_Id.src = "IMGTEST1.png";
            talk.innerHTML= 'Ma page utilise des cookies pour faire des statistiques sur le nombre de visite, veuillez vous rendre sur la pokeball en bas pour pour plus avoir des infos sur la politique de confidentialité' ; 
        }
        else if (Image_Id.src.match("IMGTEST1.png")) {
            Image_Id.src = "IMGTEST2.png";
            talk.innerHTML= 'Cessez de cliquer sur cette image! Veuillez faire un tour sur mon portfolio svp  !'      ;
        }
     else
     
     {
            Image_Id.src = "trex.png";
            talk.innerHTML= 'Bravo vous venez de faire planter la page, je vais vous rediriger sur une page plus utile!'      ;
            document.body.style.backgroundImage = "url('trex.png')";
         setTimeout(myTimeout2, 4000) ;

        }
     
    }   

 function myTimeout2() {
     

window.location.href = "https://cedricscbjj.github.io/cv2023/cv.html";
 }


  
  function addZero(i) {
if (i < 10) {i = "0" + i}
return i;
}



const d = new Date();
let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
let hour = h + ":" + m ;
document.getElementById("talk").innerHTML = "Hello! Il est actuellement" + " " + hour + " "+ "et vous etes sur ma page personnel! Mon CV version papier se trouve dans la partie Curriculum Vitae, vous pouvez aller le télécharger! Ma page utilise des cookies, cliquez sur la pokéball en bas pour plus d'informations!";

