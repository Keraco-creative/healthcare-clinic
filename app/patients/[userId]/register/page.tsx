import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

// import * as Sentry from '@sentry/nextjs'

interface SearchParamProps {
  params: {
    userId: string;
  };
}

const Register = async ({ params }: SearchParamProps) => {
  // Await the params object if it's async
  const resolvedParams = await params; // Await the params to ensure it's resolved
  
  // Now you can access the userId
  const { userId } = resolvedParams;

  const user = await getUser(userId); // Fetch user details using the userId.
  const patient = await getPatient(userId); // Fetch patient details using the userId.
  
  if (patient) {
    // If a patient exists, redirect them to a new appointment page.
    redirect(`/patients/${userId}/new-appointment`);
  }

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright py-12">© 2024 Care Pulse Wellness Center</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
