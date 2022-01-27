import './App.css';
import React,{useEffect, useState, useRef, forwardRef} from 'react'
import App from './App'
function ImageRandom(image, imageRatio,imageRatio상태, boxRef){


let [image,image변경]=useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
let [imageRatio,imageRatio수정]=useState([]);
let [imageRatio상태,imageRatio상태수정]=useState(false); ///false 는 빈상태


//////////////////이미지 랜덤배치
const randomImage=(i)=>{
  let random_image=[...i];
  random_image.sort(()=>Math.random()-0.5);
  image변경(random_image)
}

useEffect(()=>{
  randomImage(image)
},[])

const boxRef = useRef([])




//////////////////////이미지 비율구하기
const 이미지비율구하기 = ()=>{
  let 예비이미지비율=[...imageRatio];
  image.map((a,i)=>{
    let x = boxRef.current[i].current.clientWidth;
    let y = boxRef.current[i].current.clientHeight;
    // 디버깅구간//
    // console.log(i,"",x)
    // console.log(i,"",y)
    ////////////
    예비이미지비율[i]=Math.round(x/y*100000)
  });
  imageRatio수정(예비이미지비율)
  let random= Math.floor(Math.random()*imageRatio.length)
 if(imageRatio[random]!=undefined){
    imageRatio상태수정(true) //비율구하기 완료
  }
  }
useEffect(()=>{
  if(imageRatio상태==false){
    setTimeout(() => {
      이미지비율구하기();
    // console.log(imageRatio);
  }, 200);
}},[imageRatio])
//////////////////////////////////
const 이미지배치하기 =(array) =>{
  let 작업할개수=array.length;
  let now개수=Math.floor(Math.random()*4)+2; //2~6 
  let before개수=0;
  let rowWidthSum= 0;
  let 작업한개수=0;
  while(작업할개수>0 && 작업할개수!=0){
    if(작업할개수>=now개수&&작업할개수!=0){
      array.slice(작업한개수,작업한개수+now개수).map((a,i)=>{
        rowWidthSum+=a;
        // console.log(a,"",rowWidthSum)
      })
        
      array.slice(작업한개수,작업한개수+now개수).map((a,i)=>{
        boxRef.current[i+작업한개수].current.style.width=`${a/rowWidthSum*100}%`
      
      })
    }
    작업할개수-=now개수;
    before개수=now개수;
    rowWidthSum=0
    작업한개수+=now개수
    now개수=Math.floor(Math.random()*4)+2;
    const now개수구하기=()=>{
      if(now개수<=작업할개수){
        return now개수
      }
      else{
        return now개수구하기()
      }
    }
  }
}

useEffect(()=>{
if(imageRatio상태==true){
이미지배치하기(imageRatio)}
})

}


export default ImageRandom