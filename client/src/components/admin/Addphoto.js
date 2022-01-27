import axios from "axios";
import { useState } from "react";

function Addphoto(props) {
    // console.log(props.projecslist)

    const [img, imgSet] = useState();
    const [model, modelSet] = useState();
    const [project, projectSet] = useState();
    const [date, dateSet] = useState();
    const [location, locationSet] = useState();
    const [Photographer, PhotographerSet] = useState();

    //  axios.get('/api/admin')

    const on_imgHandler = (e) => {
        imgSet(e.currentTarget.files[0]);
    };

    const on_modelHandler = (e) => {
        modelSet(e.currentTarget.value);
    };
    const on_projectHandler = (e) => {
        projectSet(e.currentTarget.value);
    };
    const on_dateHandler = (e) => {
        dateSet(e.currentTarget.value);
    };
    const on_locationHandler = (e) => {
        locationSet(e.currentTarget.value);
    };
    const on_photographerHandler = (e) => {
        PhotographerSet(e.currentTarget.value);
    };
    const on_submitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (project !== "undefined" && img && model && project && date && location && Photographer) {
            formData.append("img", img);
            formData.append("model", model);
            formData.append("project", project);
            formData.append("date", date);
            formData.append("location", location);
            formData.append("photographer", Photographer);
            axios.post("/api/admin/photo", formData).then((res) => console.log(res));
            imgSet("");
            modelSet("");
            projectSet("");
            dateSet("");
            locationSet("");
            PhotographerSet("");
            props.upload.setUploadTrigger(!props.upload.uploadTrigger);
        } else {
            alert("모든칸을 다입력해주세요");
        }
    };
    return (
        <div className="adminbox" id="add-member">
            <form>
                <div>
                    <p>Photo</p>
                    <input className="input" type="file" onChange={on_imgHandler} value={img === "" ? img : null}></input>
                </div>
                <div>
                    <p>Model</p>
                    <select onChange={on_modelHandler} value={model}>
                        <option value="undefined">Model</option>
                        {props.members.map((item) => {
                            return (
                                <option value={item.name+'-'+item.birth.split('-')[0]} key={item._id}>
                                    {item.name+'-'+item.birth.split('-')[0]}
                                </option>
                            );
                        })}
                    </select>
                    
                </div>
                <div>
                    <p>Concept</p>
                    <select onChange={on_projectHandler} value={project}>
                        <option value="undefined">project</option>
                        {props.projecslist.map((item) => {
                            return (
                                <option value={item._id} key={item._id}>
                                    {item.concept}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <p>Date of photography</p>
                    <input className="input" type="date" onChange={on_dateHandler} value={date}></input>
                </div>
                <div>
                    <p>Location</p>
                    <input className="input" type="text" placeholder="Location" onChange={on_locationHandler} value={location}></input>
                </div>
                <div>
                    <p>Photo by</p>
                    <input className="input" type="text" placeholder="Photo by" onChange={on_photographerHandler} value={Photographer}></input>
                </div>

                <button type="submit" className="submitbtn" onClick={on_submitHandler}>
                    {" "}
                    Add Photo{" "}
                </button>
            </form>
        </div>
    );
}

export default Addphoto;
