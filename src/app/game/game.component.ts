import {Component} from '@angular/core';
import {PlayerComponent} from "../player/player.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    PlayerComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
}
