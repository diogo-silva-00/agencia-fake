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
  textocard = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repudiandae ratione dolores exercitationem qui corrupti quasi consequuntur placeat similique eligendi voluptate, velit aut, ad aperiam. Nihil et praesentium iste sunt!'

}
