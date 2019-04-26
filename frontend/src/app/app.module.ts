import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {UiKitModule} from './shared/ui-kit/ui-kit.module';
import {MenuComponent} from './view/dashboard/common/menu/menu.component';
import {AddProjectComponent} from './view/dashboard/common/add-project/add-project.component';
import {AddProjectDialogComponent} from './view/dashboard/common/add-project/add-project-dialog/add-project-dialog.component';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./view/dashboard/pages/home.component";
import { AuthComponent } from "./view/auth/auth.component";
import { DashboardComponent } from "./view/dashboard/dashboard.component";
import { AuthGuardService } from "./view/auth/auth-guard.service";


@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        AddProjectComponent,
        HomeComponent,
        AuthComponent,
        DashboardComponent,
        AddProjectDialogComponent,
    ],
    entryComponents: [AddProjectDialogComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        UiKitModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [AuthGuardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
