import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  private jogadorPosicaoSubject = new BehaviorSubject<any>({ x: 0, y: 0 });

  atualizarPosicaoJogador(posicao: any): void {
    this.jogadorPosicaoSubject.next(posicao);
  }

  updatePlayerColor() {
  }
}
