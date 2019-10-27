import { Component, ViewEncapsulation } from '@angular/core';
import { PlayerService} from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  player: String = 'Batman';
  playerService: PlayerService;
  title = 'Gotham Crusade';

  valueInput(val: any) {
    console.log('Hits on Emitter on App: ' + val);
    if (val === 'batman') { // Change to 'Batman' if you are applying a differnent bbackground
    document.body.style.backgroundImage = 'url(\'Assets/all about the bat/nw.jpg\')';
    } else if (val === 'NightWing') {
    document.body.style.backgroundImage = 'url(\'Assets/all about the bat/nw.jpg\')';
    } else if (val === 'RedHood') {
      document.body.style.backgroundImage = 'url(\'Assets/all about the bat/RedHood.jpg\')';
    } else if (val === 'Robin') {
      document.body.style.backgroundImage = 'url(\'Assets/all about the bat/Damian Wayne.jpg\')';
    } else if (val === 'Red Robin') {
      document.body.style.backgroundImage = 'url(\'Assets/all about the bat/Tim Drake.jpg\')';
    } else if (val === 'Batgirl') {
      document.body.style.backgroundImage = 'url(\'Assets/all about the bat/345696_batgirl-wallpaper.jpg\')';
    } else if (val === 'BatWoman') {
      document.body.style.backgroundImage = 'url(\'Assets/all about the bat/batwoman-kathy-kane-comic-dc-universe-others-11573.jpg\')';
    } else if (val === 'BatWing') {
      document.body.style.backgroundImage = 'url(\'Assets/all about the bat/BatWing.jpg\')';
    } else if (val === 'huntress') { // Cap for Access
      document.body.style.backgroundImage = 'url(\'Assets/all about the bat/nw.jpg\')';
    } else if (val === 'catWoman') { // Cap for Access
      document.body.style.backgroundImage = 'url(\'Assets/all about the bat/nw.jpg\')';
    }
    // document.body.style.background = 'red';
  }

}
