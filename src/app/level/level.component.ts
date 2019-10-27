import { Component, OnInit, Input } from '@angular/core';
import { PlayerService} from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  @Input() hero: Player;
  constructor( private playerService: PlayerService) { }

  Levels: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  selectedLevel: number;
  onSelect(level: number): void {
    // Player Validation
    if (this.hero.level >= level) {
    this.selectedLevel = level;
    } else {
      alert('Not authorized');
    }
  }

  ngOnInit() {
  }

}
