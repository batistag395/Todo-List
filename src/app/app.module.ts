import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { FormsModule } from '@angular/forms';
import { IconeComponent } from './icone/icone.component';
import { ItemComponent } from './item/item.component';
import { AddBtnComponent } from './add-btn/add-btn.component';
import { RemoveBtnComponent } from './remove-btn/remove-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    IconeComponent,
    ItemComponent,
    AddBtnComponent,
    RemoveBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
