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
    title: 'Logo',
    dataIndex: 'logo',
  },
  {
    title: 'Name',
    dataIndex: 'name',
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
    title: 'Specialities',
    dataIndex: 'specialities',
    render: (specialities: string[]) =>
      specialities.map((service) => service).join(),
    filters: [
      { text: 'Excavation', value: 'Excavation' },
      { text: 'Plumbing', value: 'Plumbing' },
      { text: 'Electrical', value: 'Electrical' },
    ],
    width: '20%',
    filterSearch: true,
    onFilter: (value: string | number | boolean, record: ICompany) => {
      return record.specialities.includes(value.toString());
    },
  },
  {
    title: 'City',
    dataIndex: 'city',
  },
];
