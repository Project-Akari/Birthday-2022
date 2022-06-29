import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  hidePrevBtn: boolean = true;
  hideNextBtn: boolean = false;

  @Input() onPrev: () => void;
  @Input() onNext: () => void;
  constructor() { }

  ngOnInit(): void {
  }
}
