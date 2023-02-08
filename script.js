class Fruit {
    constructor(item, prix, nombre) {
        this.Item = item;
        this.Prix = prix;
        this.Nombre = nombre;
        this.SousTotal = nombre * prix;
    }

    toString() {
        return this.Item + " " + this.Prix + "\n" + " " + this.Nombre;
    }
}

class Panier {
    constructor(quantite, sousTotal) {
        this.Quantite = quantite;
        this.Total = sousTotal;
    }

}

// Creation de la class
let Item;
let Prix;
let Nombre;
let idSousTotal;

function CalculerSousTotal(item, prix, nombre) {
    // Creation de la class
    Item = item;
    Prix = prix;
    Nombre = nombre;

    const fruit = new Fruit(Item, Prix, Nombre);

    if (fruit.Item === "Pommes") {
        idSousTotal = "PommesSousTotal"
    }
    if (fruit.Item === "Poires") {
        idSousTotal = "PoiresSousTotal"
    }
    if (fruit.Item === "Pêches") {
        idSousTotal = "PechesSousTotal"
    }

    let anSousTotal = document.getElementById(idSousTotal).innerText;
    let newSoustotal = +fruit.Prix * +fruit.Nombre;
    document.getElementById(idSousTotal).innerText = newSoustotal;

    // Definir Panier
    panier = new Panier(fruit.Nombre, newSoustotal)

    let anTotal = parseInt(document.getElementById("total").innerText);
    let newTotal = +anTotal + panier.Total
    document.getElementById("total").innerText = newTotal;

}

function Validation() {

    if (+panier.Quantite > 20) {
        return false;
    }
}