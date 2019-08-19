import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatTableModule, MatInputModule, MatFormFieldModule, MatPaginatorModule,
    MatButtonModule, MatSortModule, MatIconModule, MatSelectModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';

@NgModule({
    declarations: [TableComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TableRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule
    ]
})
export class TableModule { }
