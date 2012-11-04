function addDateTime(date, dateTimeStr) {
	var result, splitted, sign, addDate, dd, mm, yy, addTime, hh, min;
	splitted = checkAddTime(dateTimeStr);
	result = new Date(date.getTime());
	if (splitted) {
		if (splitted[1] === '-') {
			sign = -1;
		} else {
			sign = 1;
		}
		addDate = splitted[2].split('.');
		addTime = splitted[3].split(':');
		result.setDate(result.getDate() + sign * addDate[0]);
		result.setMonth(result.getMonth() + sign * addDate[1]);
		result.setYear(result.getYear() + sign * addDate[2]);
		result.setHours(result.getHours() + sign * addTime[0]);
		result.setMinutes(result.getMinutes() + sign * addTime[1]);
	} else {
		console.log("Add time in 'addDateTime' function must have format '+ dd.MM.YY hh:mm'");
	}
	return result;
}

function isAlertTime(event) {
	var today, diff;
	today = new Date();
	diff = today - getNextAlarmTime(event);
	return diff > -500 && diff < 500;
}

function getNextAlarmTime(event) {
	var nhd = getNextHappenDate(event);
	return addDateTime(nhd, event.alert.value);
}

function getNextHappenDate(event) {
	var nhd, today;
	if (!event.nextHappenDate) {
		today = new Date();
		nhd = event.startDate;
		while(nhd < today) {
			nhd = addDateTime(nhd, event.repeat.value);
		}
		event.nextHappenDate = nhd;
	}
	return event.nextHappenDate;
}

function getWeekStartDate(date) {
	var date, startOfWeek;
	date = date || new Date();
	startOfWeek = new Date(date.getTime());
	startOfWeek.setDate(date.getDate() - date.getDay() + 1);
	startOfWeek.setHours(0);
	startOfWeek.setMinutes(0);
	return startOfWeek;
}

function getWeekEndDate(date) {
	var startOfWeek, endOfWeek;
	startOfWeek = getWeekStartDate(date);
	endOfWeek = new Date(startOfWeek.getTime());
	endOfWeek.setDate(startOfWeek.getDate() + 7);
	return endOfWeek;
}

function filterFactory(selector) {
	return function (array) {
		return array.filter(selector);
	}
}

function sortFactory(selector) {
	return function (array) {
		return array.sort(selector);
	}
}

function getEventsCollection(size) {
	var i, events;
	events = [];
	for (i = 0; i < size; i++) {
		events.push(getRandomEvent());
	}
	return events;
}

var events = getEventsCollection(20);

var pastEvents = filterFactory(function (event) {
	return event.endDate < new Date();
});

var futureEvents = filterFactory(function (event) {
	return event.startDate > new Date();
});

var thisWeekEvents = filterFactory(function (event) {
	return event.startDate > getWeekStartDate() && event.startDate < getWeekEndDate();
});

var partyEvents = filterFactory(function (event) {
	return event.title === 'Drunken feast';
});

var nightAlarms = filterFactory(function (event) {
	var alarm = getNextAlarmTime(event);
	return alarm.getHours() > 0 && alarm.getHours() < 8;
});

var sortByStartDateInt = sortFactory(function (a, b) {
	return b.startDate - a.startDate;
});

var sortByNextHappenDateInt = sortFactory(function (a, b) {
	return getNextHappenDate(b) - getNextHappenDate(a);
});

function sortByStartDate(events, asc) {
	var sorted = sortByStartDateInt(events);
	if (!asc) {
		sorted.reverse();
	}
	return sorted;
}

function sortByNextHappenDate(events, asc) {
	var sorted = sortByNextHappenDateInt(events);
	if (!asc) {
		sorted.reverse();
	}
	return sorted;
}

console.dir(thisWeekEvents(futureEvents(events)));//будущие события недели
console.dir(sortByStartDate(partyEvents(futureEvents(events))));//будущие пьянки, отсортированные по дате
console.dir(sortByNextHappenDate(nightAlarms(thisWeekEvents(futureEvents(events)))));//события, которые меня разбудят на этой неделе