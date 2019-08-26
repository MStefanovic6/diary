var storage = {
    set: function () {
        localStorage.setItem('diary-entries', JSON.stringify(diary.entries));
    },
    get: function () {
        return JSON.parse(localStorage.getItem('diary-entries')) || [];
    }
};