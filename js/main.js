/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */

var jsonData = "{\n" +
    "  \"friday\": {\n" +
    "    \"dayTitle\": \"Vrijdag 1 juni\",\n" +
    "    \"events\": [\n" +
    "      {\n" +
    "        \"name\": \"Opbouwen\",\n" +
    "        \"start\": 1200,\n" +
    "        \"end\": 1500,\n" +
    "        \"img\": \"img/opbouwen.png\"\n" +
    "      },\n" +
    "      {\n" +
    "        \"name\": \"Tent opzetten\",\n" +
    "        \"start\": 1900,\n" +
    "        \"end\": 2100,\n" +
    "        \"img\": \"img/tent.png\"\n" +
    "      },\n" +
    "      {\n" +
    "        \"name\": \"Feest\",\n" +
    "        \"start\": 2200,\n" +
    "        \"end\": 2400,\n" +
    "        \"img\": \"img/tent.png\"\n" +
    "      }\n" +
    "    ]\n" +
    "  }\n" +
    "}";

var calendar = JSON.parse(jsonData);

$(document).ready(function(){

    var s = skrollr.init();

    addCalendarToHTML(calendar);
});

function addCalendarToHTML(calendar){
    var html = createEvent(calendar.friday.events[0]);
    console.log(html);
    $(".calendar-body").html(html);
}

function createEvent(eventData){
    var html = "<div class='timeslot'></div>";
    return html
}