AFRAME.registerComponent("comics ", {
  init: function () {
    this.placesContainer = this.el;   
    this.createPoster();
  },

  showView: function() {
    const { selectedCard } = this.data;
    const skyEl = document.querySelector("#main-container");
    skyEl.setAttribute("material", {
      src: `./assets/descriptions/${selectedCard}/place-0.png`,
      color: "#fff"
    });
  },

  createPoster: function () {
    const thumbNailsRef = [
      {
        id: "black-panther",
        title: "Black Panther",
        url: "./assets/thumbnails/black-panther.jpg",
      },
      {
        id: "iron-man",
        title: "Iron Man",
        url: "./assets/thumbnails/iron-man.jpg",
      },

      {
        id: "spider-man",
        title: "Spider Man",
        url: "./assets/thumbnails/spider-man.jpg",
      },
      {
        id: "wonder-woman",
        title: "Wonder Woman",
        url: "./assets/thumbnails/wonder-woman.png",
      },
    ];
  
    
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

      // Title Text Element
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 18,
      height: 26,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#0077CC",
      opacity: 1,
    });

    return entityEl;
  },
  createThumbNail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width:20,
      height:28
    });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive:"plane"
    })
    
    return entityEl;
  },
});