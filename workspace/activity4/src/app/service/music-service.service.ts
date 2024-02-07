import { Injectable } from '@angular/core';

import exampledata from '../../data/sample-music-data.json';

import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { Track } from '../models/Track';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MusicServiceService {

private host = "http://localhost:4200";

	private readonly artists: Artist[] = [];
	private readonly albums: Album[] = [];

	constructor(private http: HttpClient) {
		this.createArtists();
		this.createAlbums();
	}

	private createArtists(): void {
		this.artists.push(new Artist(0, 'The Beatles'));
	}

	private createAlbums(): void {
		exampledata.forEach((data: any) => {
			if (data.artist === 'The Beatles') {
				const tracks = data.tracks.map((trackData: any) => new Track(trackData.id, trackData.number, trackData.title, trackData.lyrics, trackData.video));
				const album = new Album(data.id, data.title, data.artist, data.description, data.year, data.image, tracks);
				this.albums.push(album);
			}
		});
	}

	public getArtists(callback: (artists: Artist[]) => void): void {
		this.http.get<Artist[]>(this.host + "/artists").
		subscribe((artists:Artist[]) => {
			callback(artists)
		});
	}

	public getAlbums(callback: (albums: Album[]) => void): void {
		this.http.get<Album[]>(this.host + "/albums").
		subscribe((albums:Album[]) => {
			callback(albums)
		});
	}

	public getAlbum(artist: string, id: number): Album | undefined {
		const album = this.albums.find((a) => a.Artist === artist && a.Id === id);

		if (album) {
			const tracks = album.Tracks.map((track) => new Track(track.Id, track.Number, track.Title, track.Lyrics, track.Video));
			return new Album(album.Id, album.Title, album.Artist, album.Description, album.Year, album.Image, tracks);
		}

		return undefined;
	}
	
	public getAlbumsOfArtist(artistName: String, callback: (albums: Album[]) => void): Album[] {
		let request = this.host + `/albums/${artistName}`;
		console.log('request', request);
		this.http.get<Album[]>(request).
		subscribe((albums: Album[]) => {
			console.log('have albums', albums);
			callback(albums);
		});
		return this.albums;
	}

	public createAlbum(album: Album, callback: () => void): void {
		this.albums.push(album);
		this.http.post<Album>(this.host + "/albums", album)
		.subscribe((data) => {
			callback();
		});
	}

	public updateAlbum(album: Album, callback: () => void): void {
		this.http.put<Album>(this.host + "/albums", album)
		.subscribe((data) => {
			callback();
		});
	}

	public deleteAlbum(id: number, callback: () => void): void {
		this.http.delete<Album>(this.host + "/albums/" + id)
		.subscribe((data) => {
			callback();
		});
	}
}
