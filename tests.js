test( "hello test", function() {

    var results = ComeThrough(collection, 20);

    console.log("Result: " + results.map (function (events){
        return "\n" + event.show(events);
    }));
    ok( "1" == "1", "Passed!" );
});
