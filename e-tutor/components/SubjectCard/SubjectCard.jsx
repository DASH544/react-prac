import React from 'react'
import { FaComputer, FaBook } from "react-icons/fa6"
import {motion} from "framer-motion"

const subjectList = [
  {
    id: 1,
    name: "Engineering",
    icon: <FaComputer />,
    color: "#0063ff",
    delay: 0.2,
  },
  {
    id: 2,
    name: "English",
    icon: <FaBook />,
    color: "#00c986",
    delay: 0.3,
  },
  {
    id: 3,
    name: "Programming",
    icon: <FaComputer />,
    color: "#922aee",
    delay: 0.4,
  },
  {
    id: 4,
    name: "Science",
    icon: <FaBook />,
    color: "#ea7516",
    delay: 0.5,
  },
  {
    id: 5,
    name: "History",
    icon: <FaBook />,
    color: "#075267",
    delay: 0.6,
  },
  {
    id: 6,
    name: "Psychology",
    icon: <FaBook />,
    color: "#986d1d",
    delay: 0.7,
  },
  {
    id: 7,
    name: "Web design",
    icon: <FaBook />,
    color: "#b93838",
    delay: 0.8,
  },
  {
    id: 8,
    name: "See all",
    icon: <FaBook />,
    color: "#464646",
    delay: 0.9,
  },
];

const SubjectCard = () => {
  return (
    <>
     <div className='mx-auto px-2 lg:max-w-6xl py-14 md:py-24'>
            <div className='space-y-6 p-6 text-center max-w-[600px] mx-auto mb-5'>
                <h1 className='uppercase font-semibold  text-orange-500'>Our tutor subjects</h1>
                <p className='font-semibold text-3xl'>Find Online Tutor in any Subject</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 '>
                {
                    subjectList.map((item)=>
                        {
                            return(
                                <motion.div 
                                key={item.id}
                                initial={{opacity:0,x:-200}}
                                whileInView={{opacity:1,x:0}}
                                transition={{type:"spring",stiffness:100,delay:item.delay}}
                                className='border  p-4 rounded-lg flex justify-start gap-4 items-center hover:scale-105 hover:shadow-xl duration-200 cursor-pointer' >
                                    <div style={{color:item.color,backgroundColor:item.color + "20"}}className='w-10 h-10 rounded-md flex justify-center items-center'>{item.icon}</div>
                                    <p>{item.name}</p>
                                </motion.div>
                            )
                        })
                }
            </div>
        </div> 
    </>
  )
}

export default SubjectCard
