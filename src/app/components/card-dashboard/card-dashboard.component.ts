import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss']
})
export class CardDashboardComponent {
  @Input() imagemUrl: string = ''
  @Input() title: string = ''
  @Input() texto: string = ''
}
