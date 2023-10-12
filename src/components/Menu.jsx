import { GroupOutlined, BarsOutlined, DeleteOutlined, EditOutlined, DiffOutlined } from '@ant-design/icons';
import { ConfigProvider, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logOut } from '../features/sessions/sessionsSlice';


const MenuComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logOutUser = () => {
    sessionStorage.clear();
    localStorage.clear()
    dispatch(logOut());
    navigate('/');
  }
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
        case '/delete-helicopter' || '/delete-reservation':
            seletedKey = '5';
            break;
        case '/delete-helicopter':
            seletedKey = '6';
            break;
        case '/delete-reservation':
            seletedKey = '7';
            break;
        default:
            seletedKey = '';
            break;   
    }
    return (
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              colorPrimary: '#97bf11',
            },
          },
        }}
      >
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[seletedKey]}
          items={
            [
              {
                key: 1,
                icon: <GroupOutlined />,
                label: <Link to="/helicopters">Helicopters</Link>,
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
                    label: <Link to={'/delete-helicopter'}>Delete Helicopter</Link>,
                  },
                  {
                    key: 7,
                    label: <Link to={'/delete-reservation'}>Delete Reservation</Link>,
                  },
                ],
              },
              {
                key: 6,
                label: <button
                className="logout"
                type="button"
                onClick={logOutUser}
              >
                Logout
              </button>,
              },
            ]
         }
        />
      </ConfigProvider>
      );
}
 
export default MenuComponent;
