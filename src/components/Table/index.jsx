import React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {rows, columns} from './data.js';
import styles from './styles.module.scss';


const Table = () => {
  return (
    <div className={styles.tableWrap}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {page: 0, pageSize: 5},
          },
        }}
        pageSizeOptions={[0, 5]}
        checkboxSelection
      />
    </div>
  )

};
export default Table;





