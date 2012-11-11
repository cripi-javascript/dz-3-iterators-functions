/*jslint plusplus: true*/
var activities = ["Studying", "Drunken feast", "Karaoke singing", "Hanging around"];
var locations = ["My home", "My work", "My friend's house", "1905 Sq.", "UrFU", "Unknown"];

/**
 * Возвращает случайное число в интервале [min, max]
 *
 * @param {Number} min  нижний предел
 * @param {Number} max  верхний предел
 *
 * @return {Number}
 */
function getRandomInt(min, max) {
	'use strict';
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Возвращает случайный элемент массива
 *
 * @param {Array} arr   массив
 *
 * @return {Object}
 */
function getRandomElement(arr) {
	'use strict';
	return arr[getRandomInt(0, arr.length - 1)];
}

/**
 * Возвращает сгенерированную строку из случайных символов
 *
 * @return {String}
 */
function getRandomString() {
	'use strict';
	var chars, length, str, i;
	chars = "01234 56789 ABCDE FGHIJ KLMNO PQRST UVWXT Zabcd efghi klmno pqrst uvwxy z";
	chars = chars.split('');
	length = getRandomInt(4, chars.length);
	str = '';
	for (i = 0; i < length; i++) {
		str += getRandomElement(chars);
	}
	return str;
}

/**
 * Возвращает случайное собственное свойство объекта
 *
 * @param {Object} obj   объект
 *
 * @return {Object}
 */
function getRandomPropertyVal(obj) {
	'use strict';
	var keys, prop;
	keys = [];
	for (prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			keys.push(prop);
		}
	}
	return obj[getRandomElement(keys)];
}

/**
 * Возвращает сгенерированную дату начала события
 * Вычисляется как текущая дата начала события + случайное число дней от -28 до 28
 *
 * @return {Date}
 */
function getRandomStartDate() {
	'use strict';
	var startDate = new Date();
	startDate.setDate(startDate.getDate() + getRandomInt(-28, 28));
	startDate.setHours(getRandomInt(0, 23));
	startDate.setMinutes(getRandomInt(0, 59));
	return startDate;
}

/**
 * Возвращает сгенерированную дату окончания события
 * Вычисляется как дата начала события + случайное число часов от 1 до 23
 * @param {Number|Date} startDate   Начало события
 *
 * @return {Date}
 */
function getRandomEndDate(startDate) {
	'use strict';
	var endDate = new Date(startDate.getTime());
	endDate.setHours(startDate.getHours() + getRandomInt(1, 23));
	endDate.setMinutes(getRandomInt(0, 59));
	return endDate;
}

/**
 * Возвращает сгенерированный случайным образом объект Event
 *
 * @return {Object}
 */
function getRandomEvent() {
	'use strict';
	var title, location, starts, ends, repeat, alert, notes;
	title = getRandomElement(activities);
	location = getRandomElement(locations);
	starts = getRandomStartDate();
	ends = getRandomEndDate(starts);
	repeat = getRandomPropertyVal(REPEAT);
	alert = getRandomPropertyVal(ALERT);
	notes = getRandomString();
	return Event(title, location, starts, ends, repeat, alert, notes);
}