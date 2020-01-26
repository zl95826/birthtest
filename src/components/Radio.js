import React,{Component} from 'react';

class Radio extends Component {
  constructor(props){
    super(props);
    //   this.state={
    //   radioClick:'name'
    // } unnecessary
    this.onChange=this.onChange.bind(this);
  }
  onChange(type) {
    return ()=>{
      this.props.click(type);
    }
  }
  render() {
    return (
    <div>
      <div>
        <input type='radio' value='name' checked={this.props.sortedBy==='name'} onChange={this.onChange('name')}/><label> Sort By name</label>
      </div>
      <div>
        <input type='radio' value='age' checked={this.props.sortedBy==='age'} onChange={this.onChange('age')}/><label> Sort By age</label>
      </div>
    </div>);
  }
}

export default Radio;
