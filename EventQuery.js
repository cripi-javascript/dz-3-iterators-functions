﻿//utf-8
var nameArray = ['Goga', 'Vasya', 'Petya', 'Zina', 'Ira', 'Masha', 'Dima', 'Tolya', 'Kolya', 'Marina', 'Gulya', 'Alyona', 'Zhenya', 'Ruslan', 'Uriy'];
function Event(obj) { //Call, DateStart, DateFinish, Description, Parent, Childs, Comments, Peopleт, Location, Private, Rank, EvRS, Link
    'use strict';
	return obj || {};
};
var lectureJS1 = {"start": new Date(2012, 9, 3, 19, 00, 00),
        "end": new Date(2012, 9, 3, 20, 00, 00),
		"name": "1 лекция по JavaScript",
		"description": "Обзор языка",
		"parent": {},
		"childs": [lectureJS2, lectureJS3, lectureJS4],
		"comments": ['Красивенько', 'А мы могли бы...'],
		"people": nameArray, 
		"location": {},
		"private": true, 
		"rank": 4,		
		"EvRS": 16,		
		"Link": 'http://cripi.ru/#javascript' 
	};
var lectureJS2 = {"start":new Date(2012, 9, 10, 19, 00, 00),
        "end": new Date(2012, 9, 10, 21, 00, 00),
		"name": "2 лекция по JavaScript",
		"description": "Типы данных. Объекты. Statements. Expressions.",
		"parent": lectureJS1,
		"childs": [lectureJS3, lectureJS4],
		"comments": ['Можете вообще ничего не делать', 'Можно ли перенести на 19:30?'],
		"people": nameArray, 
		"location": {},
		"private": true, 
		"rank": 4,		
		"EvRS": 16,		
		"Link": 'http://cripi.ru/#javascript' 
	};
var lectureJS3 = {"start":new Date(2012, 9, 17, 19, 30, 00),
        "end": new Date(2012, 9, 17, 21, 00, 00),
		"name": "3 лекция по JavaScript",
		"description": "Итераторы и циклы",
		"parent": lectureJS2,
		"childs": [lectureJS4],
		"comments": ['Можете вообще ничего не делать', 'Можно ли перенести на 19:30?'],
		"people": nameArray, 
		"location": {},
		"private": true, 
		"rank": 3,		
		"EvRS": 16,		
		"Link": 'http://cripi.ru/#javascript' 
	};
var lectureJS4 = {"start":new Date(2012, 9, 24, 18, 30, 00),
        "end": new Date(2012, 9, 24, 21, 00, 00),
		"name": "4 лекция по JavaScript",
		"description": "ООП, которого нет",
		"parent": lectureJS3,
		"childs": [],
		"comments": [],
		"people": nameArray, 
		"location": {},
		"private": true, 
		"rank": 0,		
		"EvRS": 16,		
		"Link": 'http://cripi.ru/#javascript' 
	};
var eventArray = [lectureJS3, lectureJS4, lectureJS1, lectureJS2];
for (var nameIndex in nameArray) {
	var randomnumber = Math.random()*nameIndex;
	eventArray[eventArray.length]=(Event({
	'people':[nameArray[nameIndex]],
	'name'  : "Ещё одно событие"+nameIndex,
	'start' : new Date(2012, randomnumber, randomnumber*(1+Math.random()), 10+randomnumber*Math.random(), 00, 00),
	'end'   : new Date(2012, randomnumber, randomnumber*2, 11+randomnumber, 30, 00),
	'rank'  : (Math.random()*5).toFixed(0),
	'EvRS'  : 16,
	}));
};
//Закончили формировать случайные объекты. Переходим к выборке.
function isData(data) {
	"use strict";
     if (typeof data === 'undefined') {return false;}
     return data;}
function Flt(A,varHash){ // filterFieldHash, sortedField, next, prew
	varHash = varHash || {};
	curDate = isData(varHash['date']) || new Date();
	next = isData(varHash['next']);
	prew = isData(varHash['prew']);
	filterField =isData(varHash['filterField']) || {};
	sortedField = isData(varHash['sortedField']) || 'start';	
	if (next===true) {
		return A.filter(function (event){ //after - грядущие
			return event.start >= curDate;
		})};
	if (prew==true){
		return A.filter(function (event){ //pre - предыдущие
			return event.end < curDate;
		})};

	//Проверка вхождения
	function inArray(looking_for, list){
		for(i in list){
			if(looking_for == list[i]){
            return true;
			}
		}
		return false;
	};
	for (var field in filterField){
	
		A = A.filter(function(event){
			return inArray(filterField[field],event[field]);
		});
	};
	A.sort(function(a,b){
	if (a[sortedField]>b[sortedField]){
		return -1};
	if (a[sortedField]<b[sortedField]) {
		return 1};
	return 0;
	});
	return A;
};

console.log(['Прошедшие события',Flt(eventArray,{'next':true})]);
console.log(['Событие с конкретным участником'],Flt(eventArray,{'filterField':{'people':'Ruslan'}}));
console.log(['Предстоящие события',Flt(eventArray,{'prew':true})]);
console.log(['События после определённой даты',Flt(eventArray,{'date':new Date(2012,5), 'next':true})]);
console.log(['Все события отсортированные по возрастанию', Flt(eventArray)]); // Убывание доделать
console.log(['Сортировка по рейтингу события',Flt(eventArray,{'sortedField':'rank'})]);
