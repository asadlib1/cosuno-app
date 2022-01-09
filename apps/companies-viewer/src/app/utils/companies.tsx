import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FilterDropdownProps } from 'antd/lib/table/interface';
import { ColumnsType } from 'antd/es/table';

export const companies: ICompany[] = [
  {
    name: 'Zeppelin GmbH',
    logo: '',
    specialities: ['Plumbing'],
    city: 'Munich',
  },
  {
    name: 'Company B',
    logo: '',
    specialities: ['Excavation'],
    city: 'Munich',
  },
  {
    name: 'Company C',
    logo: '',
    specialities: ['Electrical'],
    city: 'Stuttgart',
  },
  {
    name: 'Company D',
    logo: '',
    specialities: ['Electrical', 'Excavation'],
    city: 'Berlin',
  },
];

export interface ICompany {
  name: string;
  logo: string;
  specialities: string[];
  city: string;
}

export const companyTableColumns: ColumnsType<ICompany> = [
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
    title: 'Logo',
    dataIndex: 'logo',
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
