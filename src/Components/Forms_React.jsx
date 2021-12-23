import React from "react"
function Create_Forms(){
    return(
        <div>
            <h2>Add a new Blog</h2>
            <form>
                <label>Blog title</label>
                <inpot
                 type="text"
                 required
                /> 
                <label>Blog body</label>
               <textarea >
                   required
               </textarea>
               <label>Blog author</label>
               <select >
                   <option value="david">david</option>
                   <option value="rivi">rivi</option>
                   <button>add Blog </button>
               </select>
            </form>
        </div>
    );
}
export default Create_Forms;