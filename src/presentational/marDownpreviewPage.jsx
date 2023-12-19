

const  MarkDownPresentational=({text,handleChange,html})=>{
console.log(text);
    
return(
    <div id="outer-div">
        <div id="editor">
            <div id="toggleEditor"></div>
        <textarea name="editor" id="topTextArea" cols="30" rows="10" value={text} onChange={handleChange} style={{ resize: 'vertical', width: '100%' }}></textarea>
        </div>
        <div id="preview"  >
         <div id="togglePreview"></div>
      
         <code dangerouslySetInnerHTML={{ __html: html }} ></code>

        </div>     
    </div>
)
}


export default MarkDownPresentational