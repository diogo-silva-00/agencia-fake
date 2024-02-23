import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  urlDaImagemPc = 'assets/programacao.png'
  urlDaImagemCell = 'assets/smartphone.png'
  titleSites = 'Desenvolvimento de sites'
  titleApps = 'Desenvolvimento de Apps'
  titleMarkting = 'Desenvolvimento de markting'


}
