import MarkDownPresentational from "../presentational/marDownpreviewPage";
import {  connect } from "react-redux";
import inputAction from "../redux/actions/inputAction";
import {   marked } from "marked";

  const markdownComponent=({text,handleChange})=>{

    const toHtml= text.map(element=>marked(element))
    console.log(toHtml);
 return(
    <MarkDownPresentational
    text={text}
    handleChange={handleChange}
    html={toHtml}

    />
  
 )    
    
     
 }

 const mapStateToProps=(state)=>(
    {
        text:state.inputReducer.input
    }
 )

 const mapDispatchToProps=(dispatch)=>(
    {
        handleChange:(event)=>{
            const input=event.target.value
           return dispatch(inputAction(input))
        }
    }
 )


 export default connect(mapStateToProps,mapDispatchToProps)(markdownComponent)