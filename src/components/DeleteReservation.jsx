import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHelicopters } from "../features/helicopters/helicopterSlice";
import LayoutComponent from "../Layout";
import { Button, Table, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from "@ant-design/icons";
import { deleteReservation, getReservations, updateReservations } from "../features/reservations/reservationSlice";

const DeleteReservationComponent = () => {
  //hooks
  const dispatch = useDispatch();
  const helicopters = useSelector((state) => state.helicopter.helicopter);
  const reservations = useSelector((state) => state.reservations);
  const reservationsData = reservations.reservation;
  console.log('reservations = ', reservationsData, 'helicopters = ',helicopters.filter((helicopter) => helicopter.id === 70)[0].name);

  // handle delete function
  const handleDelete = async (e, id) => {
    e.preventDefault();
    dispatch(deleteReservation(+id));
    const updatedReservations = reservations.reservation.filter((reservation) => reservation.id !== id);
    dispatch (updateReservations(updatedReservations));
  };

  // table columns
  const columns = [
    {
      title: 'Helicopter',
      dataIndex: '',
      key: 'helicopter name',
      render: (reservation) => <p>{helicopters.filter((helicopter) => helicopter.id === reservation.helicopter_id)[0].name}</p>,
    },
    {
      title: 'Price (USD)',
      dataIndex: '',
      key: 'cost of reservation',
      render: (reservation) => <p>{helicopters.filter((helicopter) => helicopter.id === reservation.helicopter_id)[0].price}</p>,
      responsive: ['md'],
    },
    {
      title: 'Reserved Date',
      dataIndex: 'date',
      key: 'reserved date',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'reservation city',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'delete button',
      width: 100,
      render: (reservation) => <Popconfirm
      id={reservation.id}
      title="Delete Reservation"
      description="Are you sure to delete this reservation?"
      onConfirm={(e)=>handleDelete(e, reservation.id)}
      okText="Yes"
      okType="danger"
      icon={
        <QuestionCircleOutlined
          style={{
            color: 'red',
          }}
        />
      }
    >
      <Button id={reservation.id} danger>Delete</Button>
    </Popconfirm>,
    },
  ];

  useEffect(() => {
    dispatch(fetchHelicopters());
    dispatch(getReservations());
  }, [dispatch]);
  return (
    <LayoutComponent>
      <Table
        pagination={true}
        pageSize={5}
        columns={columns}
        dataSource={reservationsData} 
        className="min-w-full h-full max-h-full overflow-y-scroll leading-normal"
        scroll={{ y: 480 }}
      />;
    </LayoutComponent>
  );
};

export default DeleteReservationComponent;