var activities = ["Studying", "Drunken feast", "Karaoke singing", "Hanging around"];
var locations = ["My home", "My work", "My friend's house", "1905 Sq.", "UrFU", "Unknown"];

function getRandomInt(min, max) {
	'use strict';
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(arr) {
	'use strict';
	return arr[getRandomInt(0, arr.length - 1)];
}

function getRandomString() {
	'use strict';
	var chars, length, str, i;
	chars = '01234 56789 ABCDE FGHIJ KLMNO PQRST UVWXT Zabcd efghi klmno pqrst uvwxy z'.split('');
	length = getRandomInt(4, chars.length);
	str = '';
	for (i = 0; i < length; i++) {
        str += getRandomElement(chars);
    }
    return str;
}

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

function getRandomStartDate() {
	'use strict';
	var startDate = new Date();
	startDate.setDate(startDate.getDate() + getRandomInt(-28, 28));
	startDate.setHours(getRandomInt(0, 23));
	startDate.setMinutes(getRandomInt(0, 59));
	return startDate;
}

function getRandomEndDate(startDate) {
	'use strict';
	var endDate = new Date(startDate.getTime());
	endDate.setHours(startDate.getHours() + getRandomInt(1, 23));
	endDate.setMinutes(getRandomInt(0, 59));
	return endDate;
}

function getRandomEvent() {
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