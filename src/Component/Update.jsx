import React from "react";

class Update extends React.Component{
    
    render(){
        return(
            <div>
            <h3>Updating</h3>
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
<p>
static getDerivedStateFromProps<hr/>
shouldComponentUpdate<hr/>
render<hr/>
getSnapshotBeforeUpdate<hr/>
componentDidUpdate
</p>
            </div>
        )
    }    
}
export default Update