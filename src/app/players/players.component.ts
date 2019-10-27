import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Player} from '../player';
import {HEROES} from '../playableCharacter';
import { PlayerService} from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {


  @Output() PlayerValue: EventEmitter<string> = new EventEmitter<string>();

  constructor( private playerService: PlayerService) { }

  selectedHero: Player;
  heroes: Player[];
  isShow = false;

  getHeroes(): void {
    this.playerService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelectX(hero: Player): void {
  this.selectedHero = hero;
  this.PlayerValue.emit(this.selectedHero.name);
  this.playerService.setPlayer(this.selectedHero.name);
  this.isShow = !this.isShow;
  }

  ngOnInit() {
    this.getHeroes();
  }

}
