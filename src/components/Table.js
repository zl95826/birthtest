import React,{Component} from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.people = [
      {
          name: "Veronica Mize",
          dob: "11/29/2011"
      }, {
          name: "Cecilia Olsson",
          dob: "09/16/1992"
      }, {
          name: "Peter Parker",
          dob: "01/16/1992"
      }, {
          name: "Jimmy Shergil",
          dob: "12/12/2001"
      }, {
          name: "Alexander Alfred",
          dob: "02/09/1891"
      }, {
          name: "Janice Shroyer",
          dob: "12/01/1982"
      }, {
          name: "Ralph White",
          dob: "11/30/2011"
      }, {
          name: "Deborah T. Decker",
          dob: "10/31/1999"
      }
  ]; 
    this.compareOperation=this.compareOperation.bind(this);
  }
  
  compareOperation(type) {
    if(type==='name') {
    this.people.sort(function(person1,person2){
      let a= person1.name.toUpperCase();
      let b= person2.name.toUpperCase();
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;  
    });}
    else {
      this.people.sort(function(person1,person2){
        let a=new Date(person1.dob);
        let b=new Date(person2.dob);
        return a-b;
      })
    }
  }
  render() {
    this.compareOperation(this.props.sortedBy);
    console.log(this.people);
    let row=this.people.map(val=><tr key={val.name}><td>{val.name}</td><td>{val.dob}</td></tr>);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Birth</th>
          </tr>
        </thead>
        <tbody>
          {row}
        </tbody>
      </table>
    </div>
  );
  }
}

export default Table;
