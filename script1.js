
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
text ="Voici une liste non exhaustive des métiers que j'ai exercé depuis mon existence: vendeur pret à porter sportif, manutentionnaire, assistant e-commerce, community manager, chargé clientele logistique, assistant chef de projet et prochainement...developpeur web! ";
break;
case "1":
text="J'ai validé mon master 1 Administration et gestion des entreprises en 2014, j'ai commencé apprendre en autodidacte le HTML, CSS (merci youtube!). J'ai entamé ensuite une formation de 6 mois chez O'clock : integration web + API Rest + data et Git, 1 mois de specialisation DATA et 1 mois de projet en equipe";
break;
case "2":
text = "Je suis un autodidacte issue de la génération Y, ayant une bonne plasticité neuronale j'aime apprendre de nouvelles choses et j'aime les projets experimentaux ";
break;
case "3":
text = "Je parle et sait lire et écrire en anglais, je maitrise le pack office, Photoshop est mon ami. Je suis à l'aise dans la gestion de projet, je sais faire preuve de creativité, j'aime bien analyser les choses et livrer des preconisations (fan de benchmark et powerpoint), le travail en équipe ne me fait pas peur. "
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

