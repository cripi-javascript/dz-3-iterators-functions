var nameArray = ['Goga', 'Vasya', 'Petya', 'Zina', 'Ira', 'Masha', 'Dima', 'Tolya', 'Kolya', 'Marina', 'Gulya', 'Alyona', 'Zhenya', 'Ruslan', 'Uriy'];
function Event(obj) { //Call, DateStart, DateFinish, Description, Parent, Childs, Comments, People�, Location, Private, Rank, EvRS, Link
    'use strict';
	return obj || {};
};
var lectureJS1 = {"start": new Date(2012, 9, 3, 19, 00, 00),
        "end": new Date(2012, 9, 3, 20, 00, 00),
		"name": "1 ������ �� JavaScript",
		"description": "����� �����",
		"parent": {},
		"childs": [lectureJS2, lectureJS3, lectureJS4],
		"comments": ['�����������', '� �� ����� ��...'],
		"people": nameArray, 
		"location": {},
		"private": true, 
		"rank": 4,		
		"EvRS": 16,		
		"Link": 'http://cripi.ru/#javascript' 
	};
var lectureJS2 = {"start":new Date(2012, 9, 10, 19, 00, 00),
        "end": new Date(2012, 9, 10, 21, 00, 00),
		"name": "2 ������ �� JavaScript",
		"description": "���� ������. �������. Statements. Expressions.",
		"parent": lectureJS1,
		"childs": [lectureJS3, lectureJS4],
		"comments": ['������ ������ ������ �� ������', '����� �� ��������� �� 19:30?'],
		"people": nameArray, 
		"location": {},
		"private": true, 
		"rank": 4,		
		"EvRS": 16,		
		"Link": 'http://cripi.ru/#javascript' 
	};
var lectureJS3 = {"start":new Date(2012, 9, 17, 19, 30, 00),
        "end": new Date(2012, 9, 17, 21, 00, 00),
		"name": "3 ������ �� JavaScript",
		"description": "��������� � �����",
		"parent": lectureJS2,
		"childs": [lectureJS4],
		"comments": ['������ ������ ������ �� ������', '����� �� ��������� �� 19:30?'],
		"people": nameArray, 
		"location": {},
		"private": true, 
		"rank": 3,		
		"EvRS": 16,		
		"Link": 'http://cripi.ru/#javascript' 
	};
var lectureJS4 = {"start":new Date(2012, 9, 24, 18, 30, 00),
        "end": new Date(2012, 9, 24, 21, 00, 00),
		"name": "4 ������ �� JavaScript",
		"description": "���, �������� ���",
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
	'name'  : "��� ���� �������"+nameIndex,
	'start' : new Date(2012, randomnumber, randomnumber*(1+Math.random()), 10+randomnumber*Math.random(), 00, 00),
	'end'   : new Date(2012, randomnumber, randomnumber*2, 11+randomnumber, 30, 00),
	'rank'  : (Math.random()*5).toFixed(0),
	'EvRS'  : 16,
	}));
};
//��������� ����������� ��������� �������. ��������� � �������.
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
		return A.filter(function (event){ //after - ��������
			return event.start >= curDate;
		})};
	if (prew==true){
		return A.filter(function (event){ //pre - ����������
			return event.end < curDate;
		})};

	//�������� ���������
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

console.log(['��������� �������',Flt(eventArray,{'next':true})]);
console.log(['������� � ���������� ����������'],Flt(eventArray,{'filterField':{'people':'Ruslan'}}));
console.log(['����������� �������',Flt(eventArray,{'prew':true})]);
console.log(['������� ����� ����������� ����',Flt(eventArray,{'date':new Date(2012,5), 'next':true})]);
console.log(['��� ������� ��������������� �� �����������', Flt(eventArray)]); // �������� ��������
console.log(['���������� �� �������� �������',Flt(eventArray,{'sortedField':'rank'})]);
