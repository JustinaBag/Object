// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
// 2.7. Property „workingLocation" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
// 2.9. Property „contacts", kuris turės:
//       2.9.1. „phone"
//       2.9.2. „email"
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"


let companyObject1 = {
'company name': 'Grazi gera kompanija',
opened: 1987,
companyCode: 123456789,
employees: 1259,
ceo: 'Jonas Jonaitis',
nvo: false,
workingLocation: ['Lietuva', 'Latvija', 'Estija'],
activityAreas: ['administravimas', 'koordinavimas', 'apskaita'],
contacts: {
    phone: 8605787878,
    email: 'vardas@pavarde.lt',
    address: {
        country: 'Lietuva',
        city: 'Vilnius',
        street: 'Kauno',
        apartment: '89-18',
    }
},
companyAddress: function() {
    return this.contacts.address;
},
setCompanyActive: function() {
this.nvo = true;
}


};

companyObject1.switchStudentActivity = function() {
    this.nvo =!this.nvo;
    return this.nvo;
}

console.log(companyObject1.nvo);

let companyObject2 = new Object();

companyObject2['company name'] = 'Grazi gera kompanija';
companyObject2.opened = 1987;
companyObject2.companyCode = 123456789;
companyObject2.employees = 1259;
companyObject2.ceo = 'Jonas Jonaitis';
companyObject2.nvo = false;
companyObject2.workingLocation = ['Lietuva', 'Latvija', 'Estija'];
companyObject2.activityAreas = ['administravimas', 'koordinavimas', 'apskaita'];

companyObject2.contacts = {};
companyObject2.contacts.phone = 8605787878,
companyObject2.contacts.email = 'vardas@pavarde.lt',

companyObject2.contacts.address = {};
companyObject2.contacts.address.country = 'Lietuva',
companyObject2.contacts.address.city = 'Vilnius',
companyObject2.contacts.address.street = 'Kauno',
companyObject2.contacts.address.apartment = '89-18',

console.log(companyObject2);

companyObject1.subsidaries = [companyObject2];


console.log(companyObject1);
console.log(companyObject1.companyAddress());
//console.log(companyObject1.IsActive());

companyObject1.setCompanyActive();

//console.log(companyObject1.setCompanyActive());

companyObject2.addWorkingLocation = function(toAdd) {
    // console.log(toAdd);
    return workingLocation.push(toAdd);
}
console.log(companyObject2.addWorkingLocation('Vokietija')); ;

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".

// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
//        6.2. Pakeičia NVO statusą į false.
//        6.3. Keičia NVO statusą iš true į false ir iš false į true.
// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
//        8.2. Naują veiklos rūšį prie veiklų masyvo.
// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
//        9.2. Veiklos rūšį iš veiklų masyvo.


// 1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
//  1.1. name - miesto pavadinimas (string)
//  1.2. population - miesto populiacija (number)
//  1.3. location - (object)
//    1.3.1. continent - žemynas (string)
//    1.3.2. country - šalis (string)
//  1.4. touristAttractions - lankytinos vietos (array)
//  1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)

// 1.6. Visus miestų masyvų narius išvesti į konsolę.
// 1.6.1. Visų miestų pavadinimis išvesti į konsolę.
// 1.6.2. Visų miestų populiaciją išvesti į konsolę.
// 1.6.3. Visų miestų žemyną išvesti į konsolę.
// 1.6.4. Visų miestų šalį išvesti į konsolę.
// 1.6.5. Į konsolę išvesti ar miestas yra sostinė, ar ne.
// 1.6.6. Į konsolę išvesti visas miesto lankytinas vietas.

// 2. HTML faile sukurti tuščią div elementą, kuriame bus atvaizduoti visi miestai.
//  2.1. Panaudojant ciklą, atvaizduoti visus miestus ekrane pagal nurodytą stilių.

// 3.1. Jeigu miestas yra sostinė, tai:
//  3.1.1. Prie miesto pavadinimo pridėti žodį capital, pvz.: Vilnius (capital)
//  3.1.2. Prie miesto aprašymo pridėti tekstą, kuris nusako jog tai šalies sostinė, pvz.: „Vilnius is the capital of Lithuania."
//  3.1.3. Jeigu miestas yra sostinė, tai prie apgaubiančio elemento pridėti klasę „capital".

// 4. Priklausomai nuo miesto lankytinų objektų kiekio, tekstas turi skirtis:
//  4.1. Jeigu lankytina vieta tik viena, tai turėtų būti naudojama vienaskaita, pvz.: „Main Tourist attraction of Vilnius is".
//  4.2. Jeigu lankytinų vietų yra daugiau, nei viena, tai tekstas turėtų būti daugiskaitoje, pvz. „Main Tourist attractions of Kaunas are".
//  4.3. Jeigu lankytinų vietų nėra, tai tekstas neturėtų būti atvaizduojamas.

// 5. Naudojant tik JavaScript:
//  5.1. Pakeisti visų sostinių teksto spalvą.
//  5.2. Pakeisti kas antro miesto fono spalvą.
 
//  5.3. Pakeisti visų lankytinų vietų sąrašo pirmo nario spalvą į žalią.
//  5.4. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.

// 6. Miestų plotis turi būti 50%.
// 6.1. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%.