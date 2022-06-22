import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Concierto } from 'src/app/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-ver-concierto',
  templateUrl: './ver-concierto.page.html',
  styleUrls: ['./ver-concierto.page.scss'],
})
export class VerConciertoPage implements OnInit {
  concierto: Concierto;
  private enlace = "Conciertos/";
  constructor(public database: FirestoreService, public alert: AlertController, public router:Router,  public activate:ActivatedRoute) { }

  ngOnInit() {
    this.activate.paramMap.subscribe(paramMap => {
     const id = paramMap.get('conciertoId')
    })
  }

}
