test("hello test", function() {
    "use strict";

    var result = new Past(collection);
    var results = new SortByTime(result);
    console.log("Result: " + results.map (function (events){
        return "\n" + event.show(events);
    }));
    ok( "1" == "1", "Passed!" );
});
