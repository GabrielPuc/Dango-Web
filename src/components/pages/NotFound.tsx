import { GrDocumentMissing } from 'react-icons/gr';

function NotFound() {
  return (
    <div className="justify-center text-center text-5xl text-gray-300 h-full w-full text-4xl text-greenBright">
      <p>THE RESOURCE YOU ARE LOOKING FOR DOESN'T EXIST</p>

      <p className="flex justify-center pt-10 text-9xl text-pinkBright">
        <GrDocumentMissing />
      </p>
    </div>
  );
}

export default NotFound;
