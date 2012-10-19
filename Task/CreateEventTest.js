test('Create event', function () {
    "use strict";
    var dateToString = function (currentTime) {
        var month = currentTime.getMonth() + 1, day = currentTime.getDate(), year = currentTime.getFullYear();
        return month + "/" + day + "/" + year;
    }, undefinedDate, testEvent = new Event(undefinedDate);
    equal(dateToString(testEvent.start), dateToString(new Date()));
    testEvent = new Event();
    equal(dateToString(testEvent.start), dateToString(new Date()));
    testEvent = new Event(new Date(5), new Date(3));
    ok(testEvent.start.getTime() < testEvent.end.getTime());
    testEvent = new Event(new Date(1), new Date(2));
    ok(testEvent.start.getTime() < testEvent.end.getTime());
});