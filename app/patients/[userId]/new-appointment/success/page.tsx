import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";

// Sentry files
import * as Sentry from '@sentry/nextjs'
import { getUser } from "@/lib/actions/patient.actions";


const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  
  // Fetch the appointment data
  const appointment = await getAppointment(appointmentId);

  // 1. Check if the appointment object is valid (not undefined or null)
  if (!appointment) {
    return <div>Appointment not found!</div>; // If appointment doesn't exist, handle the error gracefully
  }

  // 2. Check if the primaryPhysician is available in the appointment data
  const doctor = appointment.primaryPhysician
    ? Doctors.find((doctor) => doctor.name === appointment.primaryPhysician)
    : null; // If primaryPhysician is missing, set doctor to null

  // 3. Check if the doctor was found
  if (!doctor) {
    return <div>Doctor information not available!</div>; // If doctor is not found, handle gracefully
  }

  // Fetch user data
  const user = userId ? await getUser(userId) : null;

  // 4. Handle user being null
  if (!user) {
    return <div>User not found!</div>; // If user is not found, return an error message
  }

  // Log success metrics to Sentry
  Sentry.metrics.set("user_view_new_appointment-success", user.name);

  return (
    <div className=" flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="h-10 w-fit"
          />
        </Link>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
            unoptimized
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>
          <p>We&apos;ll be in touch shortly to confirm.</p>
        </section>

        <section className="request-details">
          <p>Requested appointment details: </p>
          <div className="flex items-center gap-3">
            {/* Check if doctor has an image */}
            {doctor?.image && (
              <Image
                src={doctor.image}
                alt="doctor"
                width={100}
                height={100}
                className="size-6"
              />
            )}
            <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
            />
            <p> {formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>

        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>

        <p className="copyright">© 2024 Brighton Medical Care</p>
      </div>
    </div>
  );
};

export default RequestSuccess;
