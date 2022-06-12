import profilePic from "./student.jpg"
import { useState, useEffect } from "react"
import { getStudentData} from "src/api/contractCall"



const ProfilePage = (props) => {



    const [studentData, setStudentData] = useState({
        batch: "loading...",
        dob: "loading...",
        educationFather: "loading...",
        educationMother: "loading...",
        email: "loading...",
        fatherName: "loading...",
        gender: "loading...",
        grade: "loading...",
        guardianName: "loading...",
        motherName: "loading...",
        name: "loading...",
        rollNumber: "loading..."
    })

   

    useEffect(() => {    
        
            getStudentData(props.id).then((res) => {                
                let newStudentData = {
                    batch: res.data.batch,
                    dob: res.data.dob,
                    educationFather: res.data.educationFather,
                    educationMother: res.data.educationMother,
                    email: res.data.email,
                    fatherName: res.data.fatherName,
                    gender: res.data.gender,
                    grade: res.data.grade,
                    guardianName: res.data.guardianName,
                    motherName: res.data.motherName,
                    name: res.data.name,
                    rollNumber: res.data.rollNumber                    
                }
                let d = new Date(res.data.dob * 1000)
                let datestring = d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear()
                newStudentData.dob = datestring
                setStudentData({ ...newStudentData })
            })
        
    }, [props])
  
    return <><div>
      
        <div style={{display: 'flex'}}>
        <div style={{height: '250px', width: '200px', border: '2px solid black', borderRadius: '20px', margin: '10px'}}>
            <img src={profilePic} alt="student" style={{ height: '100%', width: '100%', borderRadius: '20px'}} />
        </div>
        <div style={{margin: '10px', fontSize: '25px'}}>
                <div><h1 className="text-capitalize">{studentData.name}</h1></div>
            <div>email: {studentData.email}</div>
                <div>Date of Birth: {studentData.dob}</div>
            <div>Gender: {studentData.gender}</div>
        </div>
        </div>

        <div style={{marginTop: '30px'}}>
            <div style={{borderBottom: '1px solid black', width: '100%'}}><h2>School Details</h2></div>
                <div style={{width: '500px', display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                    <div>
                        <h5>Class</h5>
                        <h5>Roll Number</h5>
                        <h5>Batch</h5>
                    </div>
                    <div>
                        <h5>: {studentData.grade}</h5>
                        <h5>: {studentData.rollNumber}</h5>
                        <h5>: {studentData.batch}</h5>
                        
                    </div>
            </div>
        </div>


        <div style={{marginTop: '30px'}}>
            <div style={{ borderBottom: '1px solid black', width: '100%'}}><h2>Parent Details</h2></div>
            <div style={{display: 'flex'}}>

                <div style={{width: '500px', display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                    <div>
                        <h5>Father&apos;s name</h5>
                        <h5>Mother&apos;s name</h5>
                        <h5>Guardian&apos;s name</h5>
                    </div>
                    <div>
                        <h5>: {studentData.fatherName}</h5>
                        <h5>: {studentData.motherName}</h5>
                        <h5>: {studentData.guardianName}</h5>                        
                    </div>
                </div>
                <div style={{width: '500px', display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                    <div>
                        <h5>Father&apos;s education</h5>
                        <h5>Mother&apos;s education</h5>
                       
                    </div>
                    <div>
                        <h5>: {studentData.fatherName}</h5>
                        <h5>: {studentData.motherName}</h5>
                                               
                    </div>
                </div>
            </div>
        </div>
        </div></>
}

export default ProfilePage