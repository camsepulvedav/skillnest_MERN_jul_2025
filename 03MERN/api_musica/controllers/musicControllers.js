import { faker }  from "@faker-js/faker"

const generateRandomSong = () => ({
            id: faker.string.uuid(),
            title: faker.music.songName(),
            artist: faker.music.artist(),
            album: faker.music.album(),
            length: faker.number.int({ min: 35, max: 180 })+ " minutes",
            genre: faker.music.genre(),
            dateOfLaunch: faker.date.past(),
        });

export const listSong = (_req, res) => {
    let song = [generateRandomSong()];
    return res.json(song);
}

export const createPlaylist = (_req, res) => {
    let playlist = [];

    const songsCount = faker.number.int({min:3, max:10});
    const songs = [];

    for (let i = 0; i <= songsCount; i++) {
        songs.push(generateRandomSong());
    }

    let randomPlaylistData = {
        idPlaylist: faker.string.uuid(),
        name: faker.company.name() + "'s playlist",
        description: faker.lorem.sentence({ min: 3, max: 8 }),
        songs: songs,
        creator: faker.internet.username(),
        dateOfCreation: faker.date.recent(),
    };

    playlist.push(randomPlaylistData);
    return res.json(playlist);
}