let titleProject = prompt('Название проекта');

let screensValue = prompt('Типы экранов: шаблонный, с уникальным дизайном, с анимациями');

let responsive = prompt('нужен респонсив сайт?');

if (responsive == 'да') { 
        responsive = true
    } else if (responsive == 'нет') {
        responsive = false;
    }

let service1 = prompt('какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('какой еще сервис нужен?');
let servicePrice2 = +prompt('Сколько будет стоить второй сервис?');

let screenPrice = 45000;

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let percent = 10;

let servicePercentPrice = Math.round(fullPrice * percent / 100);

console.log (servicePercentPrice);

if(fullPrice >= 50000) {
    console.log('скидка 10%');
} else if (fullPrice >= 20000) {
    console.log('скидка 5%');
} else if (fullPrice < 20000 && fullPrice >= 0) {
    console.log('скидки нет')
} else if (fullPrice < 0) {
    console.log('что-то пошло не так');
}

