const buyACar = (car) => {
    if (money >= 10000) {
        return "can buy " + car;
    }
    else {
        return "Do not enough money";
    }
};
console.log(buyACar("Vinfast"));
var money = 100001;
//# sourceMappingURL=main.js.map