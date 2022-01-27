import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import Photos from "./Photos";

function Project(props) {
    const { windowSize, projects, photos } = props;
    const [nowIndex, setNowIndex] = useState();
    const [project, setProject] = useState();
    const [photo, setPhoto] = useState();
    

    useEffect(()=>{
        if(project){
            if(project._id===1){
                setPhoto(photos)
            }else{
                setPhoto(photos.filter((item) => Number(item.project) === Number(project._id)))
            }
        }else{
            setPhoto(photos)
        }
    },[photos,projects,project])

    
    useEffect(() => {
        setProject(nowIndex === 0 || nowIndex ? projects[nowIndex] : projects[0]);
    }, [nowIndex,projects]);
    return (
        <div>
            <Slider nowIndex={nowIndex} setNowIndex={setNowIndex} windowSize={windowSize} />
            <Photos windowSize={windowSize} photo={photo?photo:photos} />
        </div>
    );
}

export default Project;
