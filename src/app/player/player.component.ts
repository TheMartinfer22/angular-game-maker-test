import { Component, HostListener, OnInit } from '@angular/core';
import { GameDataService } from '../service/game-data.service';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  playerPosition = { x: 50, y: 50};
  velocity = 5;
  sceneWidth = 800;
  sceneHeight = 600;
  playerColor: string = 'green';
  playerWidth: number = 20;
  playerHeight: number = 20;

  constructor(private gameDataService: GameDataService) {}

  ngOnInit(): void {
    this.gameDataService.atualizarPosicaoJogador(this.playerPosition);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent): void {
    const newPlayerPosition = { ...this.playerPosition };

    switch (event.key) {
      case 'ArrowUp':
        newPlayerPosition.y -= this.velocity;
        break;
      case 'ArrowDown':
        newPlayerPosition.y += this.velocity;
        break;
      case 'ArrowLeft':
        newPlayerPosition.x -= this.velocity;
        break;
      case 'ArrowRight':
        newPlayerPosition.x += this.velocity;
        break;
      case 'c':
        this.changePlayerColor('white');
        break;
      case 'x':
        this.changePlayerColor('green');
        break;
      case '1':
        this.increasePlayerSize()
        break;
      case '2':
        this.diminutivePlayerSize()
        break;
    }

    newPlayerPosition.x = Math.max(0, Math.min(newPlayerPosition.x, this.sceneWidth - this.playerWidth));
    newPlayerPosition.y = Math.max(0, Math.min(newPlayerPosition.y, this.sceneHeight - this.playerWidth));

    this.playerPosition = newPlayerPosition;
    this.gameDataService.atualizarPosicaoJogador(this.playerPosition);
  }

  private changePlayerColor(color: string): void {
    this.playerColor = color;
  }

  private increasePlayerSize() {
    this.playerHeight = this.playerWidth + 10;
    this.playerWidth = this.playerWidth + 10;
  }

  private diminutivePlayerSize() {
    this.playerHeight = this.playerWidth - 10;
    this.playerWidth = this.playerWidth - 10;
  }
}
