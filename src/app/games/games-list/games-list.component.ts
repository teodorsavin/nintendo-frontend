import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { ToastrService, TOASTR_TOKEN } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  private games: any;
  private isLoaded: boolean = false;
  private errorMessage: string;
  private totalVotes: number = 0;
  private maxVotes: number = 5;

  constructor(public apiService: ApiService, @Inject(TOASTR_TOKEN) private toastr: ToastrService) { }

  ngOnInit() {
    this.apiService.getPopularGames().subscribe(
      (games) => {
        this.games = games;
        this.isLoaded = true;
      },
      (err) => {
        this.isLoaded = true;
        console.log(err);
        this.errorMessage = 'There was an error! Please check your backend!';
      }
    );
  }

  voteGame(game: { id: number, voted: boolean }) {
    console.log(game);
    if (this.totalVotes < this.maxVotes && game.voted === true || game.voted === false) {
      this.apiService.voteGame(game).subscribe((vote) => {
        if (vote[0].voted) {
          this.totalVotes++;
          this.toastr.success('Your vote was registered!', 'Thank you!');
        } else {
          this.totalVotes--;
          this.toastr.warning('Your vote was unregistered!', 'Thank you!');
        }
      });
    } else {
      this.toastr.error(`You voted already ${this.maxVotes} games!`, 'Your vote was not registered!');
    }

  }

}
