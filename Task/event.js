/**
 * Creates an instance of Event.
 *
 * @param {start} - is start event
 * @param {end} - is end event
 * @param {location} - is location event
 * @field {start} - is start event
 * @field {end} - is end event
 * @field {location} - location - is gps and name of event's place
 * @field {participants} - participants - array of participants
 * @field {stars} - is assess the importance of the event
 * @field {cost} - is price for entry
 * @method {setLocation} - is setter for location's field
 * @method {leaveMark} - is setter for stars's field (0,1,2,3,4,5 - допустимые значения)
 */
function Event(start, end, location) {
    "use strict";
    var dateValidator = function (date) {
        if (Object.prototype.toString.call(date) === "[object Date]") {
            if (!isNaN(date.getTime())) {
                return true;
            }
        }
        return false;
    }, tempDate;
    if (!dateValidator(start)) {
        start = new Date();
    }
    if (!dateValidator(end)) {
        end = start;
    }
    if (start.getTime() > end.getTime()) {
        tempDate = end;
        end = start;
        start = tempDate;
    }
    location = location || {
        "gps": {x: 0, y: 0},
        "nameLocation": "Earth"
    };
    return {
        "start": start,
        "end": end,
        "location": location,
        "participants": [],
        "stars": 0,
        "cost": 0,
        "setLocation": function (gps, name) {
            if (typeof gps !== "undefined"  && typeof gps.x !== "undefined" && typeof gps.y !== "undefined" && typeof name === "string") {
                this.location.gps = gps;
                this.location.nameLocation = name;
            } else {
                this.location = {
                    "gps" : {"x": 0, "y": 0},
                    "nameLocation" : "Earth"
                };
            }
        },
        "leaveMark": function (stars) {
            if (isNaN(parseFloat(stars)) || !isFinite(stars) || stars < 0) {
                stars = 0;
            }
            if (stars > 5) {
                stars = 5;
            }
            stars = (stars - (stars % 1)); //обрезаем дробную часть
            this.stars = stars;
        }
    };
}