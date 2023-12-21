 import expand  from  '../assets/icons8-expand-30.png'
 import  minimize from '../assets/icons8-minimize-30.png'
const  MarkDownPresentational=({text,handleChange,html,hadleClick,expandd,handleMinimize,
  handlePreviewExpand,expandPreview,handlePreviewMinimize,userText, userTextPlain})=>{

 console.log('preseentationaluserText',userText);
 
return(
  
    <div id="outer-div">
        {expandPreview?null: <div id="editorbox" style={expandd?{height:'100vh'}:{}}>
            <div id="toggleEditor"  >
                 <div id='editorHeader'>
                   Editor 
                </div>
                <div  >
                 <img src={expandd?minimize:expand} alt="expand Button"  onClick={expandd?handleMinimize:hadleClick} id='expandImage' />
                </div>
                    
                    </div>
        <textarea name="editor" id="editor" cols="30" rows="10" value={html.length<1?userTextPlain:text} onChange={handleChange} style={{ resize: 'vertical', width: '100%', height:'100%'}} ></textarea>
        </div>}
        {expandd?null:<div id="previewbox"  style={expandPreview?{height:'100%', minHeight:'100vh'}:{}} >
         <div id="togglePreview">
                <div id='previewHeader'>
                  Preview 
                </div>
                <div>
                 <img src={expandPreview?minimize:expand} alt="expand Button"   id='expandImage' onClick={expandPreview?handlePreviewMinimize:handlePreviewExpand}/>
                </div>
         </div>
        
         <div dangerouslySetInnerHTML={html.length<1?{ __html: userText}:{ __html: html }}  id='preview'></div>
        
        </div>    }
          
    </div>
)
}


export default MarkDownPresentational