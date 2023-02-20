import Image from 'next/image';
import profilePic from '../../public/photo.jpg';
export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
      <div className="w-5/12 mx-auto mx-auto">
        <div className="flex flex-col items-start justify-center "></div>
        <div className="flex flex-col items-start justify-center p-5 ">
          <h1>Hi there!</h1>
          <h2>
            I am Lucas Melo, a Software Engineer from Brazil. I am passionate about creating software that simplifies
            our lives and adds enjoyment.
          </h2>
        </div>
        <div className="flex flex-row p-5 gap-x-4">
          <div className="bg-gradient-to-r from-gray-400 to-gray-400 bg-no-repeat bg-center bg-[size:0.5px_100%] bg-cover">
            <div className="w-3.5 h-3.5 rounded-full bg-gray-400"></div>
          </div>
          <div className="flex flex-col items-start">
            <a
              href="https://goblockchain.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-xl underline"
            >
              goBlockchain
            </a>
            <h3 className="font-bold">2022/November - Present </h3>
            <h3>
              As of November of 2022, I've joined goBlockchain as a Software Engineer , I worked on a payment
              integration tool that allows for the scalable exchange of fiat currency for cryptocurrency. My
              responsibilities included designing and implementing the system, as well as maintaining and debugging the
              codebase to ensure smooth operation. This project allowed me to expand my skills in developing scalable,
              high-performance software solutions.
            </h3>
          </div>
        </div>
        <div className="flex flex-row p-5 gap-x-4">
          <div className="bg-gradient-to-r from-gray-400 to-gray-400 bg-no-repeat bg-center bg-[size:0.5px_100%] bg-cover">
            <div className="w-3.5 h-3.5 rounded-full bg-gray-400"></div>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="font-bold">2022/May - 2023/February </h3>
            <h3>
              My passion for seeing the results of my programming efforts led me to enroll in the top programming
              bootcamp in Brazil.
            </h3>
          </div>
        </div>
        <div className="flex flex-row p-5 gap-x-4">
          <div className="bg-gradient-to-r from-gray-400 to-gray-400 bg-no-repeat bg-center bg-[size:0.5px_100%] bg-cover">
            <div className="w-3.5 h-3.5 rounded-full bg-gray-400"></div>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="font-bold">2021/June - 2022/June </h3>
            <h3>
              Had my first professional experience with programming in a internship where I automated excel tasks with
              python.
            </h3>
          </div>
        </div>
        <div className="flex flex-row p-5 gap-x-4">
          <div className="bg-gradient-to-r from-gray-400 to-gray-400 bg-no-repeat bg-center bg-[size:0.5px_100%] bg-cover">
            <div className="w-3.5 h-3.5 rounded-full bg-gray-400"></div>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="font-bold">2017/January - 2022/December</h3>
            <h3>I enrolled in a college with a major in Engineering where I had my first exposure to programming.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
