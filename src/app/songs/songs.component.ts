import { Component, OnInit, PipeTransform } from '@angular/core';
import { SongsService } from '../services/songs.service';
import _ from "lodash";
import { DecimalPipe } from '@angular/common';
import { FilterUtils } from 'primeng/utils';
import { Isongs } from '../songs/songs.data';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
  providers: [DecimalPipe]
})




export class SongsComponent implements OnInit {
  public allSongs: any;
  public enableAdd: boolean = false;
  public enableName: boolean = false;
  public playlistName: Isongs;
  public allPlayList: Isongs;
  public playListData: Isongs;
  public newId: Isongs;
  public errorShow: boolean = false;
  public songNames: [];
  public cols: any[];
  public filteredSongs: any[];



  constructor(private songsService: SongsService) {

    this.cols = [
      { field: 'title', header: 'Songs', filterMatchMode: 'custom-equals' },
      { field: 'album', header: 'Album', filterMatchMode: 'custom-equals' },
      { field: 'artist', header: 'Artist', filterMatchMode: 'custom-equals' }
    ];

  }


  ngOnInit(): void {
    this.getLib();
    this.getPlayList();

    FilterUtils['custom'] = (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return parseInt(filter) > value;
    }

  }


  public getLib() {
    this.songsService.getSongs().subscribe(data => {
      this.allSongs = data;
    }, err => console.log(err));

  }

  filterWithContains(event) {
    this.filteredSongs = FilterUtils.filter(this.allSongs, ['value'], event.query, "contains");
  }

  public getPlayList() {
    this.songsService.getPlayList().subscribe(data => {
      this.allPlayList = data;
      data.forEach(onePlaylist => {
        onePlaylist['songsName'] = [];
        onePlaylist.songs.forEach(oneSong => {
          let elementSongName = this.allSongs.filter(item => {
            if (oneSong === item.id) {
              return item.title;
            }
          })
          onePlaylist['songsName'].push(elementSongName);
        })
      });

    }, err => console.log(err));

  }

  public addSongsToPlaylist(data) {
    this.enableAdd = true;
    this.playListData = data;
  }

  public addSongToPlaylist(song) {
    this.newId = this.playListData;
    this.songsService.addSongToPlaylist(this.newId, song).subscribe(data => {

    })
  }

  public createPlaylist(playlistName) {
    if (playlistName) {
      this.songsService.createNewPlaylist(playlistName).subscribe(data => {

      })
    } else {
      this.errorShow = true;
    }

  }

  public deletePlaylist(playListid) {
    this.songsService.deletePlaylist(playListid).subscribe(data => {

    })
  }

}
