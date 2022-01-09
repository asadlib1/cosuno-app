import { useEffect, useState } from 'react';
import { companyTableColumns } from './utils/tableUtils';
import { Table, notification } from 'antd';
import apiClient from './utils/apiClient';

export function App() {
  const [tableDataSource, setTableDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchDataSource();
  }, []);

  useEffect(() => {
    console.log('update');
  }, [loading, tableDataSource]);

  const openErrorNotification = (message: string, description: string) => {
    notification.open({
      message,
      description,
      duration: 3.5,
      type: 'error',
    });
  };

  const fetchDataSource = async () => {
    await apiClient
      .get('/')
      .then((response) => {
        if (response.status === 200) {
          setTableDataSource(response.data);
          setLoading(false);
        } else {
          setLoading(false);
          setTableDataSource([]);
          openErrorNotification(
            'No data found',
            'No list of companies found in server'
          );
        }
      })
      .catch((err) => {
        openErrorNotification('Failed connecting to server', err.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <header>
        <h1 style={{ textAlign: 'center', margin: '20px' }}>
          Cosuno Companies Explorer
        </h1>
      </header>
      <header>
        <Table
          loading={loading}
          columns={companyTableColumns}
          dataSource={tableDataSource}
          rowKey="id"
        ></Table>
      </header>
    </div>
  );
}

export default App;
