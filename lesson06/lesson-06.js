let percentage = 10;
let screenPrice = 10000;
let AllServicePrices;
let titleProject;
let newTitleProject = ''; 
let fullPrice; 
let servicePercentPrice;
let screensValue;
let responsive;
let servicePrice1;
let servicePrice2;

const asking = function() {
    titleProject = prompt('Название проекта'); 
    screensValue = prompt('Типы экранов: шаблонный, с уникальным дизайном, с анимациями');
    responsive = confirm('нужен респонсив сайт?'); 
}


// Цикл для ввода цены страницы
while (true) {
    screenPrice = prompt('Цена страницы');

    // Проверка на отмену или пустой ввод
    if (screenPrice === null || screenPrice.trim() === '') {
        break; 
    }

    screenPrice = screenPrice.trim(); //убрать пробелы

    // Проверка на число
    if (checkIsNumber(screenPrice)) {
        screenPrice = parseFloat(screenPrice); 
        break; 
    }
}


const getAllServicePrices = function() {
    let sum = 0;

    let needService = false;
    for (let i = 0; i < 2; i++) { 

        let textFromPrompt = prompt('Какой сервис еще нужен?'); 
        if (textFromPrompt === null) break; 

        let servicePrice = prompt(`Сколько стоит?`); 
        if (servicePrice === null) break; 

        if (checkIsNumber(servicePrice)) { 
            sum += parseFloat(servicePrice); 
        }
    }
    
    return sum; 
};



//стоимость всего проекта
function getFullPrice() {
   return getAllServicePrices() + screenPrice;
};



//процент подрядчику
function getServicePercentPrices(fullPrice) {
    return Math.ceil(fullPrice - (fullPrice * (percentage / 100)));
}

//правка написания названия проекта
function getTitle() {
    let trimmedTitle = titleProject.trim();
    return trimmedTitle.charAt(0).toUpperCase() + trimmedTitle.slice(1).toLowerCase();
}

//проверка, является ли значение числом
function checkIsNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
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




asking();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices(fullPrice); 
newTitleProject = getTitle();

console.log(newTitleProject);
console.log(getRollbackMessage(fullPrice));
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(screensValue);
console.log(responsive);  