/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */


import { ethers } from "ethers";
import contractData from "./contractData.json";
import compiledContract from "./compiledContract.json";

import { create } from "ipfs-http-client";
import Studentdash from "src/views/dashboard/Studentdash";
const client = create("http://localhost:5001");

//Provider
const provider = new ethers.providers.JsonRpcProvider("");
//Signer
const wallet = new ethers.Wallet(
  "41dfe67fe4c975db3bed202eb74c26c052caf8c815712a7150e918b572a876d6",
  provider
);
//Conrtact
const myContract = new ethers.Contract(
  contractData["mainContract"],
  compiledContract["abi"],
  provider
);

const mySignerContract = myContract.connect(wallet);

export const fileHash = async (file) => {
  let response = await client.add(file);
  return response["path"];
};

export const checkLogin = async (name, password) => {
  let response = {
    status: "Success",
    loginType: null,
    userId: null,
  }
  await mySignerContract
    .loginCheck(name, password)
    .then((res) => {
      response.loginType = res[0];
      response.userId = ethers.utils.formatUnits(res[1], 0)
    })
    .catch((err) => {
      response.status = "Failed"
    });
  return response
};

export const addStudent = async (studentParams) => {
  let response = { status: "Success" };
  // let studentIdexistance = await mySignerContract
  //   .rollNumberToStudentId(studentParams.rollNumber)
  //   .then((res) => {
  //     return ethers.utils.formatUnits(res, 0);
  //   })
  //   .catch((err) => {
  //     response.status = "Failed";
  //   });
  // if (studentIdexistance > 0 || response.status === "Failed") {
  //   response.status = "Student already exists";
  //   return response;
  // }
  let studentId = await mySignerContract
    .getStudentCount()
    .then((res) => {
      return parseInt(res) + 1;
    })
    .catch((err) => {
      response.status = "Failed";
    });
  await mySignerContract
    .addStudent(
      studentParams.name,
      studentParams.rollNumber,
      studentParams.dob,
      studentParams.gender
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      response.status = "Student already exists";
    });
  await mySignerContract
    .schoolDetails(
      studentId,
      studentParams.grade,
      studentParams.email,
      studentParams.batch
    )
    .then((res) => {})
    .catch((err) => {
      response.status = "Failed";
    });
  await mySignerContract
    .personalDetails(
      studentId,
      studentParams.address,
      studentParams.caste,
      studentParams.nationality
    )
    .then((res) => {})
    .catch((err) => {
      response.status = "Failed here";
    });
  await mySignerContract
    .parentalDetails(
      studentId,
      studentParams.guardianName,
      studentParams.fatherName,
      studentParams.motherName,
      studentParams.fatherEducation,
      studentParams.motherEducation
    )
    .then((res) => {})
    .catch((err) => {
      response.status = "Failed";
    });

  return response;
};

export const searchStudent = async (name, rollNumber) => {
  let studentData = {status: 'Success', data: []}
  const tx = await mySignerContract.searchStudent(name, rollNumber);
  const receipt = await tx.wait();
  const events = receipt?.events // # => Event[] | undefined
  events.map(async (event) => {
    let studentId = parseInt(ethers.utils.formatUnits(event.topics[1], 0));
    let studentClass = 0;
    let studentBatch = 0;
    await getStudentSchoolDetails(studentId).then((res) => {      
      studentClass = res.data.grade;
      studentBatch = res.data.batch;
    })
    studentData.data.push({
      id: studentId,
      name: name,
      rollNumber: rollNumber,
      grade: studentClass,
      batch: studentBatch
})
  })
// let studentId = ethers.utils.formatUnits(events.topics[1], 0)
// let studentId = events[0].topics
  // let studentIdArray = [];
  // const myfilter = mySignerContract.filters.studentAdded(null, 1234);
  // let pastEvents = await mySignerContract.queryFilter(myfilter);
  // pastEvents.map(async (event) => {
  //   let studentIdEncoded = event["topics"][1];
  //   let studentIdDecoded = ethers.utils.formatUnits(studentIdEncoded, 0);
  //   let studentId = parseInt(studentIdDecoded);
  //   let studentPrimaryData = await mySignerContract
  //     .getStudentPrimaryData(studentId)
  //     .then((res) => {
  //       return res;
  //     })
  //     .catch((err) => {
  //       return err;
  //     });
  //   studentIdArray.push(studentPrimaryData);
  // });

  return studentData;
};
export const addAssignment = async (grade, subject, file, topic) => {
  let response = { status: "Success" };
  await mySignerContract
    .addAssignment(grade, subject, file, topic)
    .then((res) => {})
    .catch((err) => {
      response.status = "Failed";
    });
  return response;
};
export const viewAssignment = async (grade, subject, topic) => {
  let response = { status: "Success", file: '' };
  await mySignerContract
    .viewAssignment(grade, subject, topic)
    .then((res) => {
      response.file = res;
    })
    .catch((err) => {
      response.status = "Failed";
    });
  return response;
};

export const addMarksCard = async (studentId, grade, file) => {
  let response = { status: "Success" };
  await mySignerContract
    .addMarksCard(studentId, grade, file)
    .then((res) => {})
    .catch((err) => {
      response.status = "Failed";
    });
  return response;
};

