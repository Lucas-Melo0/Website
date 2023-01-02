import Image from 'next/image';
import profilePic from '../../public/photo.jpg';
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center font-bold text-white">
          <h1 className="text-xl mt-2">About</h1>
          <div className="w-32 mt-2">
            <Image className="rounded-full object-fit" src={profilePic} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </div>
  );
}
