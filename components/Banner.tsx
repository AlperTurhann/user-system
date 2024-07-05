import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  description: string;
  buttonText: string;
  routerPage: string;
  colorStart: string;
  colorEnd: string;
}

const Banner = ({
  title,
  description,
  buttonText,
  routerPage,
  colorStart,
  colorEnd,
}: Props) => {
  const router = useRouter();

  return (
    <div className={`px-6 py-12 bg-gradient-to-r ${colorStart} ${colorEnd}`}>
      <div className="flex flex-col justify-center items-center text-center text-white">
        <h2 className="text-3xl font-bold mb-4 sm:text-4xl">{title}</h2>
        <p className="text-center text-base mb-8">{description}</p>
        <Button
          type="button"
          onClick={() => router.push(routerPage)}
          className="text-sm font-semibold rounded-lg py-3 px-6 bg-white text-sky-600 hover:bg-slate-100"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
