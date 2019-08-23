import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-game-votes',
  templateUrl: './game-votes.component.html',
  styleUrls: ['./game-votes.component.scss']
})
export class GameVotesComponent implements OnInit {

  private votes: any;
  private isLoaded: boolean;
  public errorMessage: string;

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getVotes().subscribe(
      (votes) => {
        this.votes = votes;
        this.isLoaded = true;
      },
      (err) => {
        this.isLoaded = true;
        console.log(err);
        this.errorMessage = 'There was an error! Please check your backend!';
      }
    );
  }

}
