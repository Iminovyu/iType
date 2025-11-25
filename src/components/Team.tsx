import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TeamMembers = () => {
  //   const teamMembers = [
  //     {
  //       id: 1,
  //       firstName: "John",
  //       lastName: "Smith",
  //       position: "Frontend Developer",
  //     },
  //     {
  //       id: 2,
  //       firstName: "Sarah",
  //       lastName: "Johnson",
  //       position: "UI/UX Designer",
  //     },
  //     {
  //       id: 3,
  //       firstName: "Mike",
  //       lastName: "Chen",
  //       position: "Backend Engineer",
  //     },
  //     {
  //       id: 4,
  //       firstName: "Emma",
  //       lastName: "Wilson",
  //       position: "Project Manager",
  //     },
  //     {
  //       id: 5,
  //       firstName: "Alex",
  //       lastName: "Rodriguez",
  //       position: "DevOps Specialist",
  //     },
  //     {
  //       id: 6,
  //       firstName: "Lisa",
  //       lastName: "Brown",
  //       position: "QA Engineer",
  //     },
  //   ];

  return (
    <div className=" bg-white">
      <div className="container mx-auto">
        {/* Заголовок */}
        <div className="mx-auto max-w-fit flex flex-col items-center py-26 pb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Team Members
          </h1>
          <p className="mb-6 text-base text-muted-foreground md:text-lg">
            The people behind our work
          </p>
        </div>
        <div className="flex items-center flex-wrap justify-center gap-4">
          <Avatar className="relative">
            <AvatarImage src="/avatar-1.png" />
            <p className="absolute text-base top-[-20px] left-[20px] bg-white border-2 border-blue-200 py-1 px-2 rounded-full">
              Yusu
            </p>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/avatar-3.png" />
            <p className="absolute text-base top-[-20px] left-[13px] bg-white border-2 border-blue-200 py-1 px-2 rounded-full">
              Andrew
            </p>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/avatar-2.png" />
            <p className="absolute text-base top-[-20px] left-[0px] bg-white border-2 border-blue-200 py-1 px-2 rounded-full">
              Abdulbosit
            </p>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="/avatar-4.png" />
            <p className="absolute text-base top-[-20px] left-[4px] bg-white border-2 border-blue-200 py-1 px-2 rounded-full">
              JohaScript
            </p>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/avatar-5.png" />
            <p className="absolute text-base top-[-20px] left-[4px] bg-white border-2 border-blue-200 py-1 px-2 rounded-full">
              Saloxiddin
            </p>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-center pt-12">
          <Link
            to="/"
            state={{ scrollToContact: true }}
            className="group inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-white transition-all hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <span>Want to join our team?</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
