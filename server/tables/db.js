const createDoctorTable = require("./doctors");
const createPatientTable = require("./patients");
const createLabTable = require("./labAssistant");
const createAppointmentTable = require("./appointment");
const createReportTable = require("./reports");
const mapPatientReportTable = require("./patientReport");

async function createTables() {
  await createDoctorTable();
  await createPatientTable();
  await createLabTable();
  await createAppointmentTable();
  await createReportTable();
  await mapPatientReportTable();
}

createTables()
  .then(() => {
    console.log("Tables created");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    process.exit(0);
  });
