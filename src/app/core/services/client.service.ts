import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private firestore: AngularFirestore) { }

  getClients() {
    return this.firestore.collection('clients').snapshotChanges();
  }

  createClient(client: Client) {
    return this.firestore.collection('clients').add(client);
  }

  deleteClient(clientId: string) {
    this.firestore.doc('clients/' + clientId).delete();
  }

  updateClient(client: Client){
    delete client.id;
    this.firestore.doc('clients' + client.id).update(client);
  }
}
