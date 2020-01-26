import React,{Component} from 'react';
import Radio from './components/Radio';
import Table from './components/Table';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      parameterState:"name"
    }
    this.sortByParameter=this.sortByParameter.bind(this);
  }
  sortByParameter(Parameter) {
    if(Parameter==='name') {this.setState({parameterState:"name"})}
    else {this.setState({parameterState:"age"})}
  }
  render() {
    console.log(this.state.parameterState);
  return (
    <div className="App">
      <center><h1>Birthday Record</h1></center>
      <Radio click={this.sortByParameter} sortedBy={this.state.parameterState}/>
      <Table sortedBy={this.state.parameterState}/>
    </div>
  );
  }
}

export default App;
