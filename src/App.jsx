import React from "react";
import { useState } from "react";

const App = () => {
  const [list, selist] = useState([]);
  const [item, setitem] = useState("");

  const addtoLIst = () => {
    list.push(item);
    selist([...list]);
  };
  const removeitem= (index)=>{
    alert(list)
    list.splice(index,1)
    
    selist([...list]);

  }
  return (
    <div>
      
      <table>
        <tbody>
          {
          list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr>
                  <td>{index+1}</td>
                  <td>{element}</td>

                  <td>
                    <button onClick={()=>{removeitem(index)}}>Remove</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>nathing is here</tr>
          )}
        </tbody>
      </table>
      <input
        type="text"
        placeholder="Added Item"
        onChange={(e) => {
          setitem(e.target.value);
        }}
      />
      <button onClick={addtoLIst}>Add</button>
    </div>
  );
};

export default App;
