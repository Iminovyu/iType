import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
// import { MoveRight, PhoneCall } from "lucide-react";
// import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "new", "wonderful", "beautiful", "smart"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="py-25 z-10">
      <div className="container mx-auto ">
        <div className="flex gap-8 py-50 lg:py-40 items-center justify-center flex-col ">
          
          <div className="flex gap-4 flex-col ">
            <h1 className="text-4xl md:text-7xl max-w-2xl px-2 tracking-tighter text-center font-regular bg-white">
              <span className="text-spektr-cyan-50 z-10">This is something</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base md:text-xl px-2 leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious  methods. Our
              goal is  making it easier and faster than
              ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };