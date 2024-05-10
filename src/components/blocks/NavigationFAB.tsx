import { BiArrowFromBottom } from 'react-icons/bi';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
export default function NavigationFAB() {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-1/4 hidden md:flex">
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
        className="fixed z-90 right-8 bg-primary w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl translate-y-20"
      >
        <BiArrowFromBottom />
      </button>
      <button
        onClick={() => navigate(-1)}
        className="fixed z-90 right-8 bg-primary w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl "
      >
        <BiArrowBack />
      </button>
    </div>
  );
}
