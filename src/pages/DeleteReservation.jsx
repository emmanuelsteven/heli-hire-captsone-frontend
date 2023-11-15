import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHelicopters } from "../features/helicopters/helicopterSlice";
import LayoutComponent from "../components/Layout";
import { Button, Table, Popconfirm } from 'antd';
const { Column } = Table; 
import { QuestionCircleOutlined } from "@ant-design/icons";
import { deleteReservation, getReservations, updateReservations } from "../features/reservations/reservationSlice";
import { v4 as uuidv4 } from 'uuid';

const DeleteReservationComponent = () => {
  //------------------hooks-----------------------------------------
  const dispatch = useDispatch();
  const helicopters = useSelector((state) => state.helicopter.helicopter);
  const reservations = useSelector((state) => state.reservations);
  const reservationsData = reservations.reservation;

  //------------------- refactor table data for display in table component ----------------------
  const tableData = reservationsData.map((reservation) => {
    const heli = helicopters.filter((helicopter) => helicopter.id === reservation.helicopter_id);
    const date = new Date(reservation.date);
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
    return {
      key: reservation.id,
      helicopter: heli[0].name,
      price: heli[0].price,
      date: formattedDate,
      city: reservation.city,
      helicopter_id: reservation.helicopter_id,
    };
  });

  //------------------- handle delete reservation function ----------------------
  const handleDelete = async (e, id) => {
    e.preventDefault();
    dispatch(deleteReservation(+id));
    const updatedReservations = reservations.reservation.filter((reservation) => reservation.id !== id);
    dispatch (updateReservations(updatedReservations));
  };

  useEffect(() => {
    dispatch(fetchHelicopters());
    dispatch(getReservations());
  }, [dispatch, deleteReservation]);
  return (
    <LayoutComponent>

      {/* // ------------------- table component ---------------------- */}
      <Table dataSource={tableData}
        className="min-w-full h-full max-h-full overflow-y-scroll leading-normal"
      >
        {/* // -------------table columns------------------------- */}
        <Column title="date" dataIndex="date" key={uuidv4()} />
        <Column title="city" dataIndex="city" key={uuidv4()} responsive={['md']}/>
        <Column title="Helicopter" dataIndex="helicopter" key={uuidv4()} />
        <Column title="price" dataIndex="price" key={uuidv4()} responsive={['sm']} />
        
        {/* // -------------delete action------------------------- */}
        <Column title="Action" dataIndex="" key={uuidv4()} render={(tableData) => <Popconfirm
            id={+tableData.key}
            title="Delete Reservation"
            description="Are you sure to delete this reservation?"
            onConfirm={(e)=>handleDelete(e, tableData.key)}
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
            <Button id={tableData.key} danger>Delete</Button>
          </Popconfirm>}
        />
      </Table>
    </LayoutComponent>
  );
};

export default DeleteReservationComponent;
