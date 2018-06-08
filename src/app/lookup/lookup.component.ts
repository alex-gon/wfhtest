import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Entry } from '../shared/Entry.model';
import { EntryService } from '../shared/entry.service';
import { Component, OnInit } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { Options } from 'selenium-webdriver/firefox';

@Component({
  templateUrl: 'lookup.component.html',
  styleUrls: ['lookup.component.css']
})

export class LookupComponent implements OnInit {
  users: User[];
  selectedUserName: string;
  date: Date
  entry: Entry;
  showQueryResults = false;
  entries: Entry[]

  constructor(private userService: UserService, private entryService: EntryService) {
  }

  ngOnInit() {


  }


  exportToExcel() {

    this.entryService.getAllEntries().subscribe((entries: Entry[]) => {
      this.entries = entries;
    });

    var head = ['Full Name', 'Did Yesterday', 'Doing Today', 'Start Notes', 'Start Time' , 'Did Today' , 'End Notes' , 'Time Finished' , 'Hours Worked'   ]

    new Angular2Csv(this.entries, "General-Query" ,{headers: (head)});

  }

  receiveEmployee($event) {
    this.selectedUserName = $event;
    // if (this.users) {
    //     this.selectedUser = this.users.find(u => u.name === this.selectedUserName);
    // }


  }

  receiveDate($event) {
    this.date = $event;
  }

  searchEntry() {
    this.showQueryResults = false

    if ( !this.selectedUserName && !this.date) {
      this.entryService.getAllEntries().subscribe((entries: Entry[]) => {
        this.entries = entries;
      });
    }

    //Filter by only user
    else if (this.selectedUserName && !this.date) {
      this.entryService.getEntriesByName(this.selectedUserName).subscribe((entries: Entry[]) => {
        this.entries = entries;
      });
    }

    else if (this.date && !this.selectedUserName) {
      this.entryService.getEntriesByDate(this.date).subscribe((entries: Entry[]) => {
        this.entries = entries;
      });
    }
    else { //todo: fix this with Robby's filter
      this.entryService.getEntriesByNameAndDate(this.selectedUserName, this.date).subscribe((entries: Entry[]) => {
        this.entries = entries;
      });
    }

    this.showQueryResults = true

    // this.entryService.getEntriesByName(this.selectedUser).subscribe((entries: Entry[]) => {
    //   console.log(entries);
    //   // this.entry = entries[0];
    //   // this.showQueryResults = true;
    // });
    // if (this.selectedUser && this.date) {
    //     this.entry = this.selectedUser.entries.find(entry => entry.date === this.date.toDateString());
    //     if (!this.entry) {
    //         this.entry = {
    //             date: this.date.toDateString(),
    //             morning_startTime: '--',
    //             morning_didYesterday: '--',
    //             morning_doingToday: '--',
    //             morning_notes: '--',
    //             evening_endTime: '--',
    //             evening_didToday: '--',
    //             evening_notes: '--'
    //         };
    //     }
    // }
  }
}
