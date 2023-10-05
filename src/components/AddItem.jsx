import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"

const AddItem = () => {
    const [ formData, setFormDat ] = useState({
        name: '',
        contact: '',
        price: '',
        carriage_capacity: '',
        image: '',
        model: '',
        description: '',
    })
    const handleFormInput = () => {

    };

    const handleFormSubmission = () => {

    };

    return (
        <section>
            <form onSubmit={handleFormSubmission}>
                <h2>Add New Helicopter</h2>
                <div>     
                    <input
                    placeholder="Helicopter name"
                    type='text'
                    name='name'
                    onChange={handleFormInput}
                    />
                </div>
                <div>
                    <input
                    placeholder="contact email"
                    type="text"
                    name="contact"
                    onChange={handleFormInput}
                    />
                </div>
                <div>
                    <input 
                    placeholder="price/hr"
                    type="number"
                    name="price" 
                    onChange={handleFormInput}
                     />
                </div>
                <div>
                    <input 
                    placeholder="carriage capacity"
                    type="number"
                    name="carriage_capacity"
                    onChange={handleFormInput}
                     />
                </div>
                <div>
                    <input 
                    placeholder="image url"
                    type="text"
                    name="image"
                    onChange={handleFormInput}
                    />
                </div>
                <div>
                    <input 
                    placeholder="model number"
                    type="number"
                    name="model"
                    onChange={handleFormInput}
                     />
                </div>
                <div>
                    <input 
                    placeholder="description "
                    type="textarea"
                    name="description"
                    onChange={handleFormInput}
                     />
                </div>
                <button type='submit'>submit form</button>
            </form>
      </section>
    )
}


export default AddItem;