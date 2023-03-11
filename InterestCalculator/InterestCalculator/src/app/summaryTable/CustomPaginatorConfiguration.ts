import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class MatPaginatorIntlCro extends MatPaginatorIntl {
    itemsPerPageLabel = '';
    nextPageLabel = 'Siguiente página';
    previousPageLabel = 'Página anterior';

    getRangeLabel = (page, pageSize, length) => {
        if (length === 0 || pageSize === 0) {
            return 'En espera de resultados';
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex =
            startIndex < length
                ? Math.min(startIndex + pageSize, length)
                : startIndex + pageSize;
        return ' Viendo ' + endIndex + '  tareas ' + ' de ' + length;
    };
}
