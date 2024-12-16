export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Muthoni Njoroge",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Amina Mohamed",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Kamau Mwangi",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Faith Wambui",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Ochieng' Odhiambo",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Zuri Okello",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jabari Mwangi",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Aisha Ibrahim",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Kipchumba Ruto",
  },
];

export const adminName={
  name:"Colonel K.",
};

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
