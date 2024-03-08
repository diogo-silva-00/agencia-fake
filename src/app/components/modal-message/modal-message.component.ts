import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent {
  @Output() changeClose: EventEmitter<any> = new EventEmitter()

  handleClick() {
    this.changeClose.emit()
  }

}
