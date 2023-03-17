import { InfoComponent } from './info/info.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'InterestCalculator';
  modal: any;
  btn: any;
  span: any;
  constructor(public dialog: MatDialog) {}

  // When the user clicks the button, open the modal
  openInfoModal(): void {
    const mobile = window.innerWidth <= 720;
    const abrirDialog = {
      panelClass: 'rotate-scale-up',
      backdropClass: 'backdropBackground',
      autoFocus: false,
      position: { right: '0', top: '0' },
      height: '100vh',
      width: mobile ? '100vw' : '420px',
    };
    this.dialog.open(InfoComponent, abrirDialog);
  }
}
