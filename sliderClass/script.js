class HDCarousel {
  el = null;
  items = [];
  size = 3;
  gap = 22;
  activeClass = true;
  item = {
    width: 0,
    gap: 0,
    left: 0,
  };
  constructor(el) {
    this.el = el;
    this.items = el.getElementsByClassName("hdcarousel_item");
    const nav =
      this.el.parentElement.getElementsByClassName("hdcorusel_nav_item");

    for (let i = 0; i < nav.length; i += 1) {
      nav[i].addEventListener("click", () => this.move(nav[i]));
    }

    this.init();
  }

  init() {
    this.item.width = this.getSize();
    console.log(this.item.width);

    this.el.style.height = this.items[0].clientHeight + "px";
    this.setMinItems();

    this.clone("prev");
    this.build();
  }

  build() {
    let l = this.item.width * -1;
    for (let i = 0; i < this.items.length; i += 1) {
      this.items[i].style.width = this.item.width + "px";
      this.items[i].style.left = l + "px";
      l = l + this.item.width;
      if (i > 0) {
        l = l + this.gap;
      }
    }

    if (this.activeClass) {
      this.setActive();
    }
  }

  setMinItems() {
    const minItems = this.size + 2;
    if (this.items.length < minItems) {
      let itemsLength = this.items.length;

      for (let i = 0; i < itemsLength; i += 1) {
        let c = this.items[i].cloneNode(true);
        this.el.append(c);
      }
    }

    if (this.items.length < minItems) {
      this.setMinItems();
    }
  }

  getSize() {
    let w = this.el.clientWidth;
    w = w / this.size - this.gap;
    return w;
  }

  clone(pos = "next") {
    let item = 0;
    if (pos === "next") {
      item = this.items[0];
    } else {
      item = this.items[this.items.length - 1];
    }
    let c = item.cloneNode(true);

    if (pos === "next") {
      this.el.append(c);
    } else {
      this.el.prepend(c);
    }
    item.remove();
  }

  move(el) {
    let pos = el.getAttribute("data-dir");
    if (pos === "next") {
      this.next();
    } else {
      this.prev();
    }
  }

  next() {
    this.clone("next");
    this.build();
  }

  prev() {
    this.clone("prev");
    this.build();
  }

  setActive() {
    let midItem = Math.round(this.size / 2);
    for (let i = 0; i < this.items.length; i += 1) {
      this.items[i].classList.remove("hdcarousel_item_ative");
      if (i === midItem) {
        this.items[i].classList.add("hdcarousel_item_ative");
      }
    }
  }
}
// const element = document.getElementById("hdcarousel-id");
const element = document.querySelector(".hdcarousel"); //почему при такой записи у меня в this el=null после init?
new HDCarousel(element);
