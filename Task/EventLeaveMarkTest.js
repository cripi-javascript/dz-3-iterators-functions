test('Leave Mark', function () {
    "use strict";
    var testEvent = Event(new Date(1), new Date(2), "Earth");
    testEvent.leaveMark("No number");
    equal(testEvent.stars, 0, 'Если звездочку передали в виде не числа, то 0');
    var undefinedVar;
    testEvent.leaveMark(undefinedVar);
    equal(testEvent.stars, 0, 'Если звездочку забыли объявить, то 0');
    testEvent.leaveMark(-1);
    equal(testEvent.stars, 0, 'Звездочка не может быть меньше 0');
    testEvent.leaveMark(6);
    equal(testEvent.stars, 5, 'Звездочка не может быть больше 5');
    testEvent.leaveMark(3);
    equal(testEvent.stars, 3, '0-5 звездочка не изменяется, если целая');
    testEvent.leaveMark(3.124);
    equal(testEvent.stars, 3, 'Звездочки - Int');
});