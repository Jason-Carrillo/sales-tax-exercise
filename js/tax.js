(function (){
    "use strict";

    var basicTax = .1
    var importTax = .05

    var itemsPurchased = [

    {
        item: "book",
        amount: 1,
        cost: 12.49,
        costTax: 0
    },
    {
        item: "music CD",
        amount: 1,
        cost: 14.99,
        costTax: 1.50
    },
    {
        item: "chocolate bar",
        amount: 1,
        cost: 0.85,
        costTax: 0
    }

]

    var importItems = [
        {
            item: "Imported box of chocolates",
            amount: 1,
            cost: 10.00,
            costTax: .50
        },
        {
            item: "Important bottle of perfume",
            amount: 1,
            cost: 47.50,
            costTax: 7.13
        }
    ]


    function adddingSalesTax(items) {
        for (var x = 0; x <items.length; x++) {
            var item = items[x];

            console.log(item.amount + " " + item.item + ": " + (item.cost + item.costTax).toFixed(2))


        }

        var totalTax = (parseFloat(items[0].costTax) + (items[1].costTax) + (items[2].costTax))

        var totalCost = (parseFloat(items[0].cost) + (items[1].cost) + (items[2].cost))

        var importTax = (parseFloat(items[0].costTax) + (items[1].costTax))

        var importCost = (parseFloat(items[0].cost) + (items[1].cost))


        console.log("Sales Taxes: " + totalTax.toFixed(2))
        console.log("Total: " + (totalTax + totalCost).toFixed(2))

        console.log("Sales Taxes: " + importTax.toFixed(2))
        console.log("Total: " + (importTax + totalCost).toFixed(2))

    }

    adddingSalesTax(itemsPurchased)


adddingSalesTax(importItems)













})();