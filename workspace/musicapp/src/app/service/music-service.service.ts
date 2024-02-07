import { Injectable } from '@angular/core';
import * as exampledata from '../data/sample-music-data.json';
import { Artist } from './../models/artists.model';
import { Album } from '../models/albums.model';



@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  private albums: Album[] = exampledata;
  constructor() { }
  getArtists(): Artist[] {

  }
  getAlbum(artist:string): Album {

  }
  getAlbum(artist:string, id:number): Album {

  }
  createAlbum(album: Album): number {
    this.albums.push(new Album());
  }
  updateAlbum(album: Album): number {

  }
  DeleteAlbum(id:number, artist:string): number {
    
  }
}
