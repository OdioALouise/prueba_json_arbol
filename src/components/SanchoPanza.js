import React from 'react';

function isJsonable(v) {
    try{
        return JSON.stringify(v) === JSON.stringify(JSON.parse(JSON.stringify(v)));
     } catch(e){
        /*console.error("not a dict",e);*/
        return false;
    }
}

function isDict(v) {
    return !!v && typeof v==='object' && v!==null && !(v instanceof Array) && !(v instanceof Date) && isJsonable(v);
}


function Arbol(dict) {
    var lista = [];  
    for (var key in dict) {
        if( isDict(dict[key]) ){
           lista.push( Arbol( dict[key] ) )
        }
        else{
           lista.push(dict[key])
        }
    }

    const listItems = lista.map((elemento) =>
      <li onClick={()=>{console.log("click")}}>{elemento}</li>
    );
  return <ul style={{listStyleType: "none"}}>{listItems}</ul>;
}


export default class Recorrida extends React.Component {
  constructor() {
    super();
  }


  render() {

    // Inside a React component:
    const json = {
      key1: "Mas o que salva a humanidade",
      key2: "É que não há quem cure a curiosidade",
      key3: {
        key31: "Mas o que salva a humanidade",
        key32:{
          key321:"É que não há quem cure a curiosidade",
          key322:"A curi, a curi",       
        },
      },
    }
 
    return (
        <Arbol dict={json} />
    );
  }
}
