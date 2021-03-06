import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor() { }
  type: String = 'iso';

  @Output() eventExecute = new EventEmitter();

  ngOnInit(): void {
  }

  execute(){
      this.eventExecute.emit(this.type);
  }

}
