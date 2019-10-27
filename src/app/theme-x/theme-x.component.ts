import { Component, OnInit, OnChanges } from '@angular/core';
import { PlayerService} from '../player.service';

@Component({
  selector: 'app-theme-x',
  templateUrl: './theme-x.component.html',
  styleUrls: ['./theme-x.component.css']
})
export class ThemeXComponent implements OnInit, OnChanges {


  player: String = 'Batman';
  constructor(private playerService: PlayerService) {}

  ngOnInit() {
  }

  valueInput(val: any) {
    console.log('Hits on Emitter: ' + val);
    document.body.style.backgroundImage = 'Assets/All about the bat/nw.jpg';
    document.body.style.backgroundColor = 'red';
  }

  ngOnChanges() {
    if (this.playerService.getPlayer()) {
      this.player = this.playerService.getPlayer();
      alert(this.player);
      console.log('Hits on Changes: ' + this.player);
    }

  }


}
