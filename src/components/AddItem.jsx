import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/addItem/addItemSlice";

const AddItem = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        price: '',
        carriage_capacity: '',
        image: '',
        model: '',
        description: '',
    });

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.item)

  const handleFormInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmission = async (event) => {
    event.preventDefault();
    await dispatch(addItem(formData));
    // console.log(formData);
    setFormData({
        name: '',
        contact: '',
        price: '',
        carriage_capacity: '',
        image: '',
        model: '',
        description: '',
    })
  };

  return (
    <section className="item-page">
      <div className="background-cover-pic">
        <form className="additem-form-page" onSubmit={handleFormSubmission}>
          <h2 className="item-form-title">Add New Helicopter</h2>
          <div>
            <input
             className="additem-form-input"
              placeholder="Helicopter name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormInput}
            />
          </div>
          <div>
            <input
            className="additem-form-input"
              placeholder="contact email"
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleFormInput}
            />
          </div>
          <div>
            <input
            className="additem-form-input"
              placeholder="price/hr"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleFormInput}
            />
          </div>
          <div>
            <input
            className="additem-form-input"
              placeholder="carriage capacity"
              type="number"
              name="carriage_capacity"
              value={formData.carriage_capacity}
              onChange={handleFormInput}
            />
          </div>
          <div>
            <input
            className="additem-form-input"
              placeholder="image url"
              type="text"
              name="image"
              value={formData.image}
              onChange={handleFormInput}
            />
          </div>
          <div>
            <input
            className="additem-form-input"
              placeholder="model number"
              type="number"
              name="model"
              value={formData.model}
              onChange={handleFormInput}
            />
          </div>
          <div>
            <textarea
              placeholder="description"
              name="description"
              value={formData.description}
              onChange={handleFormInput}
            />
          </div>
          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? 'submiting form..' : 'submit form'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddItem;