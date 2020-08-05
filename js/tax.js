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

    function adddingSalesTax(items) {
        for (var x = 0; x <items.length; x++) {
            var item = items[x];

            console.log(item.amount + " " + item.item + ": " + (item.cost + item.costTax).toFixed(2))


        }

        var totalTax = (parseFloat(itemsPurchased[0].costTax) + (itemsPurchased[1].costTax) + (itemsPurchased[2].costTax))

        var totalCost = (parseFloat(itemsPurchased[0].cost) + (itemsPurchased[1].cost) + (itemsPurchased[2].cost))


        console.log("Sales Taxes: " + totalTax.toFixed(2))
        console.log("Total: " + (totalTax + totalCost).toFixed(2))

    }

    adddingSalesTax(itemsPurchased)















})();