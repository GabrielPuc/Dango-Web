import {useState} from 'react';
import {motion} from 'framer-motion';

const FlippableCard = ({front, back}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    function handleFlip() {
        setIsFlipped(!isFlipped);
    }

    return (<div className="flip-card w-[300px] h-[400px]" onClick={handleFlip}>
        <motion.div className="flip-card-inner text-black w-[100%] h-[100%] rounded-md" initial={false} animate={{rotateY: isFlipped ? 180 : 360}} transition={{duration: 0.6}}>
            <div className="flip-card-front w-[100%] h-[100%] bg-stone-300 flex justify-center items-center rounded-lg">
                {front}
            </div>
            <div className="flip-card-back w-[100%] h-[100%] bg-stone-300 flex justify-center items-center rounded-lg">
                {back}
            </div>
        </motion.div>
    </div>);
}

export default FlippableCard;