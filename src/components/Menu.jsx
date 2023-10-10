import { GroupOutlined, BarsOutlined, DeleteOutlined, EditOutlined, DiffOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const MenuComponent = () => {
  const location = useLocation();
  let seletedKey = '';
  switch (location.pathname) {
    case '/helicopters':
      seletedKey = '1';
      break;
    case '/new-reservation':
      seletedKey = '2';
      break;
    case '/reservations':
        seletedKey = '3';
        break;
    case '/new-helicopter':
        seletedKey = '4';
        break;
    case '/delete-helicopter':
      seletedKey = '6';
      break;
    case '/delete-reservation':
      seletedKey = '7';
      break;
    default:
        seletedKey = '1';
        break;   
   }
  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={[seletedKey]}
      items={
        [
          {
            key: 1,
            icon: <GroupOutlined />,
            label: <Link to="/">Helicopters</Link>,
          },
          {
            key: 2,
            icon: <EditOutlined />,
            label: <Link to={'/new-reservation'}>Add Reservation</Link>,
          },
          {
            key: 3,
            icon: <BarsOutlined />,
            label: <Link to={'/reservations'}>My Reservations</Link>,
          },
          {
            key: 4,
            icon: <DiffOutlined />,
            label: <Link to={'/new-helicopter'}>Add Helicopter</Link>,
          },
          {
            key: 5,
            icon: <DeleteOutlined />,
            label: 'Delete',
            children: [
              {
                key: 6,
                label: <Link to={'/delete-helicopter'}>Helicopter</Link>,
              },
              {
                key: 7,
                label: <Link to={'/delete-reservation'}>Reservation</Link>,
              },
            ]
          },
        ]
      }
    />
  );
}
 
export default MenuComponent;
