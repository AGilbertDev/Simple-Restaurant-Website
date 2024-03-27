const menuItems = {
    "starters": [
        { name: "Garlic Bread", price: 3.50, image: "bread.jpg" },
        { name: "Nachos", price: 4.50, image: "nachos.jpg" },
        { name: "Soup", price: 5.50, image: "soup.jpg" },
        { name: "Coleslaw", price: 6.50, image: "slaw.jpg" }
    ],
    "mains": [
        { name: "Hamburger", price: 3.50, image: "burger.jpg" },
        { name: "Spaghetti", price: 4.50, image: "spaghetti.jpg" },
        { name: "Steak", price: 5.50, image: "steak.jpg" },
        { name: "Poutine", price: 6.50, image: "poutine.jpg" },
        { name: "Sandwich Club", price: 3.50, image: "club.jpg" },
        { name: "Fish n Chips", price: 4.50, image: "fishnchip.jpg" },
        { name: "Chicken Wings", price: 5.50, image: "wings.jpg" },
        { name: "Pizza", price: 6.50, image: "pizza.jpg" }
    ],
    "sides": [
        { name: "Salad", price: 3.50, image: "salad.jpg" },
        { name: "Fries", price: 4.50, image: "fries.jpg" },
        { name: "Onion Rings", price: 4.50, image: "onionrings.jpg" },
        { name: "Rice", price: 5.50, image: "rice.jpg" },
        { name: "Vegetables", price: 6.50, image: "vegetables.jpg" }
    ],
    "desserts": [
        { name: "Cake", price: 3.50, image: "cake.jpg" },
        { name: "Ice Cream", price: 4.50, image: "icecream.jpg" },
        { name: "Pie", price: 5.50, image: "pie.jpg" }
    ],
    "drinks": [
        { name: "Wine", price: 3.50, image: "wine.jpg" },
        { name: "Beer", price: 4.50, image: "beer.jpg" },
        { name: "Soft Drink", price: 5.50, image: "softdrinks.jpg" },
        { name: "Coffee", price: 6.50, image: "coffee.jpg" },
        { name: "Tea", price: 3.50, image: "tea.jpg" },
        { name: "Juice", price: 4.50, image: "juice.jpg" }
    ]
}

function makeItem(item) {

     /* Food image */
     const img = document.createElement("img");
     img.src = "../images/"+item.image;

     /* Food name */
     const name = document.createElement("p");
     name.textContent = item.name;

     /* Food price */
     const price = document.createElement("p");
     price.textContent = item.price + " $";

     /* Quantity buttons */
     const remove = document.createElement("button");
     remove.textContent = "-";
     const add = document.createElement("button");
     add.textContent = "+";
     const quantity = document.createElement("p");
     quantity.textContent = 0;
     const buttons = document.createElement("div");
     buttons.className = "btns";
     buttons.appendChild(remove);
     buttons.appendChild(quantity);
     buttons.appendChild(add);

     const div = document.createElement("div");
     div.className = "food-item";
     div.appendChild(img);
     div.appendChild(name);
     div.appendChild(price);
     div.appendChild(buttons);

    return div;
}

function makeList() {
    const starters = document.getElementById("starters");
    menuItems.starters.forEach((item) => {   
        const div = makeItem(item);
        starters.appendChild(div);
    });
    const mains = document.getElementById("mains");
    menuItems.mains.forEach((item) => {   
        const div = makeItem(item);
        mains.appendChild(div);
    });
    const sides = document.getElementById("sides");
    menuItems.sides.forEach((item) => {   
        const div = makeItem(item);
        sides.appendChild(div);
    });
    const desserts = document.getElementById("desserts");
    menuItems.desserts.forEach((item) => {   
        const div = makeItem(item);
        desserts.appendChild(div);
    });
    const drinks = document.getElementById("drinks");
    menuItems.drinks.forEach((item) => {   
        const div = makeItem(item);
        drinks.appendChild(div);
    });
}