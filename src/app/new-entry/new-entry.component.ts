import { Component, OnInit } from '@angular/core';
import { Entry } from '../shared/entry.model';
import { UserService } from '../shared/user.service';
import { EntryService } from '../shared/entry.service';

@Component({
    templateUrl: 'new-entry.component.html',
    styleUrls: ['new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
    todaysDate: Date;
    entry: Entry;
    _didYesterday: string;
    _doingToday: string;
    _morningNotes: string;
    _didToday: string;
    _eveningNotes: string;

    constructor( private userService: UserService, private entryService: EntryService) { }

    ngOnInit() {
        // this.todaysDate = new Date;
        // this.retrieveEntry();
    }

    get didYesterday(): string {
        return this._didYesterday;
    }

    get doingToday(): string {
        return this._doingToday;
    }

    get morningNotes(): string {
        return this._morningNotes;
    }

    get didToday(): string {
        return this._didToday;
    }

    get eveningNotes(): string {
        return this._eveningNotes;
    }

    set didYesterday(value: string) {
        this._didYesterday = value;
    }

    set doingToday(value: string) {
        this._doingToday = value;
    }

    set morningNotes(value: string) {
        this._morningNotes = value;
    }

    set didToday(value: string) {
        this._didToday = value;
    }

    set eveningNotes(value: string) {
        this._eveningNotes = value;
    }


    morningSubmit() {
        console.log('submit morning data');
        //console.log('today\'s date: ', this.todaysDate.toDateString());

        console.log('Did Yesterday: ', this.didYesterday);
        console.log('Doing Today: ', this.doingToday);

        let timeStamp = new Date()

        let morningEntry = {
            userId: "bonadfjwef",                 //empty because non-slack users
            fullName: "John Doe",               //How 
            time_started: timeStamp,
            didYesterday: this.didYesterday,
            doingToday: this.doingToday,
            notes: this.morningNotes,
        }

        this.entryService.sendMorningEntry(morningEntry)
        

    }

    eveningSubmit() {
        // Need to send data to database
        console.log('submit evening data');
        //console.log('today\'s date: ', this.todaysDate.toDateString());
        console.log('Did Today: ', this.didYesterday);


       let timeStamp = new Date()

        let eveningEntry = {
            userId: "bonadfjwef",                 //empty because non-slack users
            fullName: "John Doe",               //How 
            time_finished: timeStamp,
            didToday: this._didToday,
            notes: this._eveningNotes,
        }

        this.entryService.sendEveningEntry(eveningEntry) 

    }

    retrieveEntry() {
        // if (this.userService.getCurrentUser()) {
        //     // this.entry = this.userService.getCurrentUser().entries.find(entry => entry.date === this.todaysDate.toDateString());
        //     // if ( this.entry ) {
        //     //     if ( this.entry.didYesterday ) {
        //     //         this._didYesterday = this.entry.didYesterday;
        //     //     }
        //     //     if ( this.entry.doingToday ) {
        //     //         this._doingToday = this.entry.doingToday;
        //     //     }
        //     //     if ( this.entry.start_notes ) {
        //     //         this._morningNotes = this.entry.start_notes;
        //     //     }
        //     //     if ( this.entry.didToday ) {
        //     //         this._didToday = this.entry.didToday;
        //     //     }
        //     //     if ( this.entry.end_notes ) {
        //     //         this._eveningNotes = this.entry.end_notes;
        //     //     }
        //     // } else {
        //         this._didYesterday = '';
        //         this._doingToday = '';
        //         this._morningNotes = '';
        //         this._didToday = '';
        //         this._eveningNotes = '';
        //     //}
        // }
    }

    // postMessageToSlack(time: string) {
    //     if (time === 'morning') {
    //         const messageToSend = `payload= {
    //             'username': 'WFH',
    //             'icon_url': 'https://assets/icon.png',
    //             'attachments': [{
    //                 'fallback': 'This attachement isn't supported.',
    //                 'title': '${this.userService.getCurrentUser().name} is working from home today [Morning]',
    //                 'color': '#ea3c3c',
    //                 'author_name': 'Work From Home',
    //                 'author_link': 'http://localhost:4200/login',
    //                 'fields': [{
    //                     'value': '_Did Yesterday:_ \n
    //                       ${this._didYesterday}\n
    //                       _Doing Today:_ \n
    //                       ${this._doingToday}\n
    //                       _Notes:_ \n
    //                       ${this._morningNotes}',
    //                     'short': true
    //                 }],
    //                 'mrkdwn_in': ['text', 'fields'],
    //                 'thumb_url': 'http://example.com/thumbnail.jpg'
    //             }]
    //         }`;


    //         const xmlhttp = new XMLHttpRequest(),
    //             webhook_url = 'https://hooks.slack.com/services/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',
    //             myJSONStr = messageToSend;
    //         xmlhttp.open('POST', webhook_url, false);
    //         xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //         xmlhttp.send(myJSONStr);
    //     } else {
    //         const messageToSend = `payload= {
    //             'username': 'WFH',
    //             'icon_url': 'https://assets/icon.png',
    //             'attachments': [{
    //                 'fallback': 'This attachement isn't supported.',
    //                 'title': '${this.userService.getCurrentUser().name} just finished working [Evening]',
    //                 'color': '#ea3c3c',
    //                 'author_name': 'Work From Home',
    //                 'author_link': 'http://localhost:4200/login',
    //                 'fields': [{
    //                     'value': '_Doing Today:_ \n${this._doingToday}\n_Notes:_ \n${this._eveningNotes}',
    //                     'short': true
    //                 }],
    //                 'mrkdwn_in': ['text', 'fields'],
    //                 'thumb_url': 'http://example.com/thumbnail.jpg'
    //             }]
    //         }`;


    //         const xmlhttp = new XMLHttpRequest(),
    //             webhook_url = 'https://hooks.slack.com/services/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',
    //             myJSONStr = messageToSend;
    //         xmlhttp.open('POST', webhook_url, false);
    //         xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //         xmlhttp.send(myJSONStr);

    //     }
    // }
}
