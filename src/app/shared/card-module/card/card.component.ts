import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() image: string;
  @Input() selected: boolean;
  @Input() url: string;
  @Output() voteGame = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  votedGame(id: number) {
    this.toggleSelectImage();
    this.voteGame.emit({id: id, voted: this.selected});
  }

  toggleSelectImage() {
    this.selected = !this.selected;
  }

}
