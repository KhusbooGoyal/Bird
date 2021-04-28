import React, {useState, useEffect} from "react";

const Birdform = (props) => {
    const initialFieldValues={
        name:'',
        size:'',
        colour: '',
        weight:''
    }
    var [values, setValues] = useState(initialFieldValues);

    const handleInputChange = e =>{
        var { n, val } = e.target
        setValues({
            ...values,
            [n]: val
        });
    }

    const handleFormSubmit = e=>{
        e.preventDefault();
        props.addOrModify(values);
    }


    return(
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas "></i>
                    </div>
                </div>
                <input className="form-control" placeholder="name" name="name" values={values.name} onChange={handleInputChange} />
            </div>
            <div className="form-row">
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="colour" name="colour" values={values.colour} onChange={handleInputChange} />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="size" name="size" values={values.size} onChange={handleInputChange} />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="weight" name="weight" values={values.weight} onChange={handleInputChange} />
            </div>
            </div>
            <div className="form-group">
                <input type="submit" value="save" className="btn btn-btn-primary btn-block" onSubmit={handleFormSubmit}/>
            </div>
        </form>
    );
}
export default Birdform;