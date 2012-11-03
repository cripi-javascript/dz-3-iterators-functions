function getEventsCollection(size) {
	var i, events;
	events = [];
	for (i = 0; i < size; i++) {
		events.push(getRandomEvent());
	}
	return events;
}
var events = getEventsCollection(20);