import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  storyWriter(lvl: number): string {
    if (lvl === 0) {
      return 'Instructions \n 1) All levels are incremental. Therefore, the previous level must be' +
      'completed, and the proper flag must be submitted to get to the next level.\n 2) Please keep all' +
      'flags found in a text file. This is a one page app, and accidental refreshing would reset the ' +
      'whole game, including the passed levels';

    } else  if (lvl === 1) {
      return ' The cipher text is given. hint to the key, as well as a lookup tableis given. Use this to get the plain text which ' +
      'will be the flag';

    } else if (lvl === 2) {
        return 'The cipher text as well as a hint to the key is given. The player must figure out the key and decrypt it thr cipher ' +
        'text to find the flag';

    } else if (lvl === 3) {
      return 'The flag is hidden in a file within a folder structure. Find the flag';

    } else if (lvl === 4) {
      return 'The flag is hidden in a compressed file with an encoded directory. Find the flag ';

    } else if (lvl === 5) {
      return 'An executable to enter a password is given. Try to play around with it and find the password';

    } else if (lvl === 6) {
      return 'An assenmby code is given. Instructions as well as hints to the expeced anser is given in the code';

    } else if (lvl === 7) {
      return 'A java code is given. Use this code to reverse engineer the flag!!!';

    } else if (lvl === 8) {
      return 'Figure out the input value by using the given code';

    } else if (lvl === 9) {
      return 'In this level, you\'ll have to ask for "the Oracle\'s" help. ' +
      'You can use her credentials to find the next flag! \n' +
      'Hint: She is a part of our CTF team, so you can find her details along' +
      ' with the rest of the authors of this site!!! The password is hidden around here as well';

    } else if (lvl === 10) {
      return 'Check out this file!!! Use all your senses to get the flag';

    } else if (lvl === 11) {
      return 'Try to hack your way into Ra\'s al Ghul\'s chat';

    } else if (lvl === 12) {
      return 'Test';

    } else if (lvl === 13) {
      return 'You are given an output string. Try to find the Original string which is the flag. A similar example is given for you';

    } else if (lvl === 14) {
      return 'In this level "Harley" will be the one to help you get the flag';

    } else if (lvl === 15) {
      return 'Try reversing the Acid flower byte code and use one of the inputs as the password for the zip';

    } else {
      return 'test';
    }
  }
}
