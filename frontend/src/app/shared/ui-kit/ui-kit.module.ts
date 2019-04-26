import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule, MatTabsModule,
    MatToolbarModule,
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    exports: [
        CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        DragDropModule,
        MatCardModule,
        FlexLayoutModule,
        MatSlideToggleModule,
        MatIconModule,
        ReactiveFormsModule,
        MatOptionModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatTabsModule
    ]
})
export class UiKitModule {
}
