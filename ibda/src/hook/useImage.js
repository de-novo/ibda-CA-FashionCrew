import { useEffect, useState } from "react";

export const useImage = ({ WindowSize, images }) => {
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        if (WindowSize.width > 960) {
            let state = [[], [], []];
            images?.map((item, index) => {
                return index % 3 === 0 ? state[0].push(item) : index % 3 === 1 ? state[1].push(item) : state[2].push(item);
            });
            setImageList(state);
        } else if (WindowSize.width > 768) {
            let state = [[], []];
            images?.map((item, index) => {
                return index % 2 === 0 ? state[0].push(item) : state[1].push(item);
            });
            setImageList(state);
        } else {
            setImageList([images]);
        }
    
    }, [WindowSize, setImageList, images]);

    return imageList;
};
