var selectedView = 'entries-view-text';

function toggleView(event) {
    selectedView = event.target.id;
    render();
}

var entriesText = document.getElementById('entries-text');
var entriesLocation = document.getElementById('entries-location');

function render() {
    if (selectedView === 'entries-view-text') {
        entriesText.style.display = 'block';
        entriesLocation.style.display = 'none';
    } else {
        entriesText.style.display = 'none';
        entriesLocation.style.display = 'block';
    }
}
render();

/*
var eventsOnViewEntriesPage = {
    print: function () {
        window.print();
    }
};

var displayOfTheEntries = {
        createLocationButton: function () {
        var locationButton = document.createElement('button');
        locationButton.textContent = 'Location';
        locationButton.type = 'submit';
        return this.createLocationButton;
    },
    display: function () {
        var entriesList = document.querySelector('ul');
        entriesList.innerHTML = '';

        // diary.entries.forEach(function () {
        //     var li = document.createElement('li');
        //     var article = document.createElement('article');

        //     li.appendChild(article);
        //     entriesList.appendChild(li);
        // })
    },
    dateAndTime: function () {
        var date = new Date();
        var today = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + '.';
        var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        var datetime = today + ' ' + 'at' + ' ' + time;
        return datetime;
    }
};
*/

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function generateDateDisplayFormat(dateString) {
    /*Timestamp string
    dateString
    A string value representing a date, specified in a format recognized by the Date.parse() method (these formats are IETF-compliant RFC 2822 timestamps and also strings in a version of ISO8601).
    Note: Parsing of date strings with the Date constructor (and Date.parse(), which works the same way) is strongly discouraged due to browser differences and inconsistencies. Support for RFC 2822 format strings is by convention only. 
    Support for ISO 8601 formats differs in that date-only strings (e.g. "1970-01-01") are treated as UTC, not local. */

        var date = new Date(dateString);
        var displayFormat = '';
        var dayNumber = date.getDay();
        var dayName = days[dayNumber];
        displayFormat = dayName + ', ';

        var dayOfTheMonth = date.getDate();
        displayFormat = displayFormat + dayOfTheMonth + ' ';
        
        var monthNumber = date.getMonth();
        var monthName = months[monthNumber];
        displayFormat = displayFormat + monthName + ', ';
        
        var year = date.getFullYear();
        displayFormat = displayFormat + year;
        
        return displayFormat;
    }

    renderEntries();

    function renderEntries () {
        var entries = storage.get();
        var ul = document.querySelector('ul');
        entries.forEach(function (entry) {
            var li = document.createElement('li');
            var article = document.createElement('article');
            var span = document.createElement('span');
            // TODO: make this readable
            span.textContent = generateDateDisplayFormat(entry.date);
            
            var button = document.createElement('button');
            button.textContent = entry.location.latitude.toString() + entry.location.longitude.toString();
            var paragraph = document.createElement('p');
            paragraph.textContent = entry.text;
            article.appendChild(span);
            article.appendChild(document.createElement('br'));
            article.appendChild(button);
            article.appendChild(paragraph);
            li.appendChild(article);
            ul.appendChild(li);
        });
    }