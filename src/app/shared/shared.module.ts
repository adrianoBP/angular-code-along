import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { LayoutModule } from "@angular/cdk/layout";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { ShellComponent } from './shell/shell.component';

const components = [ShellComponent]
const modules = [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule
]

@NgModule({
    declarations: [...components],
    imports: [...modules],
    exports: [
        ...components,
        ...modules
    ]
})
export class SharedModule { }
