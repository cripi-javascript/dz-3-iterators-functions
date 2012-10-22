test('Set location',function () {
    "use strict";    
    var testEvent = Event(new Date(1), new Date(2), "Earth"),gps,name;
    testEvent.setLocation(gps,"");
    deepEqual(testEvent.location, {
                    "gps" : {"x": 0,"y": 0},
                    "nameLocation" : "Earth"
                }, "GPS - некорректный => установить значения по умолчанию");
    testEvent.setLocation("Not gps","");
    deepEqual(testEvent.location, {
                    "gps" : {"x": 0,"y": 0},
                    "nameLocation" : "Earth"
        }, "GPS - не содержит X  или Y => установить значения по умолчанию");
    testEvent.setLocation({"x": 0,"y": 0},[]);
    deepEqual(testEvent.location, {
                    "gps" : {"x": 0,"y": 0},
                    "nameLocation" : "Earth"
                }, "Название места не строка => установить значения по умолчанию");
    testEvent.setLocation({"x": 1,"y": 2},"Moon");
    deepEqual(testEvent.location, {
                    "gps" : {"x": 1,"y": 2},
                    "nameLocation" : "Moon"
                }, "GPS - не содержит X  или Y => установить значения по умолчанию");
    
});