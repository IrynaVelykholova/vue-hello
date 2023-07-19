"use script"
//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Vue.createApp({
    data() {
        return {
            messaggio: "Ciao, sono un messaggio stampato con vue js!"
        }
    }
}).mount("#app")