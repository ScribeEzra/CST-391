import { Track } from '../Tracks/tracks.model';

export interface Album {
    albumId: number,
    title: string,
    artist: string,
    description: string,
    year: string,
    image: string,
    tracks: Track[]
}
