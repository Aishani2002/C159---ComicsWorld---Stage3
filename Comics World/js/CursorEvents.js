AFRAME.registerComponent("cursor-listener", {
  schema:{
    selectedItemID: {
      default:"",
      type:"string"
    }
  },

  init:function(){
    this.handleMouseClickEvents();
    this.handleMouseLeaveEvents();
  },

  update:function(){
    const fadeBackgroundEl = document.querySelector("fadeBackgroundEl");
    c= fadeBackgroundEl.children;
    if(c.length>0){
      var i;
      for(i=0; i<=c.length; i++){
        fadeBackgroundEl.removeChild(c[i])
      }
    }else{
      this.handleMouseClickEvents();
    }
  },

  handleMouseClickEvents:function(){
    this.el.addEventListener("mouseenter", ()=>{
    const id = this.el.getAttribute("id")
    const placesId = ["black-panther", "iron-man", "spider-man", "wonder-woman"]
    if(placesId.includes(id)){
      const placesContainer = document.querySelector("#places-container");
      placesContainer.setAttribute("cursor-listener", {
        selectedItemID:id
      })
    if(selectedItemID) {
      fadeBackgroundEl.setAttribute("visible", true);
      fadeBackgroundEl.setAttribute("info-banner", {
        itemID:selectedItemID
      });

      titleEl.setAttribute("visible", false);
      cursorEl.setAttribute("position", {x:0, y:0, z:-1})
      cursorEl.setAttribute("geometry", {
        radiusInner:0.03,
        radiusOuter:0.04
      })
    } else{
      fadeBackgroundEl.setAttribute("visible", false);
      titleEl.setAttribute("visible", true)
      cursorEl.setAttribute("position", {x:0, y:0, z:-3})
      cursorEl.setAttribute("geometry", {
        radiusInner:0.08,
        radiusOuter:0.12
      })
    }
    }
  })
  },

  handleMouseLeaveEvents:function(){
    this.el.addEventListener("mouseleave", ()=>{
      const {selectedItemID} = this.data
      if(selectedItemID){
        const el = document.querySelector(`#${selectedItemID}`)
        const id = el.getAttribute("id")
        if(id === selectedItemID){
          el.setAttribute("material",{
            color:"black",
            opacity:1
          })
        }
      }
    })
  }
})
