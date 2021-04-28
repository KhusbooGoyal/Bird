import React, {useState, useEffect} from "react";
import Birdform from "./Birdform";
import firebaseDb from "../firebase";

const Bird = () => {

    var [birdObjects, setBirdObjects] = useState({})

    useEffect(()=>{
        firebaseDb.child('bird').on('value', snapshot=>{
            if(snapshot.val()!=null)
            setBirdObjects({
                ...snapshot.val()
            })
        })
    })

    const addOrModify = obj => {
        firebaseDb.child('bird').push(obj,
            err=> {
                if(err) console.log(err);
            }    
        );
    }

    return(
        <>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center">Bird Sighting</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-5">
                <Birdform addOrModify={addOrModify} />
            </div>
            <div className="col-md-7">
                <table className="table table-borderless">
                    <tr>
                        <td>Name</td>
                        <td>Colour</td>
                        <td>Size</td>
                        <td>Weight</td>
                        <td>Actions</td>
                    </tr>
                    <tbody>
                        {
                            Object.keys(birdObjects).map(id=>{
                                return <tr>
                                    <td>{birdObjects[id].name}</td>
                                    <td>{birdObjects[id].colour}</td>
                                    <td>{birdObjects[id].size}</td>
                                    <td>{birdObjects[id].weight}</td>
                                    <td></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
        
    );
}
export default Bird;