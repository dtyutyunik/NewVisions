import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import studentsData from './students.json';

class App extends Component {

constructor(props){
  super(props);

  this.state=({
    counselorStudent:{},
    counselorStudentAttendance:{},
    absentAmount: 60,
    guidanceCounselors: [],
    selectedCounselor: 'Morales, Miles'
  })
}

componentDidMount=()=>{
  let guidanceCounselor=new Set();
  let guideanceObj={};
  let studendtObj={
    firstName:'',
    lastName:'',
    studentId:'',
    email:'',
    attendancePercentage:0
  }

  for(let i of studentsData){
    guideanceObj[i.guidanceCounselor]=[];
    guidanceCounselor.add(i.guidanceCounselor)
  }
  guidanceCounselor=Array.from(guidanceCounselor)

for(let j=0;j<guidanceCounselor.length;j++){
  for(let i=0;i<studentsData.length;i++){
      if(studentsData[i].guidanceCounselor===guidanceCounselor[j]){
        studendtObj.firstName=studentsData[i].firstName;
        studendtObj.lastName=studentsData[i].lastName;
        studendtObj.studentId=studentsData[i].studentId;
        studendtObj.email=studentsData[i].email;
        studendtObj.attendancePercentage=studentsData[i].attendancePercentage;
        guideanceObj[guidanceCounselor[j]].push(studendtObj);
      }
      studendtObj={
        firstName:'',lastName:'',studentId:'',email:'',attendancePercentage:0
      }
    }
}
  this.setState({
    counselorStudent: guideanceObj,
    counselorStudentAttendance: guideanceObj,
    guidanceCounselors: guidanceCounselor
  })

}

  calculateAttendance=(attend)=>{
    let att=this.state.counselorStudent;
    let tempAttendance={};
    for(let i in att){
      let attendance=att[i].filter(i=>i.attendancePercentage>=attend)
      tempAttendance[i]=attendance;
    }
    this.setState({
      counselorStudentAttendance: tempAttendance
    })
  }

handleChange=(e)=>{
  let {name,value}=e.target;
  this.setState({
    [name]:value
  })
}

handleSubmit=(e)=>{
  e.preventDefault();
  this.calculateAttendance(this.state.absentAmount);

}

render(){
  let {counselorStudent,absentAmount,counselorStudentAttendance,guidanceCounselors,selectedCounselor}=this.state;
  let studentsToShow=counselorStudentAttendance[selectedCounselor] || [];
  return (
      <div className="App">


      <form onSubmit={this.handleSubmit}>
      <label>Select Attendance Percentage
        <input className='absentInput'
         type='number'
         max='100'
         min='0'
         value={absentAmount}
         name='absentAmount'
         onChange={this.handleChange}/>
         </label>
        <button type='submit'>Update</button>
      </form>


      <label>
          Select Counselor to Find Student Absence:

          <select value={selectedCounselor} name='selectedCounselor' onChange={this.handleChange}>
          {guidanceCounselors.map(i=>{
              return <option value={i}>{i}</option>
            })}
          </select>

        </label>


        <h1>Student List</h1>
        <div className='studentContainer'>{studentsToShow.length>0?studentsToShow.map((i,index)=>{
          return<div className='studentBreakdown' key={index}>
          <p>Name: {i.firstName} {i.lastName}</p>
          <p>Email: {i.email}</p>
          <p>Attendance of {i.attendancePercentage}%</p>
          </div>
        }):'nothing to show'}</div>

      </div>
    );
  }
}

export default App;
