AFRAME.registerComponent('markerhandler',{
    init: async function(){
        this.el.addEventListener('markerFound',()=>{
            console.log("Marker is found")
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("Marker is lost")
            this.handleMarkerLost()
        })
    },
    handleMarkerFound:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"

        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")

        ratingButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Rate The Dish",
                text:"Work in progress"
            })
        })

        orderButton.addEventListener("click",function(){
            swal({
                icon:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fissuing-an-order-icon-outline-style-vector-27366593&psig=AOvVaw0Ub5TGwyO2zz6PRJjkI6My&ust=1649589841607000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNCvtpbvhvcCFQAAAAAdAAAAABAD",
                title:"thanks for your orders",
                text:"Your order will be placed"
            })
        })
    },
    handleMarkerLost:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    },
})