export const viewMarksCard = async (studentId, grade) => {
  let response = { status: "Success", file: '' };
  await mySignerContract
    .viewMarksCard(studentId, grade)
    .then((res) => {
      response.file = res;
    })
    .catch((err) => {
      response.status = "Failed";
    });
  return response;
};


export const addTimeTable = async (grade, exam, file) => {
  let response = { status: "Success" };
  await mySignerContract
    .addTimeTable(grade, exam, file)
    .then((res) => {})
    .catch((err) => {
      response.status = "Failed";
    });
  return response;
};

export const viewClassTimeTable = async (grade) => {
  let response = { status: "Success", file: '' };
  await mySignerContract
    .viewClassTimeTable(grade)
    .then((res) => {
      response.file = res;
    })
    .catch((err) => {
      response.status = "Failed";
    });
  return response;
};
export const viewExamTimeTable = async (grade) => {
  let response = { status: "Success", file: '' };
  await mySignerContract
    .viewExamTimeTable(grade)
    .then((res) => {
      response.file = res;
    })
    .catch((err) => {
      response.status = "Failed";
    });
  return response;
};

export const getStudentPrimaryData = async (studentId) => {
  let response = { status: "Success", data: null };
  await mySignerContract
    .getStudentPrimaryData(studentId)
    .then((res) => { 
      let resObject = {
        name: res.name,
        dob: parseInt(ethers.utils.formatUnits(res.dob, 0)),
        rollNumber: parseInt(ethers.utils.formatUnits(res.rollNumber, 0)),
        gender: res.gender
      }
      response.data = resObject;
    })
    .catch((err) => {
      response.status = "Failed";
    });
  return response;
}
export const getStudentSchoolDetails = async (studentId) => {
  let response = { status: "Success", data: null };
  await mySignerContract
    .getStudentSchoolDetails(studentId)
    .then((res) => { 
      let resObject = {        
        grade: parseInt(ethers.utils.formatUnits(res._class, 0)),
        batch: parseInt(ethers.utils.formatUnits(res._batch, 0)),
        email: res._email
      }
      response.data = resObject;
    })
    .catch((err) => {
      response.status = "Failed";
    });
  return response;
}
export const getStudentPersonalDetails = async (studentId) => {
  let response = { status: "Success", data: null };
  await mySignerContract
    .getPersonalDetails(studentId)
    .then((res) => { 
      let resObject = {        
        currentAddress: res.currentAddress,
        caste: res.caste,
        nationality: res.nationality
      }
      response.data = resObject;
    })
    .catch((err) => {
      response.status = "Failed";
    });
  return response;
}
export const getStudentParentalDetails = async (studentId) => {
  let response = { status: "Success", data: null };
  await mySignerContract
    .getParentalDetails(studentId)
    .then((res) => { 
      let resObject = {        
        guardianName: res.guardianName,
        fatherName: res.fatherName,
        motherName: res.motherName,
        educationFather: res.educationFather,
        educationMother: res.educationMother
      }      
      response.data = resObject;
    })
    .catch((err) => {
      response.status = "Failed";
    });
  return response;
}

export const getStudentData = async (studentId) => {
  let response = {status: "Success", data: {}, res : []};
  await getStudentPrimaryData(studentId).then((res) => {
    response.data['name'] = res.data.name;
    response.data['dob'] = res.data.dob;
    response.data['rollNumber'] = res.data.rollNumber;
    response.data['gender'] = res.data.gender;   
  }).catch((err) => {response.status = "Failed"})
  await getStudentSchoolDetails(studentId).then((res) => {
    response.data['grade'] = res.data.grade;
    response.data['batch'] = res.data.batch;
    response.data['email'] = res.data.email;    
  }).catch((err) => {response.status = "Failed"})
  await getStudentPersonalDetails(studentId).then((res) => {
    response.data['currentAddress'] = res.data.currentAddress;
    response.data['caste'] = res.data.caste;
    response.data['nationality'] = res.data.nationality;    
  }).catch((err) => {response.status = err})
  await getStudentParentalDetails(studentId).then((res) => {
    response.data['guardianName'] = res.data.guardianName;
    response.data['fatherName'] = res.data.fatherName;
    response.data['motherName'] = res.data.motherName;
    response.data['educationFather'] = res.data.educationFather;
    response.data['educationMother'] = res.data.educationMother;    
  }).catch((err) => {
    response.status = "Failed"; 
  })

  return response;
}

export const getAssignments = async (grade) => {
  let response = {status: "Success", data: []}
  const myFilter = mySignerContract.filters.assignmentAdded(null, grade);
  let pastEvents = await mySignerContract.queryFilter(myFilter).then((res) => {
    res.map(async (event) => {
      let assignmentId = parseInt(ethers.utils.formatUnits(event.topics[1], 0))
      let assignment = {id: assignmentId, subject: '', topic: '', file: ''}
      await mySignerContract.getAssignmentData(assignmentId).then((res) => {
        assignment.subject = res.subject;
        assignment.topic = res.topic;
        assignment.file = res.file;
      })
      response.data.push(assignment);
    })    
  }).catch((err) => {response.status = "Failed";

})
return response;
  
}
