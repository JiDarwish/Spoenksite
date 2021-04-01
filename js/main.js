// Right margin in the calendar in %
const CALENDAR_MARGIN = 3;

// Add sponsors here and they will appear in the footer.
var sponsors = [
  {
    name: 'UbiOps',
    url: 'https://ubiops.com',
    img: 'img/sponsors/ubiops.png',
  },
];

function createSponsor(sponsorData) {
  var html = '';
  html += "<div class='col-sm-4 col-xl-2 sponsor'>";
  html +=
    "<a href='" +
    sponsorData.url +
    "' target='_blank'><img class='img-sponsor' src='" +
    sponsorData.img +
    "'></a>";
  html += '</div>';
  return html;
}

// Add events to this calendar and change the width to make it look perfect.
var calendar = {
  saturday: {
    dayTitle: 'Zaterdag 29 mei',
    events: [
      {
        name: 'Wedstrijden',
        start: '10:00',
        width: 0.25,
        img: 'img/calendar/bal.png',
      },
      {
        name: 'Lunch',
        start: '13:00',
        width: 0.15,
        img: 'img/calendar/eat.png',
      },
      {
        name: 'Wedstrijden',
        start: '14:00',
        width: 0.25,
        img: 'img/calendar/bal.png',
      },
      {
        name: 'BBQ',
        start: '17:00',
        width: 0.15,
        img: 'img/calendar/bbq.png',
      },
      {
        name: 'Zittende borrel',
        start: '20:30',
        width: 0.2,
        img: 'img/calendar/beer.png',
      },
    ],
  },
  sunday: {
    dayTitle: 'Zondag 30 mei',
    events: [
      {
        name: 'Wedstrijden',
        start: '10:00',
        width: 0.25,
        img: 'img/calendar/bal.png',
      },
      {
        name: 'Lunch',
        start: '13:00',
        width: 0.15,
        img: 'img/calendar/eat.png',
      },
      {
        name: 'Wedstrijden',
        start: '14:00',
        width: 0.25,
        img: 'img/calendar/bal.png',
      },
      {
        name: 'Prijsuitreiking',
        start: '18:00',
        width: 0.2,
        img: 'img/calendar/bal.png',
      },
      {
        name: 'empty',
        width: 0.15,
      },
    ],
  },
};

$(document).ready(function () {
  $('.smooth-goto').on('click', function () {
    $('html, body').animate(
      { scrollTop: $(this.hash).offset().top - 50 },
      1000
    );
    return false;
  });

  var s = skrollr.init();
  if (s.isMobile()) {
    s.destroy();
  }

  addCalendarToHTML(calendar);
});

function addCalendarToHTML(calendar) {
  var html = '';
  // html += createDay(calendar.friday);
  html += createDay(calendar.saturday);
  html += createDay(calendar.sunday);
  console.log(html);
  $('.calendar-body').html(html);
  html = '';

  for (var i = 0; i < sponsors.length; i++) {
    html += createSponsor(sponsors[i]);
  }
  $('.sponsor-body').html(html);
}

function createDay(dayData) {
  var html = '';

  html +=
    "<span class='calendar-day-title'><b>" + dayData.dayTitle + '</b></span>';
  html += "<div class='row calendar-day col-sm-12 mx-auto'>";

  for (var i = 0; i < dayData.events.length; i++) {
    html += createEvent(dayData.events[i], i === dayData.events.length - 1);
  }
  html += '</div>';
  return html;
}

function createEvent(eventData, last) {
  console.log(last);
  var margin = last ? 0 : CALENDAR_MARGIN;
  console.log(margin);
  var html = '';
  if (eventData.name === 'empty') {
    html +=
      "<div class='calendar-size d-none d-sm-block' style='width:" +
      (eventData.width * 100 - margin) +
      '%; margin-right:' +
      margin +
      "%'>";
    html += "<div class='calendar-entry calendar-empty'>";
    html += '</div>';
    html += '</div>';
  } else {
    html +=
      "<div class='calendar-size' style='width:" +
      (eventData.width * 100 - margin) +
      '%; margin-right:' +
      margin +
      "%'>";
    html += "<div class='calendar-entry calendar-event'>";
    html += "<img src='" + eventData.img + "' class='calendar-image'>";
    html += "<p class='calendar-description'>" + eventData.start + '</p>';
    html += "<p class='calendar-description'>" + eventData.name + '</p>';
    html += '</div>';
    html += '</div>';
  }
  return html;
}
