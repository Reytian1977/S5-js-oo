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

function CalculerSousTotal(item, prix, nombre) {
    // Creation de la class
    let Item = item;
    let Prix = prix;
    let Nombre = nombre;
    let idSousTotal;

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
    const panier = new Panier(fruit.Nombre, newSoustotal)

    let anTotal = parseInt(document.getElementById("total").innerText);
    let newTotal = +anTotal + panier.Total
    document.getElementById("total").innerText = newTotal;
}

