import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})



export class SongsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  }


  constructor(private http: HttpClient) { }

  public getSongs(): Observable<any> {
    try {
      return this.http.get<any>(`${BASE_URL}/library`);
    } catch (error) {
      console.log(error);
    }

  }


  public getPlayList(): Observable<any> {
    try {
      return this.http.get<any>(`${BASE_URL}/playlist`);
    } catch (error) {
      console.log(error);
    }

  }

  public createNewPlaylist(value): Observable<any> {
    try {
      const data = {
        "name": value.name,
      }
      return this.http.post<any>(`${BASE_URL}/playlist`, data);

    } catch (error) {
      console.log(error)
    }
  }

  public deletePlaylist(playListid): Observable<any> {
    try {
      return this.http.delete<any>(`${BASE_URL}/playlist/${playListid}`);

    } catch (error) {
      console.log(error)
    }
  }


  public addSongToPlaylist(playListid, songData): Observable<any> {
    try {
      const data = {
        "name": playListid.name,
        "songs": [songData.id]
      }
      return this.http.post<any>(`${BASE_URL}/playlist/${playListid}`, data);
    } catch (error) {
      console.log(error)
    }
  }

}
