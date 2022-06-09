new Vue({
    el: '#app',

    data: {
        message: "Hello Vue!",
        classiTitolo: "text-success display-1",
        immagine: "src=https://picsum.photos/200/300",

    },
    methods: {
        saluta: function() {
            console.log("hai cliccato sul pulsante saluta")

            console.log(this.classiTitolo);

            this.classiTitolo = "text-danger";
        }
    }

});