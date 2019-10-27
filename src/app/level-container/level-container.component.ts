import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Player } from '../player';
import { NgForm} from '@angular/forms';
import { MessageService} from '../message.service';
import { FlagValidatorService} from '../flag-validator.service';


@Component({
  selector: 'app-level-container',
  templateUrl: './level-container.component.html',
  styleUrls: ['./level-container.component.css']
})
export class LevelContainerComponent implements OnInit, OnChanges {

@Input() hero: Player;
@Input() level: number;

// loginForm: FormGroup;


  name = 'Angular 5';
  flag: string;
  scripter: string;
  isShow = true;
  story = this.storyWriter(0);
  constructor(private messageService: MessageService,
    private flagValidatorService: FlagValidatorService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {


  }

  validate(level: number, player: Player, flag: string) {
    // Check if the flag is correct
    if (this.flagValidatorService.flagcheck(level, flag)) {
      // Check player's current level
      const lvl: number = player.level;
      if (lvl <= level) {
        player.level++;
        alert('Correct!!! You may proceed to the next level!!!');
      }
    } else {
      alert('incorrect flag');
    }

  }

  downloadFile(href: string, filename: string) {
    const link: any  = document.createElement('a');
    link.download = filename;
    link.href = href;
    link.click();
  }

  onSubmit(f: NgForm) {

    console.log(f.value.first);
    console.log(this.hero);
    console.log(this.level);
    this.validate(this.level, this.hero, f.value.first);
    f.reset();
  }

  storyWriter(level: number): string {

    return this.messageService.storyWriter(level);
  }

  onLogin(f: NgForm) {

    // console.log(f.value.email);
    // alert(f.value.email + ' : ' + f.value.password);
    if (f.value.email === 'barbara@krxzy_ctf.com') {
      if (f.value.password === '0R4CL3/B4TG1RL') {
        alert('Congratulatoins!!! The flag is P3NGU1N_15_R1CH_2hK1HV5Vzj');
      } else {
        alert('Oops!!! Wrong Password!!!\n Hint: It\'s right there!!!...hidden...but right there');
      }
    } else {
      alert('Wrong email! Try again!');
    }
  }

  onXSS(f: NgForm) {

    if (f.value.first === 'dhzxlo') {
      alert('The flag is 0th3r-5id3_Crazier!_HWz3xELbBR');
    } else {
      alert('Wrong answer');
    }
  }

  collapse() {
    this.isShow = !this.isShow;
     /*  if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      } */
    }

  }


