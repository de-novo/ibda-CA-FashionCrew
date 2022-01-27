import React from 'react'

function NoticeItem(props) { 
    console.log(props.item._id);
    const clickHandler =()=>{
        if (props.tap !== props.item._id){
            props.setTap(props.item._id)
        }else{
            props.setTap(null)
        }
    }

    return (
       
      <div className='content_box'>
            <div className ="content_num medium"><p>{props.item._id}</p></div>
            <div className='content_title medium' onClick={clickHandler}><p>{props.item.title}</p></div>
            <div className='content_date medium'><p>{props.item.writeDate}</p></div>
        </div>
    )
}

export default NoticeItem
