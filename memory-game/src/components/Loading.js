import loadingCat from '../img/loading-cat.gif'
import React, { useEffect } from "react";
function Loading(props){
    
useEffect(()=>{
    const timer= setTimeout(()=>{
        props.setLoad(true);   
    }, 1500);
    return()=>clearTimeout(timer);
},[props]);
    return(
        <div>
            <div id='LoadingScreen'>
                <h1>Page is loading...</h1>
                <img 
                    src={loadingCat}
                    alt='loading cat says page is loading!'
                />
            </div>
        </div>
    )
}

export default Loading