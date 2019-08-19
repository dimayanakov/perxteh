import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DirectiveRoutingModule } from './directive-routing.module';
import { DirectiveComponent } from './directive.component';
import { ColorDirective } from './color.directive';
import { TextDirective } from './text.directive';

@NgModule({
    declarations: [
        DirectiveComponent,
        ColorDirective,
        TextDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectiveRoutingModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class DirectiveModule { }
