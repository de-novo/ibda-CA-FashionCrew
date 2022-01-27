import React from "react";

import { connect } from "react-redux";

import { axiosDatas } from "../../redux/index"



import Member from './Member.js'


function Members(props) {

  console.log(' memberz 2',props.members)
  // const [members, membersSet] = useState(props.members)
  // useEffect(()=>{
  //   console.log(' memberz',members)
  //   membersSet(props.members)
  // },props.members)
  const {windowSize} =props
    return (
        <>
        {
          props.members.map((member)=>{ 
            return member.name!=='admin'? <Member key={member._id} member ={member} windowSize={windowSize}></Member> : null
            
          })
        }       
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

export default connect(mapStateToProps, mapDispatchToProps)(Members);
