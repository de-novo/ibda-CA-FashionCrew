import React, { useState, useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import styled from "styled-components";
import PhotoContainer from "../../components/PhotoCard.js/PhotoContainer";

import { useParams } from "react-router-dom";
import photoService from "../../service/photo_service";
const HR = styled.hr`
    width: 80%;
    max-width: 96rem;
    margin: auto;
    margin-bottom: 3.2rem;
`;

function ProjectContainer() {
    const params = useParams();
    const [projects, setProjects] = useState(null);
    const [photos, setPhotos] = useState(null);
    console.log('렌더링')
    // useEffect(() => {
    //     if (Number(params.id) === 1 || !params.id) {
    //         setPhoto(photos);
    //     } else {
    //         (async function () {
    //             const photo = await photoService.getPhotoByProjectId({ id: params.id });
    //             console.log(photo);
    //         })();
    //     }
    // }, [params, photos, setPhoto]);
    useEffect(() => {
        if (!projects) {
            (async function () {

                const Data = await photoService.getPhotoByProjectId(params.id);

                setProjects(Data.projects);
                setPhotos(Data.photos);
            })();
        } else {
            (async function () {
                const photo = await photoService.getPhotoByProjectId(params.id);

                setPhotos(photo.photos);
            })();
        }
    }, [params, setPhotos, setProjects,projects]);
    return (
        <div>
            <Carousel projects={projects?projects:null } params={params}></Carousel>
            <HR></HR>
            <PhotoContainer photos={photos || []}></PhotoContainer>
        </div>
    );
}

export default ProjectContainer;
