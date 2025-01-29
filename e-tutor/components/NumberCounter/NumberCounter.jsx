import React from "react";
import CountUp from "react-countup";
const NumberCounter = () => {
  return (
    <div className="bg-blue-500 text-white py-12 ">
      <div className="grid grid-cols-2 md:grid-cols-4 mx-auto lg:max-w-6xl px-2 gap-8 ">
        <div className="flex flex-col justify-center items-center ">
          <p className="text-3xl font-semibold">
            <CountUp
              start={0}
              end={898}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Expert Tutors</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold">
          <CountUp
             end={2000}
             separator=","
             suffix="+"
             duration={3}
             enableScrollSpy={true}
             scrollSpyOnce={true}
            />
          </p>
          <p>Hours Content</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold">
          <CountUp
             
              end={298}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p className="text-center">Subject and courses</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold">
          <CountUp
              
              end={72878}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Active Students</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
