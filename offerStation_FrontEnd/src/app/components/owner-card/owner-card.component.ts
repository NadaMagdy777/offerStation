import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-owner-card',
  templateUrl: './owner-card.component.html',
  styleUrls: ['./owner-card.component.css']
})
export class OwnerCardComponent {
  @Input() OwnerName:any;
  @Input() OwnerRate:any;
  @Input() OwnerImge:any;
}
