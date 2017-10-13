import { AuthService } from './../services/auth.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {ActivatedRoute, Router} from '@angular/router';

export interface Item { name: string; text: string }

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  @Input() plan: string;
  text: string;
  user: Object;
  private itemsCollection: AngularFirestoreCollection<Item>;
  messages: Observable<any[]>;

  constructor(private db: AngularFirestore, private auth: AuthService, private route:ActivatedRoute) {
        this.route.params.subscribe(params => {
          this.itemsCollection = this.db.collection<Item>(params['id']);
          this.messages = this.itemsCollection.valueChanges();
          this.user = this.auth.getLoggedUser();
        });
    }

  ngOnInit() {

  }

  onClick() {
      this.toggle.emit(true);
  }

  sendMessage() {
    this.itemsCollection.add({
        name: this.user ? this.user['username'] : 'Anónimo',
        text: this.text
    });
    this.text = "";
  }
}
