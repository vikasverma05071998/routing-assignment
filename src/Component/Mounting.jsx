import React, { Component } from 'react'

export default class Mounting  extends Component {
  render() {
    return (
      <div>
       <h2>Mounting</h2> 
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
<p>
1 constructor
<hr/>

2 static getDerivedStateFromProps<hr/>
3 render<hr/>
4 componentDidMount
</p>
      </div>
    )
  }
}
