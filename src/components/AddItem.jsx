import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import addItem from "../features/addItem/addItemSlice";

const AddItem = () => {
    const dispatch = useDispatch();

    const [ formData, setFormData ] = useState({
        name: '',
        contact: '',
        price: '',
        carriage_capacity: '',
        image: '',
        model: '',
        description: '',
    })
    const handleFormInput = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    };

    const handleFormSubmission = async (event) => {
        event.preventDefault();
        await dispatch(addItem(formData));
        formData({
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
            <div className="background-cover">
                <form className="form-page" onSubmit={handleFormSubmission}>
                    <h2 className="item-form">Add New Helicopter</h2>
                    <div>     
                        <input
                        placeholder="Helicopter name"
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleFormInput}
                        />
                    </div>
                    <div>
                        <input
                        placeholder="contact email"
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleFormInput}
                        />
                    </div>
                    <div>
                        <input 
                        placeholder="price/hr"
                        type="number"
                        name="price" 
                        value={formData.price}
                        onChange={handleFormInput}
                        />
                    </div>
                    <div>
                        <input 
                        placeholder="carriage capacity"
                        type="number"
                        name="carriage_capacity"
                        value={formData.carriage_capacity}
                        onChange={handleFormInput}
                        />
                    </div>
                    <div>
                        <input 
                        placeholder="image url"
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleFormInput}
                        />
                    </div>
                    <div>
                        <input 
                        placeholder="model number"
                        type="number"
                        name="model"
                        value={formData.model}
                        onChange={handleFormInput}
                        />
                    </div>
                    <div>
                        <input 
                        placeholder="description "
                        type="textarea"
                        name="description"
                        value={formData.description}
                        onChange={handleFormInput}
                        />
                    </div>
                    <button className="submit-btn" type='submit'>submit form</button>
                </form>
            </div>
      </section>
    )
}


export default AddItem;