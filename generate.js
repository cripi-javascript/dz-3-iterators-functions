/**
 * Возвращает объект Event
 *
 * @param {Object} requiredParams    Обязательные параметры
 * @param {Object} optionalParams    Дополнительные параметры
 * 
 * @example
 * 		var required = {
 *			start: new Date('10-26-2012 02:12'),
 *			end: new Date('10-27-2012'),
 *			name: 'Поездка на озеро Тургояк',
 *			isNotify: 'true',
 *			notify: new Date('10-26-2012')
 *		};
 * 		var optional = {
 *			description: 'Отличная возможность отдохнуть и насладиться природой',
 *			place: 'Озеро Тургояк',
 *			importance: 'h',
 *			url: 'http://www.turgoyak.com/'
 *		};
 *    	getEvent(required, optional);
 *
 * @return {Object}
 */
function getEvent(requiredParams, optionalParams) {
"use strict";
if (requiredParams.start > requiredParams.end) {
    throw new Error("Время начала мероприятия не может быть позже времени окончания!");
    }
var imp = optionalParams.importance;
if (!(imp == 'h' || imp == 'l' || imp == 'm')) {
    imp = 'm';
}
return {
    start: new Date(+requiredParams.start),
    end: new Date(+requiredParams.end),
    name: requiredParams.name || "Событие",
    isNotify: !!requiredParams.isNotify || false,
    notify: new Date(+requiredParams.notify),
    description: optionalParams.description || "",
    place: optionalParams.place || "",
    importance: imp,
    url: optionalParams.url
    };   
}
function printEventToLog(event) {
	
	console.log(event.name + ": " + event.start + " " + event.end + " " + event.importance + " " + event.description);
	//console.log(event.name);
}
function printEventArrayToLog(eventArray) {
	for (key in eventArray) {
		if (eventArray[key].name) {
			printEventToLog(eventArray[key]);
		}
	}
}
//Случайное число из интервала
function randomFrom(from, to) {
	'use strict';
	return Math.floor(Math.random() * (to - from + 1)) + from;
}

function generateEvent(count) {
	
	var i = 0;
	var ar = [];
	var names = ["Пара", "Сборы", "Экзамен", "Поездка", "Вечеринка"];
	var importances = ['l', 'm', 'h'];
	var isnotifys = [false, true]; 
	var req, opt;
	var random;
	var event;
	var today = new Date();
	for (i = 1; i <= count; i++) {
		random = randomFrom(-30, 29);
		req = {
			start: today.addDays(random),
			end: today.addDays(random + 1),
			name: names[randomFrom(0,4)],
			isNotify: isnotifys[randomFrom(0,1)],
			nonify: today.addDays(random)
		};
		opt = {
			importance: importances[randomFrom(0,2)]
		};
		event = getEvent(req, opt);
		ar.push(event);
		//printEventToLog(event);
	}
	printEventArrayToLog(ar);
	return ar;
}
Date.prototype.addDays = function(days) {
    var ms = new Date().getTime() + (86400000 * days);
    var added = new Date(ms);
    return added;
};
Array.prototype.happenedEvents = function()
{
	return this.filter(function(event){
		return event.end < new Date();
	});
};
Array.prototype.futureEvents = function()
{
	return this.filter(function(event){
		return event.start > new Date();
	});
};
Array.prototype.nameEvents = function(name)
{
	return this.filter(function(event){
		return event.name == name;
	});
};
Array.prototype.sortEvents = function(sortFun)
{
	return this.sort(sortFun);
};
function sortByName (a, b) {
	if (a.name < b.name) {
		return -1;
	}
	else {
		if (a.name == b.name) {
			return 0;
		}
		else {
			return 1;
		}
	}
}
function sortByStart (a, b) {
	if (a.start < b.start) {
		return -1;
	}
	else {
		if (a.start == b.start) {
			return 0;
		}
		else {
			return 1;
		}
	}
}
function sortByImportance (a, b) {
	var imp = new Array();
	imp['l'] = 0;
	imp['m'] = 1;
	imp['h'] = 2;
	if (imp[a.importance] < imp[b.importance]) {
		return -1;
	}
	else {
		if (imp[a.importance] == imp[b.importance]) {
			return 0;
		}
		else {
			return 1;
		}
	}
}
var eventAr = new Array();
console.log("Случайные события:");
eventAr = generateEvent(30);
console.log("Прошедшие события:");
printEventArrayToLog(eventAr.happenedEvents());
console.log("Предстоящие события:");
printEventArrayToLog(eventAr.futureEvents());
console.log("Пары:");
printEventArrayToLog(eventAr.nameEvents("Пара"));
console.log("События, отсортированные по имени:");
printEventArrayToLog(eventAr.sortEvents(sortByName));
console.log("События, отсортированные по началу события:");
printEventArrayToLog(eventAr.sortEvents(sortByStart));
console.log("События, отсортированные по важности:");
printEventArrayToLog(eventAr.sortEvents(sortByImportance));
console.log("Предстоящие пары, отсортированные важности:");
printEventArrayToLog(eventAr.nameEvents("Пара").futureEvents().sortEvents(sortByImportance));
console.log("Прошедшие вечеринки, отсортированные по важности и времени начала:");
printEventArrayToLog(eventAr.nameEvents("Вечеринка").happenedEvents().sortEvents(sortByImportance).sortEvents(sortByStart));
