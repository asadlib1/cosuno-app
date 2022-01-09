import { useEffect, useState } from 'react';
import { companies, companyTableColumns } from './utils/companies';
import { Table } from 'antd';

export function App() {
  const [tableDataSource, setTableDataSource] = useState(companies);

  return (
    <div>
      <header>
        <Table
          columns={companyTableColumns}
          dataSource={tableDataSource}
        ></Table>
      </header>
    </div>
  );
}

export default App;
