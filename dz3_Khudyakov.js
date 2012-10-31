var events = [];
for (i = 1; i < 31; i++) {
	events.push({
		"name": "Событие №" + i, // тридцать событий
		"start": "2012," + (Math.round(Math.random() * 11) + 1) + ",1,12,00,0", // различающихся месяцем
		"location": Math.round(Math.random() * 2), // пусть будет три основных локации
		"allDay": Math.round(Math.random()), // весь день
		"stars": Math.round(Math.random() * 4) + 1, // случайный рейтинг
		"withMe": Math.round(Math.random()) // с моим участием
	});
};

var result = events.map(function(event) {
	return event.name + ", начало: " + event.start + ", гео: " + event.location + ", весь день: " + event.allDay + ", рейтинг: " + event.stars + ", пойду: " + event.withMe + ".";
});
console.log(result.join("<br/>")); // вывод коллекции из 30 случайных событий

var allWithMe = events.filter(function(event) {
	return event.withMe === 1;
});

console.log(allWithMe.length); // количество событий с моим участием

var allDayEvent = events.filter(function(event) {
	return event.allDay === 1;
	})
	.map(function (event) {
		return event.name;
	})
	.join(', ');
	
console.log(allDayEvent); // имена событий протяженностью весь день

var fiveStars = events.filter(function (event) {
		return event.stars === 5;
	})
	.map(function (event) {
		return event.name;
	})
	.join(', ');
	
console.log(fiveStars); // имена событий с пятью звёздами

var locationEvent = events.filter(function (event) {
		return event.location === 0;
	})
	.map(function (event) {
		return event.name;
	})
	.join(', ');
	
console.log(locationEvent); // имена событий, происходящих в первой ("нулевой") локации