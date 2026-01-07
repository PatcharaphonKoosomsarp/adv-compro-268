class Media {
    constructor(info) {
        this.publisher = info.publisherDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}
const mySong = new Song({
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publisherDate: "1975"
});

console.log(mySong);