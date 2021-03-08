import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client.model';
import {ClientService} from '../../../core/services/client.service';
import {NgForm} from '@angular/forms';
import {PageTitleService} from '../../../core/services/page-title.service';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.scss']
})
export class ClientRegistrationComponent implements OnInit {

  clientForm: Client;

  constructor(private fb: ClientService,
              private pageTitleService: PageTitleService) {
    this.pageTitleService.setTitle('Register');
  }

  ngOnInit(): void {
  }

  Register(regForm: NgForm) {
    this.clientForm = regForm.form.value;
    this.save();
  }

  private save() {
    this.fb.createClient(this.clientForm);
  }
}

