import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHelicopters,
  deleteHelicopter,
  updateHelicopters,
} from "../features/helicopters/helicopterSlice";
import LayoutComponent from "../Layout";
import { Button, Table, Popconfirm } from 'antd';
const { Column } = Table;
import { QuestionCircleOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";

const DeleteHelicopterComponent = () => {
  //----------------hooks-------------------------
  const dispatch = useDispatch();
  const helicopters = useSelector((state) => state.helicopter);

  //----------------refactor table data for display in table component ----------------------
  const helicopterData = helicopters.helicopter.map((helicopter) => {
    return {
      key: helicopter.id,
      name: helicopter.name,
      description: helicopter.description,
      price: helicopter.price,
    };
  });

  // -----------------------handle delete function -----------------------
  const handleDelete = async (e, id) => {
    e.preventDefault();
    dispatch(deleteHelicopter(+id));
    const updatedHelicopters = helicopters.helicopter.filter((helicopter) => helicopter.id !== id);
    dispatch (updateHelicopters(updatedHelicopters));
  };

  useEffect(() => {
    dispatch(fetchHelicopters());
  }, [dispatch, deleteHelicopter]);
  return (
    <LayoutComponent>
      {/* // ------------------- table component ---------------------- */}
      <Table pagination={true} dataSource={helicopterData} className="min-w-full h-full max-h-full overflow-y-scroll leading-normal">
        <Column title="Helicopter" dataIndex="name" key={uuidv4()} />
        <Column title="Description" dataIndex="description" key={uuidv4()} responsive={['md']} />
        <Column title="Price" dataIndex="price" key={uuidv4()} />
        <Column
          id={uuidv4()}
          title="Action"
          key={uuidv4()}
          dataIndex={''}
          render={(helicopter) => {
            console.log(helicopter);
            return (
            <Popconfirm
              id={helicopter.key}
              title="Delete Helicopter"
              description="Are you sure to delete this helicopter?"
              onConfirm={(e)=>handleDelete(e, helicopter.key)}
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
              <Button id={helicopter.key} danger>Delete</Button>
            </Popconfirm>
          )}}
        />
      </Table>
    </LayoutComponent>
  );
};

export default DeleteHelicopterComponent;
