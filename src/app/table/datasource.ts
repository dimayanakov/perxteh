import { DataSource } from '@angular/cdk/table';
import { MatSort, Sort } from '@angular/material';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TableService } from '../services/table.service';

export class TableDataSource extends DataSource<any> {
    private data$ = new BehaviorSubject<any[]>([]);
    private sort$ = new BehaviorSubject<Sort>(null);
    private filter$ = new BehaviorSubject<string | null>(null);

    constructor(private tableService: TableService, private sort?: MatSort) {
        super();
        this.loadData();
        if (sort) {
            sort.sortChange.subscribe((data: Sort) => {
                this.sort$.next(data);
            });
        }
    }

    setFilter(filter: string) {
        this.filter$.next(filter);
    }

    loadData() {
        this.tableService.getData().subscribe(data => {
            this.data$.next(data);
        });
    }

    connect(): Observable<any[]> {
        return combineLatest([
            this.data$,
            this.sort$,
            this.filter$
        ]).pipe(map(([data, sort, filter]) => {
            return this.sortData(sort, this.filterData(filter, data));
        }));
    }

    filterData(filter, data: any[]) {
        if (!filter) {
            return data;
        }
        return data.filter((row) => {
            const dataStr = row.id + row.attributes.content.toLowerCase();
            return dataStr.indexOf(filter.toLowerCase()) !== -1;
        });
    }

    sortData(sort: Sort, data: any[]) {
        if (!sort || !sort.active) {
            return data;
        }
        return data.sort((prev, next) => {
            const valA = this.prepareValueForSort(prev, sort.active);
            const valB = this.prepareValueForSort(next, sort.active);
            const multiplier = sort.direction === 'desc' ? -1 : 1;

            return (valA > valB ? 1 : -1) * multiplier;
        });
    }

    disconnect(): void {
        this.data$.complete();
    }

    private prepareValueForSort(row: any, key: string) {
        return row[key] || row.attributes[key];
    }
}
