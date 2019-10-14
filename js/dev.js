 // progress bar  gestion du sommeil

let countersom = 60;
let intervalIdSom = null;

function bipsom() {
    let elem = document.getElementById("p2");
    if(countersom === 0) {
        finish();
        finishJeu();
        document.getElementById("ptordi").innerText += 1;
    } else {
        countersom--;
          if (countersom<40 && countersom>=20) {
              toast2();
              elem.classList.add('attention');
          } else if (countersom<20) {
              toast3();
              elem.classList.remove('attention');
              elem.classList.add('danger');
      } 
    }
}

function initialisesom() {
    countersom = 60;
    document.getElementById("p2").innerText = "Sommeil";
    document.getElementById("p2").classList.remove('attention');
    document.getElementById("p2").classList.remove('danger');
    document.getElementById("p2").classList.add('p2');
} 

// progress bar  gestion de la faim
let counterfaim = 40;
let intervalIdFaim = null;

function bipfaim() {
    let elem = document.getElementById("p3");
    if(counterfaim === 0) {
      finish();
        finishJeu();
        document.getElementById("ptordi").innerText += 1;
    } else {
          counterfaim--;
          if (counterfaim<27 && counterfaim>=14) {
              toast();
              elem.classList.add('attention');
          } else if (counterfaim<14) {
              toast1();
              elem.classList.remove('attention');
              elem.classList.add('danger');
      }
    }
}

function initialisefaim(){
    counterfaim = 40;
    document.getElementById("p3").innerText = "Faim";
    document.getElementById("p3").classList.remove('attention');
    document.getElementById("p3").classList.remove('danger');
    document.getElementById("p3").classList.add('p3');
}

// progress bar  gestion de l'hygiène
let counterlav = 30;
let intervalIdlav = null;

function biplav() {
    let elem = document.getElementById("p1");
    if(counterlav === 0) {
        finish();
        finishJeu();
        document.getElementById("ptordi").innerText += 1;
    } else {
        counterlav--;
          if (counterlav<20 && counterlav>=10) {
              elem.classList.add('attention');
              toast4();
        } else if (counterlav<10) {
              elem.classList.remove('attention');
              elem.classList.add('danger');
              toast5();

        }
    }
}
function initialiselav(){
    counterlav = 30;
    document.getElementById("p1").innerText = "Hygiène";
    document.getElementById("p1").classList.remove('attention');
    document.getElementById("p1").classList.remove('danger');
    document.getElementById("p1").classList.add('p1');

}    

//lancement du jeu
function start(){
    initialisesom();
    initialiselav();
    initialisefaim();
    initializeJeu();
    intervalIdJeu = setInterval(bipJeu, 1000);
    intervalIdSom = setInterval(bipsom, 1000);
    intervalIdFaim = setInterval(bipfaim, 1000);
    intervalIdlav = setInterval(biplav, 1000);
    document.getElementById("carrousel").classList.add('carrousel');
  } 

//fin du jeu
 //le jeu est fini lorsqu'un des compteurs gestion faim, sommeil ou hygiène n'a pas été réinitialisé à temps
 // dans ce cas l'ordi gagne
 // il est fini également au bout de 2minutes
 // dans ce cas le joueur gagne
function finish() {
    clearInterval(intervalIdSom);
    document.getElementById("p1").classList.add('danger');
    document.getElementById("p1").innerText = "TERMINE!";
    clearInterval(intervalIdFaim);
    document.getElementById("p2").classList.add('danger');
    document.getElementById("p2").innerHTML = "TERMINE!";
    clearInterval(intervalIdlav);
    document.getElementById("p3").classList.add('danger');
    document.getElementById("p3").innerHTML = "TERMINE!";
    document.getElementById("carrousel").classList.remove('carrousel');
}


// // les alertes
function toast() {
   let s1 = document.getElementById("snackbar");
    s1.className = "show";
  setTimeout(function(){ s1.className = s1.className.replace("show", ""); }, 3000);
 }

function toast1() {
      let s2 = document.getElementById("snackbar1");
     s2.className = "show";
     setTimeout(function(){ s2.className = s2.className.replace("show", ""); }, 3000);
}

function toast2() {
    let s3 = document.getElementById("snackbarsom");
    s3.className = "show";
    setTimeout(function(){ s3.className = s3.className.replace("show", ""); }, 3000);
}

function toast3() {
    let s4 = document.getElementById("snackbar1som");
    s4.className = "show";
     setTimeout(function(){ s4.className = s4.className.replace("show", ""); }, 3000);
}

function toast4() {
    let s5 = document.getElementById("snackbarlav");
    s5.className = "show";
     setTimeout(function(){ s5.className = s5.className.replace("show", ""); }, 3000);
 }

 function toast5() {
     let s6 = document.getElementById("snackbar1lav");
     s6.className = "show";
     setTimeout(function(){ s6.className = s6.className.replace("show", ""); }, 3000);
  }


 var counterJeu = 120;
 var intervalIdJeu = null;

 function finishJeu() {
     clearInterval(intervalIdJeu);
     document.getElementById("bipJeu").innerText = "TERMINE !";
     initializeJeu();
     finish();
 }

 function bipJeu() {
     if(counterJeu === 0) {
         finishJeu();
         document.getElementById("ptjoueur").innerText += 1;
     }
     else {
         counterJeu--;
         document.getElementById("bipJeu").innerText = counterJeu + " secondes";
     }
 }

 function initializeJeu() {
     counterJeu =120;
 }
