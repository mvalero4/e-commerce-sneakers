import { PrevIcon } from '../components/PrevIcon';
import { NextIcon } from '../components/NextIcon';

import { useState, useRef } from 'react';

export const SlideProduct = ({ 
    ARRAY_IMGS = [], 
    ARRAY_IMGS_SMALL = [],
    ...props
}) => {
    const btnSlider = useRef(null);
    const [index, setIndex] = useState(0);

    function handleClickNext() {
        index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index + 1);
    }

    const handleClickPrev = () => {
        index === 0 ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1);
    };

    return (
        <section {...props}>
            <div className="relative col-span-4">
                <img
                    src={ARRAY_IMGS[index]}
                    alt=""
                    className="aspect-[16/13] w-full object-cover md:aspect-[16/18] md:rounded-md xl:aspect-[16/16] 2xl:max-h-[500px]"
                />
                <div
                    ref={btnSlider}
                    className={`absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4`}
                >
                    <button
                        className="grid h-10 w-10 place-items-center  rounded-full bg-white"
                        onClick={handleClickPrev}
                    >
                        <PrevIcon />
                    </button>
                    <button
                        className=" grid h-10 w-10 place-items-center rounded-full bg-white"
                        onClick={handleClickNext}
                    >
                        <NextIcon />
                    </button>
                </div>
            </div>
            {ARRAY_IMGS_SMALL.map((smallImg, i) => (
                <div
                    key={i}
                    onClick={() => {
                        setIndex(i);
                    }}
                    className="relative cursor-pointer overflow-hidden rounded-md"
                >
                    <img
                        src={smallImg}
                        alt=""
                        className="hidden md:block md:rounded-md"
                    />
                    <span
                        className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${
                            i === index && "bg-[rgba(255,255,255,0.5)]"
                        }`}
                    ></span>
                </div>
            ))}
        </section>
    );
}