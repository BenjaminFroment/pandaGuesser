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
            shuffledWords: [],
            correctCount: 0,
            completed: false,
        };
    },

    mounted(){
        this.shuffledWords = this.words.slice().sort(() =>0.5 - Math.random());
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
        // Méthode pour vérifier la réponse de l'utilisateur
        validateAnswer(word) {
            word.correct = word.wordB == word.answer;
            if (word.correct) {
                this.correctCount++;
            }
        },
        closeNotification() {
            this.completed = false;
        },
        restartGame() {
            this.words.forEach((word) => {
                word.answer = "";
                word.correct = false;
            });
            this.correctCount = 0;
            this.completed = false;
            this.shuffledWords = this.words.slice().sort(() =>0.5 - Math.random());
        },
    },
};

// Créer une nouvelle instance Vue en utilisant nos options et la
// monter sur l'élément HTML avec l'ID "app"
const app = createApp(pandaGuesserApp).mount("#app");