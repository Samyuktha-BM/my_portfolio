import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import expense from "../../images/brandbird.jpg";
import flora from "../../images/flora.jpg";
import ticket from "../../images/ticket.jpg";

export default function projects() {
  return (
    <div className="flex justify-center">
      <CardContainer className="inter-var mr-20 bg-black text-white">
        <CardBody className="bg-black relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.8]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">

          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={expense}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className=" dark:text-white mt-10"
          >
            TechStack: 
            <span style={{marginLeft:"5px",color:"#FFB84C"}}>MongoDB React.js Python FastAPI </span>
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 text-white mt-10"
          >
            Expense Entry Assistance 
          </CardItem>

          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Designed and Developed a GPT-Based solution for automating expense report generation and categorization. The system aids users in logging travel expenses and generates detailed expense reports with statistics.
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              GitHub
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var mr-20">
        <CardBody className="bg-black relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.8]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">

          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={ flora }
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className=" text-white mt-10"
          >
            TechStack: 
            <span style={{marginLeft:"5px",color:"#8576FF"}}>MongoDB FastAPI HTML CSS Javascript</span>
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white mt-10"
          >
            Flora Distribution 
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Developed for managing himalayan flora database by integrating frontend and backend for CRUD operations using MongoDB. 
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              GitHub
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var mr-20">
        <CardBody className="bg-black relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.8]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 borderbg-black relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.8]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">

          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={ ticket }
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className=" text-white mt-10"
          >
            TechStack: 
            <span style={{marginLeft:"5px",color:"#F72798"}}>HTML CSS Javascript</span>
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white mt-10"
          >
            Flora Distribution 
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Developed for managing himalayan flora database by integrating frontend and backend for CRUD operations using MongoDB. 
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              GitHub
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
