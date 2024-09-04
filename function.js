function addPaintAndSupplies(totalCost, callback) {
    let cost = parseFloat(prompt("Enter the cost for the paint and supplies:"));
    if (isNaN(cost)) cost = 0;
    if (cost > 100) cost *= 1.1;

    let paintArea = document.querySelector(".paint");
    paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);
    return totalCost + cost;
}

const addFloorCoverings = function(totalCost, callback) {
    let cost = parseFloat(prompt("Enter the cost for the floor coverings:"));
    if (isNaN(cost)) cost = 0;
    if (cost < 500) cost *= 0.85;

    let floorArea = document.querySelector(".floor");
    floorArea.innerHTML = `Floor Coverings $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);
    return totalCost + cost;
};

const addFurniture = (totalCost, callback) => {
    let cost = parseFloat(prompt("Enter the cost for the furniture:"));
    if (isNaN(cost)) cost = 0;
    if (cost < 500) cost *= 0.9;

    let furnitureArea = document.querySelector(".furniture");
    furnitureArea.innerHTML = `Furniture $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);
    return totalCost + cost;
};


const updateTotals = (cost) => {
    let totalsArea = document.querySelector(".totalCost");
    totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;
};


let totalCost = 0;
totalCost = addPaintAndSupplies(totalCost, (newCost) => {
    totalCost = newCost;
    addFloorCoverings(totalCost, (newCost) => {
        totalCost = newCost;
        addFurniture(totalCost, updateTotals);
    });
});