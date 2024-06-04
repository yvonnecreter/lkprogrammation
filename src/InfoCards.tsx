import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import './InfoCards.css';


function InfoCards() {
    const ref = useRef<HTMLInputElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    let infoCards = ref.current?.querySelectorAll('.infoCard') || [];

    const boxVariant = {
        visible: { opacity: 1, scale: 1, zIndex: 0 },
        hidden: { opacity: 0, scale: 1 },
        selected: { opacity: 1, scale: 1.2, zIndex: 1, duration: .5 },
    }
    const lineVariant = {
        hidden: { opacity: 0, width: 0 },
        selected: { opacity: 1, scale: 1.2, zIndex: 1, duration: .5 },
    }

    const handleScroll = () => {
        infoCards = ref.current?.querySelectorAll('.infoCard') || [];
        const scrollTop = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (infoCards) {
            for (let i = 0; i < infoCards.length; i++) {
                const infoCard = infoCards[i];
                const infoCardTop = infoCard.getBoundingClientRect().top;

                if (infoCardTop < scrollTop + viewportHeight * 0.75) {
                    setActiveIndex(i);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="infoCards" ref={ref}>

        </div >
    )
}

export default InfoCards;