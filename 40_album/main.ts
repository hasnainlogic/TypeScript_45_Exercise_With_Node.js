interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

// Create three dictionaries representing different albums
let album1: Album = make_album('Artist 1', 'Album 1', 10);
let album2: Album = make_album('Artist 2', 'Album 2');
let album3: Album = make_album('Artist 3', 'Album 3', 15);

// Print each return value
console.log(album1);
console.log(album2);
console.log(album3);
