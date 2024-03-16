let percent = 10;
let screenPrice = 10000;


let titleProject = prompt('Название проекта');
let screensValue = prompt('Типы экранов: шаблонный, с уникальным дизайном, с анимациями');
let responsive = confirm('нужен респонсив сайт?');
let service1 = prompt('какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('какой еще сервис нужен?');
let servicePrice2 = +prompt('Сколько будет стоить второй сервис?');

//lesson05

let getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
};
let AllServicePrices = getAllServicePrices();
console.log("стоимость всех услуг:" + AllServicePrices);

function getFullPrice() {
   return getAllServicePrices() + screenPrice;
};
let fullPrice = getFullPrice();
console.log("стоимость всего проекта:" + fullPrice)

function getTitle (titleProject) {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}
let newTitleProject = getTitle(titleProject);
console.log(newTitleProject);

function getServicePercentPrices () {
   return Math.round(fullPrice * percent / 100);
}
let servicePercentPrice = fullPrice - getServicePercentPrices();
console.log("стоимость проекта с учётом скидки подрядчику" + servicePercentPrice)


function getRollbackMessage(fullPrice) {
    if (fullPrice >= 50000) {
        return('скидка 10%');
    } else if (fullPrice >= 20000) {
        return('скидка 5%');
    } else if (fullPrice < 20000 && fullPrice >= 0) {
        return('скидки нет');
    } else if (fullPrice < 0) {
        return('что-то пошло не так');
    }
}

console.log(getRollbackMessage(fullPrice));