function success(location) {
    var entryLocation = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
    };
    var text = document.getElementById('text').value;
    diary.addEntry(text, entryLocation);
    storage.set();
    window.location = 'index.html';
}

function failure () {
    alert('Please allow location ;)');
}

function handleSubmit (event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(success, failure);
}

var diary = {
    entries: storage.get(),
    addEntry: function (text, location) {
        this.entries.push({
            text: text,
            date: new Date(),
            location: location
        });
    }
};