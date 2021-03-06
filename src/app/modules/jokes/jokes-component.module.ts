import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/app.shared.module';
import { JokesComponent } from './components/jokes-component.component';
import { JokesRoutingModule } from './jokes-routing.module';

@NgModule({
  declarations: [JokesComponent],
  imports: [
    CommonModule,
    JokesRoutingModule,
    MatButtonModule,
    SharedModule
  ],
  providers: []
})
export class JokesComponentModule { }
