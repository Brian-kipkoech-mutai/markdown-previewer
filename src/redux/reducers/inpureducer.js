import { INPUTSTORE } from "../actions/actionTypes"

const  defaultState={
    input:[],
    userInput:["# Welcome to my Markdown Previewer!\n\n## Designed and coded by: [Brian kipkoech](https://www.linkedin.com/in/brian-kipkoech-71b5b9248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9nnAF3gTQq2oeiliYkWdyA%3D%3D)\n\n### And here's some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.\n``` this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '\\`\\\\`\\`' && lastLine == '\\\\`\\`\\`') {\n    return multiLineCode;\n  }\n}\n```\n\n---\n\nThis is a horizontal rule.\n\n*This text will be italic*\n\n**This text will be bold**\n\n[Markdown Guide](https://www.example.com) - This is a link.\n\n- Item 1\n- Item 2\n- Item 3\n\n1. First item\n2. Second item\n3. Third item\n\n> This is a blockquote.\n>\n> It can span multiple lines.\n\nThis is inline code: `console.log(\"Hello, Markdown!\");\\`\n\n![Image](https://via.placeholder.com/150) - This is an image."
  ]
}

const inputReducer=(state=defaultState,action)=>{

    switch(action.type){
        case INPUTSTORE:
        return{
            ...defaultState,input:[...defaultState.input,action.payload]
        }
        default: return state
    }

}
export default inputReducer;