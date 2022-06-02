import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  containerTitleSubj = new Subject<string>();
  showBackBtnSubject = new Subject<boolean>();

  emitChangeTitle(title: string){
    this.containerTitleSubj.next(title);
  }

  showBackButtons(show: boolean){
    this.showBackBtnSubject.next(show);
  }
}
