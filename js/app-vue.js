new Vue({
    el: '#app',

    data: {
        message: "Hello Vue!",
        classiTitolo: "text-success display-1",
        immagine: "https://picsum.photos/id/3/300/300",

    },
    methods: {

        changeImage() {
            const newImgId = Math.floor(Math.random() * 100) + 1;

            this.immagine = `https://picsum.photos/id/${newImgId}/300/300`;
        },
        
        saluta: function() {
            console.log("hai cliccato sul pulsante saluta")

            console.log(this.classiTitolo);

            this.classiTitolo = "text-danger";
        }
    }

});