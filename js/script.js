var btnGen = document.getElementById('generate');
var btnNull = document.getElementById('null');

btnGen.addEventListener ("click", function() {
    console.log("Yay you clicked me!");
    var nameUser = document.getElementById('name').value;
    var distanceUser = document.getElementById('distance').value;
    var ageUser = document.getElementById('age').value;
    console.log(nameUser, ageUser, distanceUser);
    var price = distanceUser * .21;
    if (ageUser <= 2) {
        var priceDiscount = (price / 100) * 85; //15% di sconto sui minorenni
        var discount = 15;
        console.log(priceDiscount);
    } else if ((ageUser == 3) || (ageUser == 4)) {
        var priceDiscount = (price / 100) * 70; //30% di sconto su età comprese fra 18 e 64
        var discount = 30;
        
    } else {
        var priceDiscount = (price / 100) * 50; //50% di sconto su over 65
        var discount = 50;
    }
    document.getElementById('nameTicket').innerHTML = nameUser;
    document.getElementById('discountTicket').innerHTML = discount + "%";
    document.getElementById('wagTicket').innerHTML = "Carrozza 4";
    document.getElementById('cpCodeTicket').innerHTML = "7897312";
    document.getElementById('priceTicket').innerHTML = "€" + priceDiscount;

} 
)

btnNull.addEventListener ("click", function() {
    console.log("Yay you clicked me too!");
} 
)