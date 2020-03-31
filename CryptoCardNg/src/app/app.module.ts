import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterAccountDataComponent } from './enter-account-data/enter-account-data.component';
import { ShowPartialKeysComponent } from './show-partial-keys/show-partial-keys.component';
import { ShowCardKeyQrcodeComponent } from './show-card-key-qrcode/show-card-key-qrcode.component';
import { ScanCardComponent } from './scan-card/scan-card.component';
import { EnterPasswordComponent } from './enter-password/enter-password.component';
import { EnterBackupKeyComponent } from './enter-backup-key/enter-backup-key.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterAccountDataComponent,
    ShowPartialKeysComponent,
    ShowCardKeyQrcodeComponent,
    ScanCardComponent,
    EnterPasswordComponent,
    EnterBackupKeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
