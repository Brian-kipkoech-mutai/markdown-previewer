import MarkDownPresentational from "../presentational/marDownpreviewPage";
import {  connect } from "react-redux";
import inputAction from "../redux/actions/inputAction";

import expandEditorAction from "../redux/actions/toggleEditorAction";
import minimizeAction from "../redux/actions/minimizeAction";
import expandPreview from "../redux/actions/expandpreviwaction";
import minimizePreview from "../redux/actions/minimizePreview";
import { marked } from "marked";

 
marked.setOptions(
   {
      breaks:true
   }
)
  const MarkdownComponent=({text,handleChange,hadleClick,expand,handleMinimize,
   handlePreviewExpand,expandPreview,handlePreviewMinimize ,userText})=>{
   
         
           const mappedHtml = text.map(element =>marked(element ));
           
             const markedText =userText.map(element=>marked(element));
             console.log(userText);

             
     
 return(
    <MarkDownPresentational
    text={text}
    handleChange={handleChange}
    html={mappedHtml}
    hadleClick={hadleClick}
    expandd={expand}
    handleMinimize={handleMinimize}
    handlePreviewExpand={handlePreviewExpand}
    expandPreview={expandPreview}
    handlePreviewMinimize={handlePreviewMinimize}
    userText={markedText}
    userTextPlain={userText}

    />
  
 )    
    
     
 }

 const mapStateToProps=(state)=>(
    {
        text:state.inputReducer.input,
        userText:state.inputReducer.userInput,
        expand: state.expandEditorReducer.expand,
        expandPreview: state.expandEditorReducer.previewExpand
    }
 )

 const mapDispatchToProps=(dispatch)=>(
    {
        handleChange:(event)=>{
            const input=event.target.value
           return dispatch(inputAction(input))
        },
        hadleClick:()=>{
               return dispatch(expandEditorAction())
        },
        handleMinimize:()=>{
         return dispatch(minimizeAction())
        },
        handlePreviewExpand:()=>{
         return dispatch(expandPreview())
        },
        handlePreviewMinimize:()=>{
         return dispatch(minimizePreview())
        }

    }
 )


 export default connect(mapStateToProps,mapDispatchToProps)(MarkdownComponent)