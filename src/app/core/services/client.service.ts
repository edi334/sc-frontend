import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private firestore: AngularFirestore) { }

  // tslint:disable-next-line:typedef
  getClients() {
    return this.firestore.collection('clients').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  createClient(client: Client) {
    return this.firestore.collection('clients').add(client);
  }

  // tslint:disable-next-line:typedef
  deleteClient(clientId: string) {
    this.firestore.doc('clients/' + clientId).delete();
  }
}
