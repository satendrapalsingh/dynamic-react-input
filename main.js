/*
add the root container in your index/html...
<div id="container"></div>
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			values: [],
			fieldCount: 0,
			maxLimit: 3,
		};
  }
  
  createUI(){
     return this.state.values.map((el, i) => 
         <div key={i}>
    	    <input type="text" value={el||''} onChange={() => this.handleChange(i, event)}/>
    	    <input type='button' value='&#x2716;' onClick={() => this.removeClick(i)}/>
         </div>          
     )
  }
  
  handleChange(i, event) {
     let values = [...this.state.values];
     values[i] = event.target.value;
     this.setState({ values });
  }
  
  addClick(){
    this.setState(
			prevState => ({ 
			values: [...prevState.values, ''], 
			fieldCount: prevState.fieldCount + 1,
		}));				
  }
  
  removeClick(i){
     let values = [...this.state.values];
     values.splice(i,1);
     this.setState(prevState => ({
			 values,
			 fieldCount: prevState.fieldCount - 1,
		 }));
  }
  
  handleSubmit(event) {
    alert('submitted values: ' + this.state.values.join(', ') + " | count: " + this.state.fieldCount);
    event.preventDefault();
  }
		
  render() {
		return (
			<form onSubmit={() => this.handleSubmit()}>
				{this.createUI()}
				{(this.state.fieldCount < this.state.maxLimit) && ( <input type='button' value='&#x2795;' onClick={() => this.addClick()}/> ) }							
				<input type="submit" value="Submit" />
			</form>
		);
 }
}

ReactDOM.render(<App />, document.getElementById('container'));
