let percentage = 10;
let screenPrice = 10000;
let AllServicePrices;
let newTitleProject = '';
let fullPrice;
let servicePercentPrice;

const asking = function() {
    // 
}




let titleProject = prompt('Название проекта');
let screensValue = prompt('Типы экранов: шаблонный, с уникальным дизайном, с анимациями');
let responsive = confirm('нужен респонсив сайт?');
let service1 = prompt('какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('какой еще сервис нужен?');
let servicePrice2 = +prompt('Сколько будет стоить второй сервис?');





//стоимость всех услуг
const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
};


//стоимость всего проекта
function getFullPrice() {
   return getAllServicePrices() + screenPrice;
};



//процент подрядчику
function getServicePercentPrices () {
   return  fullPrice - (fullPrice * ( percentage / 100));
}


//скидка
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


//правка написания названия проекта
function getTitle (titleProject) {
    titleProject = titleProject.trim();
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}




asking();
AllServicePrices = getAllServicePrices();
fullPrice = getFullPrice();

console.log(getRollbackMessage(fullPrice));


newTitleProject = getTitle(titleProject);
console.log(newTitleProject);

