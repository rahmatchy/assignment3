// https://github.com/rahmatchy/assignment3

// Kilometer To Meter

function kilometerToMeter(kilometer) {
    var result = kilometer * 1000;
    return result;
}

var meter = kilometerToMeter(3);
console.log("Meter is:", meter);

// Budget Calculator

function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
}

var result = budgetCalculator(8, 3, 2);
console.log("Your Total Bill is: ",result);

// Hotel Cost
    // hotelcost = 1 theke 10 din 100 tk kore, 11 theke 20 din porjonto 80 tk, 21 theke upore 50 tk kore 


function hotelCost(cost) {
    var day = 43;
    // var charge = 0;
    if (day <= 10) {
        var charge = day * 10;
        return charge;
    }
    else if (day >= 10 && day <= 20) {
        var first10Days = 10 * 100;
        var remainingDays = day - 10;
        var second10Days = remainingDays * 80;
        var charge = first10Days + second10Days;
        return charge;
    }
    else {
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remainingDays = day - 20;
        var third20Days = remainingDays * 50;
        var charge = first10Days + second10Days + third20Days;
        return charge;
    }
}
var charge = hotelCost(20);
console.log("Your Hotel Cose is: ",charge);



// Mega Friends

var friends = ["Hammad", "Ahmed", "Sakib Al-Hassan", "Sunny", "Atik", "Ashraf", "Rokan Uddin"];
var longWorld = friends[0]
function megaFriends(friends) {
    for (var i = 0; i < friends.length; i++) {
        var largeName = friends[i];
        if (largeName.length > longWorld.length) {
            longWorld = largeName;
            return largeName;
        }
    }
}
var largestName = megaFriends(friends);
console.log("Long Word is: ",largestName);