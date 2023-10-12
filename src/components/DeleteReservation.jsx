import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHelicopters,
  deleteHelicopter,
  updateHelicopters,
} from "../features/helicopters/helicopterSlice";
import LayoutComponent from "../Layout";
import { Button, Table, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from "@ant-design/icons";

const DeleteReservationComponent = () => {
  //hooks
  const dispatch = useDispatch();
  const helicopters = useSelector((state) => state.helicopter);
  const helicopterData = helicopters.helicopter;
  console.log(helicopterData);

  //handle delete function
  const handleDelete = async (e, id) => {
    e.preventDefault();
    dispatch(deleteHelicopter(+id));
    const updatedHelicopters = helicopters.helicopter.filter((helicopter) => helicopter.id !== id);
    dispatch (updateHelicopters(updatedHelicopters));
  };

  // table columns
  const columns = [
    {
      title: 'Helicopter',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      responsive: ['md'],
    },
    {
      title: 'Price (USD)',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'delete button',
      width: 100,
      render: (helicopter) => <Popconfirm
      id={helicopter.id}
      title="Delete Helicopter"
      description="Are you sure to delete this helicopter?"
      onConfirm={(e)=>handleDelete(e, helicopter.id)}
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
      <Button id={helicopter.id} danger>Delete</Button>
    </Popconfirm>,
    },
  ];

  useEffect(() => {
    dispatch(fetchHelicopters());
  }, [dispatch, deleteHelicopter]);
  return (
    <LayoutComponent>
      <Table
        pagination={true}
        pageSize={5}
        columns={columns}
        dataSource={helicopterData} 
        className="min-w-full h-full max-h-full overflow-y-scroll leading-normal"
        scroll={{ y: 480 }}
      />;
    </LayoutComponent>
  );
};

export default DeleteReservationComponent;
