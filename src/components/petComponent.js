import React from 'react';

var PetComponent = function(props){
    var result= null;
    var disabled = false;
    if(props.results !== ''){
        var resultStyle = null;
        if(props.results === 'Loser'){
            resultStyle = {color:'red'}
        }else{
            resultStyle = {color:'green'}
        }
        result = <h2 style={resultStyle} >{props.results}</h2>
        disabled = true;
    }
    return(
        <div style={compStyle}>
            {result}
            {(props.results) ? (
                <h3>{props.petName} likes = {props.likesCount}</h3>
            ):(
                <h3>{props.petName}</h3>
            )}
            <img  style={{height:200 ,width:200}} src={props.petUrl} alt={props.petName+ ' img'} />     
            <br />
            <button value={props.petName} onClick={props.onLikeBtnClick}  disabled={disabled} style={btnStyle}>like</button> 
            <button value={props.petName} onClick={props.onDislikeBtnClick} disabled={disabled} style={btnStyle}>dislike</button>
        </div>
        )
}

var compStyle={
    display:'inline-block',
    marginleft:'auto',
    marginRight:'auto'
}

var btnStyle={
    width:'70px',
    height:'25px',
    marginTop:'10px',
    marginRight:'5px',
    marginleft:'5px'
}


export default PetComponent;
