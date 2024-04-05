import { LuConstruction } from 'react-icons/lu';

function PageInConstruction() {
  return (
    <div className="justify-center text-center text-5xl text-gray-300 h-full w-full text-4xl text-greenBright">
      <p>PAGE IN CONSTRUCTION</p>

      <p className="flex justify-center pt-10 text-9xl text-pinkBright">
        <LuConstruction />
      </p>
    </div>
  );
}

export default PageInConstruction;
