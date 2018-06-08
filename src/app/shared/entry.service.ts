import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entry} from './entry.model';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private httpClient: HttpClient, private http: Http) { }

  getEntriesByName(fullName: string): Observable<Entry[]> {
    const url = 'https://pricey-giver.glitch.me/entries?name=' + fullName;
    return this.httpClient.get<Entry[]>(url); 
  }

  getEntriesByDate(date:Date): Observable<Entry[]> 
  {
    const url = 'https://pricey-giver.glitch.me/entries?date=' + date;

    return this.httpClient.get<Entry[]>(url); 
  }

  getEntriesByNameAndDate(name:string, date:Date): Observable<Entry[]> {
    const url = 'https://pricey-giver.glitch.me/entries?name=' + name + '&date=' + date;

    return this.httpClient.get<Entry[]>(url); 
  }

  getAllEntries(): Observable<Entry[]> 
  {
    const url = 'https://pricey-giver.glitch.me/entries';

    return this.httpClient.get<Entry[]>(url); 
  }

  sendMorningEntry(data: any) {
    const url = 'https://pricey-giver.glitch.me/start-day';
    console.log(data)
    this.http.post(url, data)
    .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        })
    // this.httpClient.post(url, data).subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.log("Error occured");
    //   }
    // );
  }

  sendEveningEntry(data: any) {
    const url = 'https://pricey-giver.glitch.me/end-day';
    console.log(data)
    this.httpClient.post(url, data).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }
}
