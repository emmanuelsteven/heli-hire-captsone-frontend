import { useDispatch, useSelector } from "react-redux"


const AddItem = () => {

    return (
        <section>
            <form onSubmit={handleFormSubmission}>
                <h2>Add New Helicopter</h2>
                <div>     
                    <input
                    type='text'
                    name='name'
                    onChange={handleFormInput}
                    />
                </div>
                <div>
                    <input
                    type="text"
                    name="contact"
                    onChange={handleFormInput}
                    />
                </div>
                <div>
                    <input 
                    type="number"
                    name="price" 
                    onChange={handleFormInput}
                     />
                </div>
                <div>
                    <input 
                    type="number"
                    name="carriage_capacity"
                    onChange={handleFormInput}
                     />
                </div>
                <div>
                    <input 
                    type="text"
                    name="image"
                    onChange={handleFormInput}
                    />
                </div>
                <div>
                    <input 
                    type="number"
                    name="model"
                    onChange={handleFormInput}
                     />
                </div>
                <div>
                    <input 
                    type="text"
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