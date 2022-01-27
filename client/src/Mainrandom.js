


function Mainrandom(props){


    //////////////////이미지 랜덤배치
    const randomImage=(i)=>{
        let random_image=[...i];
        random_image.sort(()=>Math.random()-0.5);
        image변경(random_image)
      }
    
    
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
        randomImage(image)
      },[])


    useEffect(()=>{
        if(imageRatio상태==false){
          setTimeout(() => {
            이미지비율구하기();
          // console.log(imageRatio);
        }, 200);
      }},[imageRatio])


    useEffect(()=>{
        if(imageRatio상태==true){
        이미지배치하기(imageRatio)}
        })


    
}