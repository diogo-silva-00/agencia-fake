import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss']
})
export class CardDashboardComponent {
  @Input() imagemUrl: string = ''
  @Input() title: string = ''
  @Input() texto: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repudiandae ratione dolores exercitationem qui corrupti quasi consequuntur placeat similique eligendi voluptate, velit aut, ad aperiam. Nihil et praesentium iste sunt!'
}
