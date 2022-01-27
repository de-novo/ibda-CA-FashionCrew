import React from "react";
import { connect } from "react-redux";
import { axiosDatas } from "../../redux/index";
import Photoitem from "./Photoitem";
function Project(props) {
    // const size = useWindowSize();
    const {windowSize , photo}= props
    console.log('사진배열!')
   

    const RandomImageSet = () => {
        let result = [];
        let lenght = photo ? photo.length : 0;
        let random = 0;

        if (windowSize.width > 1097) {
            random = lenght > 4 ? Math.floor(Math.random() * 3) + 3 : lenght;
        } else if (windowSize.width > 665) {
            random = lenght > 3 ? Math.floor(Math.random() * 2) + 2 : lenght;
        } else {
            random = lenght > 2 ? Math.floor(Math.random() * 2) + 1 : lenght;
        }

        let worked = 0;

        if (photo) {
            while (lenght > 0) {
                let sumRatio = 0;
                let working = photo.slice(worked, worked + random); // 작업한수~작업한수+난수
                working.map((item) => {
                    return (sumRatio += Number(item.imgRatio));
                });
                working.map((item) => {
                    
                    let member = props.members.filter((member)=>{ 
                        let name = member.name 
                        let birth =member.birth.split("-")[0]        
                       return item.model===name+'-'+birth
                    })
                    // console.log(member)
                    return result.push(<Photoitem sumRatio={sumRatio} item={item} member={member[0]} key={item._id} ></Photoitem>);
                });
                worked += random;
                lenght -= random;
                if (windowSize.width > 1097) {
                    random = lenght > 4 ? Math.floor(Math.random() * 3) + 3 : lenght;
                } else if (windowSize.width > 665) {
                    random = lenght > 3 ? Math.floor(Math.random() * 2) + 2 : lenght;
                } else {
                    random = lenght > 2 ? Math.floor(Math.random() * 2) + 1 : lenght;
                }

            }
        }

        return result;
    };

    return (
        <>
                    <div className="photo_total">{RandomImageSet()}</div>
        </>
    );
}
const mapDispatchToProps = {
    axiosDatas
  };
  
  const mapStateToProps = (state) => {
      return {
        contents: state.datas.contents,
        photos: state.datas.photos,
        projects: state.datas.projects,
        members: state.datas.members,
      };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Project);
