"use script"
//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Vue.createApp({
    data() {
        return {
            messaggio: "Ciao, sono un messaggio stampato con vue js!",
            titleClass: "text-danger" + " " + "text-blue",
            titleId: "titolo",
            img: "poggers.png.webp",
        }
    },
    methods: {
        miaFunzione() {
            console.log("Ciaone");
            console.log(this.messaggio);
            this.messaggio =  this.messaggio + " " + "BENVENUTO";
            this.cambiaColore("primary");
        },
        cambiaColore(colore) {
            let nuovoColore = "danger";
            if (colore) {
                nuovoColore = colore;
            }
            this.titleClass = "text-" + nuovoColore;
        }
    }
}).mount("#app")