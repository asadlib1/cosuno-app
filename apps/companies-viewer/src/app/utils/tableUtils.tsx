import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FilterDropdownProps } from 'antd/lib/table/interface';
import { ColumnsType } from 'antd/es/table';

export interface ICompany {
  name: string;
  logo: string;
  specialities: string[];
  city: string;
}

export const companyTableColumns: ColumnsType<ICompany> = [
  {
    key: 'col-logo',
    title: 'Logo',
    dataIndex: 'logo',
    width: '20%',
    render: (logo: string) => {
      if (logo) {
        return (
          <img src={logo} style={{ maxWidth: '200px', maxHeight: '200px' }} />
        );
      } else {
        return <p>Unavailable Information</p>;
      }
    },
  },
  {
    key: 'col-name',
    title: 'Name',
    dataIndex: 'name',
    width: '30%',
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: FilterDropdownProps) => {
      return (
        <Input
          autoFocus={true}
          placeholder="Type text here"
          value={selectedKeys[0]}
          onChange={(e) => {
            setSelectedKeys(e.target.value ? [e.target.value] : []);
            confirm({ closeDropdown: false });
          }}
        ></Input>
      );
    },
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value: string | number | boolean, record: ICompany) => {
      return record.name.toLowerCase().includes(value.toString().toLowerCase());
    },
  },
  {
    key: 'col-specialities',
    title: 'Specialities',
    width: '30%',
    dataIndex: 'specialities',
    render: (specialities: string[]) =>
      specialities.map((service) => service).join(),
    filters: [
      { text: 'Excavation', value: 'Excavation' },
      { text: 'Plumbing', value: 'Plumbing' },
      { text: 'Electrical', value: 'Electrical' },
      { text: 'Demolition', value: 'Demolition' },
      { text: 'Agriculture', value: 'Agriculture' },
      { text: 'Earthmoving', value: 'Earthmoving' },
      { text: 'Machinery', value: 'Machinery' },
      { text: 'Vehicle', value: 'Vehicle' },
    ],
    filterSearch: true,
    onFilter: (value: string | number | boolean, record: ICompany) => {
      return record.specialities.includes(value.toString());
    },
  },
  {
    key: 'col-city',
    title: 'City',
    dataIndex: 'city',
  },
];
