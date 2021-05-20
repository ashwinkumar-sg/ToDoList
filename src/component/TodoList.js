import React from 'react'
import { connect } from 'react-redux'
function List(props){
    return(
        <div>
            <h1>Listing titles-{props.list.length}</h1>
            <ul>
                {
                props.list.map(ele=>{
                    return <li key={ele.id}>{ele.title}</li>
                })
                }
            </ul>
        </div>
    ) 
}

const mapStateToProps=(state)=>{
    return {
        list:state.list
    }
}

export default connect(mapStateToProps)(List)