import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
        <div className="flex items-center justify-center gap-4">
          <Avatar>
            <AvatarImage src="/avatar-1.png" />
            <p>Iminov Yu</p>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/avatar-2.png" />
            <p>Iminov Yu</p>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/avatar-3.png" />
            <p>Iminov Yu</p>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/avatar-4.png" />
            <p>Iminov Yu</p>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/avatar-5.png" />
            <p>Iminov Yu</p>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
