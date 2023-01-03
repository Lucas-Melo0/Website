import Image from 'next/image';
import profilePic from '../../public/photo.jpg';
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-white">
          <h1 className="text-xl font-bold mt-2">About</h1>
          <div className="w-32 mt-2">
            <Image className="rounded-full object-fit" src={profilePic} alt="Picture of the author" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-5 ">
          <h1 className="text-white">Hi there!</h1>
          <h2 className="text-white">
            I am Lucas Melo, a Software Engineer from Brazil. I am passionate about creating software that simplifies
            our lives and adds enjoyment.
          </h2>
        </div>
        <div className="flex flex-col items-center text-white p-5">
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
            As of November of 2022, I've joined goBlockchain as a Software Engineer , I worked on a payment integration
            tool that allows for the scalable exchange of fiat currency for cryptocurrency. My responsibilities included
            designing and implementing the system, as well as maintaining and debugging the codebase to ensure smooth
            operation. This project allowed me to expand my skills in developing scalable, high-performance software
            solutions.
          </h3>
        </div>
        <div className="flex flex-col items-center text-white p-5">
          <h3 className="font-bold">2022/May - 2023/February </h3>
          <h3>
            My passion for seeing the results of my programming efforts led me to enroll in the top programming bootcamp
            in Brazil.
          </h3>
        </div>
        <div className="flex flex-col items-center text-white p-5">
          <h3 className="font-bold">2021/June - 2022/June </h3>
          <h3>
            Had my first professional experience with programming in a internship where I automated excel tasks with
            python.
          </h3>
        </div>
        <div className="flex flex-col items-center text-white p-5">
          <h3 className="font-bold">2017/January - 2022/December</h3>
          <h3>I enrolled in a college with a major in Engineering where I had my first exposure to programming.</h3>
        </div>
        <div className="flex flex-col items-center text-white p-5">
          <h3 className="font-bold">1997 - Setember</h3>
          <h3>Hello world.</h3>
        </div>
      </div>
    </div>
  );
}
