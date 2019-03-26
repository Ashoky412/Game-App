import React from 'react';
import PetComponent from './petComponent';
import axios from 'axios';


// var HomePage = function(){
    var style = {
        textAlign: 'center',
        color: 'blue',

    }
    
var API_KEY='123456789'
var CAT_URL='http://localhost:63000/cat/?api_key='+ API_KEY;
var DOG_URL='http://localhost:63000/cat/?api_key='+ API_KEY;


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            cat:{ likesCount:0, results:''},
            dog:{likesCount:0, results:''}
        }
        // this.catCompInstanceRef=null;
        // this.dogCompInstanceRef=null;
        this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
        this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this)
        this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
        this.handleDisLikeBtnClick = this.handleDisLikeBtnClick.bind(this);
    }

    componentWillMount(){
        console.log('hello componentWillMount ')
    }
    componentDidMount(){
        axios.get(CAT_URL)
             .then(function(resp){
                 console.log(resp);
                 
             })
    }
    handleLikeBtnClick(event){
        var petName = event.target.value
        if(petName==='Cat'){
            this.setState(function(prevState){
                return{
                    cat : {likesCount:prevState.cat.likesCount + 1 , results : prevState.cat.results}
                    // catLikesCount:prevState.catLikesCount + 1,
                    // dogLikesCount:prevState.dogLikesCount
                }
            })
        }else if(petName==='Dog'){
            this.setState(function(prevState){
                return{
                    dog : {likesCount:prevState.dog.likesCount + 1 , results : prevState.dog.results}
                    // catLikesCount:prevState.catLikesCount ,
                    // dogLikesCount:prevState.dogLikesCount + 1
                }
            })
        }
       
    }

    handleDisLikeBtnClick(event){
        var petName = event.target.value
        if(petName==='Cat'){
            this.setState(function(prevState){
                return{
                    cat : {likesCount:prevState.cat.likesCount - 1 , results : prevState.cat.results}
                    // catLikesCount:prevState.catLikesCount - 1,
                    // dogLikesCount:prevState.dogLikesCount
                }
            })
        }else if(petName==='Dog'){
            this.setState(function(prevState){
                return{
                    dog : {likesCount:prevState.dog.likesCount - 1 , results : prevState.dog.results}
                    // catLikesCount:prevState.catLikesCount ,
                    // dogLikesCount:prevState.dogLikesCount - 1
                }
            })
        }
        
         
    }
    handleShowWinnerBtnClick(){

        //this is for 'ref' code
        // console.log(this.catCompInstanceRef);
        // console.log(this.dogCompInstanceRef);
        // var catLikesCount = this.catCompInstanceRef.state.likesCount;
        // var dogLikesCount = this.dogCompInstanceRef.state.likesCount;
        var catLikesCount=this.state.cat.likesCount;
        var dogLikesCount=this.state.dog.likesCount;
        var catResults = 'Tie';
        var dogResults = 'Tie';

        if(catLikesCount > dogLikesCount){
            console.log('cat is winner')
            catResults = 'Winner';
            dogResults = 'Loser';
        }else if(catLikesCount < dogLikesCount){
            console.log('dog is winner');
            catResults = 'Loser';
            dogResults = 'Winner';
        }

        this.setState(function(prevState){
            return{
                cat : {likesCount:prevState.cat.likesCount , results :catResults},
                dog : {likesCount:prevState.dog.likesCount , results :dogResults}
            }
        })
    }
    handleStartOverBtnClick(){
        console.log('start here');
        this.setState({
            cat:{ likesCount:0, results:''},
            dog:{likesCount:0, results:''}
        })
        
    }
    render(){
        return(
            <div>
                <h2 style={style} >
                Welcome to Dog And Cat Cute Game Fight
                </h2>
                <div style={{ marginTop:30,textAlign:'center'}} >
                    <PetComponent
                        petName='Cat'
                        likesCount={this.state.cat.likesCount}
                        petUrl="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg"
                        // ref={function(compInstance){this.catCompInstanceRef = compInstance}.bind(this)}
                        onLikeBtnClick={this.handleLikeBtnClick}
                        onDislikeBtnClick={this.handleDisLikeBtnClick}
                        results ={this.state.cat.results}
                    />
                    <PetComponent
                        petName='Dog'
                        likesCount={this.state.dog.likesCount}
                        petUrl='http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Labrador-Retriever-1.jpg'
                        // ref={function(compInstance){this.dogCompInstanceRef = compInstance}.bind(this)}
                        onLikeBtnClick={this.handleLikeBtnClick}
                        onDislikeBtnClick={this.handleDisLikeBtnClick}
                        results ={this.state.dog.results}
                     />
                </div>
                <div style={{textAlign:'center'}}>
                   {!this.state.dog.results && <button style={btnStyle} onClick={this.handleShowWinnerBtnClick} >show winner</button>}
                    <button style={btnStyle} onClick={this.handleStartOverBtnClick} >start over</button>
                </div>
            </div>
        )
    }
}

var btnStyle={
    height:'20px',
    marginTop:'20px',
    marginRight:'5px'
}


export default HomePage;