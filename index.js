Vue.createApp({
    data() {
        return {
            Id: 0,
            Brand: "",
            Height: 0,
            Width: 0,
            newId: 0,
            newBrand: "",
            newHeight: 0,
            newWidth: 0,
            newWebcam: {},
            toDelete: 0,
            Webcam1: {Id: 1, Brand: "Logitech", Height: 1080, Width: 1920},
            Webcam2: {Id: 2, Brand: "Logitech", Height: 2160, Width: 3840},
            Webcam3: {Id: 3, Brand: "Paracon", Height: 1080, Width: 1920},
            Webcam4: {Id: 4, Brand: "Sandberg", Height: 2160, Width: 3840},
            Webcam5: {Id: 5, Brand: "ZealandCams", Height: 1080, Width: 1440},
            webcams: [{Id: 1, Brand: "Logitech", Height: 1080, Width: 1920}, {Id: 2, Brand: "Logitech", Height: 2160, Width: 3840}, {Id: 3, Brand: "Paracon", Height: 1080, Width: 1920}, {Id: 4, Brand: "Sandberg", Height: 2160, Width: 3840}, {Id: 5, Brand: "ZealandCams", Height: 1080, Width: 1440},]
        }
    },
    methods: {
        addNew : function() {
            this.newWebcam = {Id: this.newId, Brand: this.newBrand, Height: this.newHeight, Width: this.newWidth}
            this.webcams.push(this.newWebcam)
        },
        deleteCam : function() {
            for (let i = 0; i < this.webcams.length; i++) {
                if (this.webcams[i].Id == this.toDelete) {
                    this.webcams.splice(i, 1)
                    break;
                }
            }
        }
    },
}).mount("#app")
