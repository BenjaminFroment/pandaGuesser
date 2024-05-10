/**
 * Fichier de cours pour apprendre Vue.js.
 * Ce fichier contient un exemple de jeu simple de devinette de 
 * mots en utilisant Vue.js.
 * Les utilisateurs doivent deviner la traduction française ou 
 * anglaise du mot affiché.
 * Le fichier comprend la définition des données, le rendu des
 * éléments de l'interface utilisateur.
 * et la gestion des interactions utilisateur telles que la saisie
 * de la réponse et l'affichage du feedback.
 *
 * Date: 24 avril 2024
 * Auteur: @helyaTam 
 */ 
  
// Importation de la fonction createApp depuis le CDN Vue.js 3
import { createApp } from 
"https://unpkg.com/vue@3/dist/vue.esm-browser.js";




// Définir les options de notre application Vue.js
const pandaGuesserApp = {
   // Définir les données de l'application 
   data() {
       // Initialiser les variables de données
       return {
           // // Mots à deviner
           // wordA: "bonjour",
           // wordB: "hello",
           // // Réponse saisie par l'utilisateur
           // answer: "",
           // // Indicateur de correction de la réponse
           // correct: null,
           // // Indique si le feedback doit être affiché
           // showFeedBack: false,
           // // Exemple de tableau | array
           // frenchWords : ["bonjour", "au revoir", "un", "deux"],
           // // Exemple d'objet | objet
           // word: { a: "bonjour", b: "hello" },
           // // Exemple d'un tableau d'objets | array of objects
           words: [
               {
               wordA: "bonjour",
               wordB: "hello",
               hint:"salutations",
               answer:"",
               correct:false
               },
               {
               wordA: "un",
               wordB: "one",
               hint:"chiffre",
               answer:"",
               correct:false
               },
               {
               wordA: "gris",
               wordB: "grey",
               hint:"couleur",
               answer:"",
               correct:false
               },
               {
               wordA: "dormir",
               wordB: "sleep",
               hint:"se reposer",
               answer:"",
               correct:false
               },
           ],
           correctCount: 0,
           completed: false,
           // imageAlt : null,
           // circleType : null,
           // hasError: false,
           // inputBackgroundColor : "white",
           // showHint: false,
           // firstName: "",
           // lastName: "",
           // watchFullName: "",
           // // categories: ["greetings", "verbs"],
           // // level: "easy",
           // // textContent: "",
       };
   },

   computed : {
       shuffledWords () {
           return this.words.sort(() =>0.5 - Math.random());
       },
       wordCount() {
           return this.words.length;
       },
   },

   watch : {
       correctCount() {
           this.completed = this.correctCount ==  this.wordCount;
       },

   },
   //-------- juste après le bloc data(){},
   // Définir les méthodes de l'application
   methods: {
       
       // getFullName() {
       //     return this.firstName + " " + this.lastName;
       // },
       // Méthode pour vérifier la réponse de l'utilisateur
       checkAnswer(word) {
           word.correct = word.wordB == word.answer;
           if (word.correct) {
               this.correctCount++;
               
           }
           // if (this.answer == "") {
           //     this.hasError = true;
           //     this.inputBackgroundColor = "lightsalmon";
           //     return;
           // }
           // this.hasError = false;
           // this.inputBackgroundColor = "white";
           // // Comparer la réponse de l'utilisateur avec le motB
           // this.correct = this.answer == this.wordB;
           // if (this.correct){
           //     this.circleType = "correct"; 
           //     this.imageAlt = "image de confirmation de bonne réponse"; 
           // } else {
           //     this.circleType = "incorrect"; 
           //     this.imageAlt = "image de confirmation de mauvaise réponse"; 
           // }  
           // // Afficher le feedback après la vérification de la réponse
           // this.showFeedBack = true;
       },
       reset() {

       },
   },
};

// Créer une nouvelle instance Vue en utilisant nos options et la
// monter sur l'élément HTML avec l'ID "app"
const app = createApp(pandaGuesserApp).mount("#app");