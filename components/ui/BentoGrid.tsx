"use client"
import ReactPlayer from 'react-player';
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import  {GlobeDemo}  from "./GridGlobe";
import Lottie from "react-lottie";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import animationData from '@/data/confetti.json';
import MagicButton from "./MagicButton";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {

  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?:number;
  img?:string;
  imgClassName?:string;
  titleClassName?:string;
  spareImg?:string;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
    const [copied,setCopied]=useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('mailtoksingh08@gmail.com');

        setCopied(true);
    }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
     background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >


        <div className={`${id === 6 && 'flex w-full justify-center '} h-full`}>
            <div className="w-full h-full absolute">
                {img && (
                    <img 
                    src={img}
                    alt={img}
                    className={cn(imgClassName,'object-cover object-center ')}/>
                )}

            </div>
            <div className={`absolute right-0 -bottom-5 ${id ===5 && 'w-full opacity-80'}`}>
                {spareImg && (
                    <img
                        src={spareImg}
                        alt={spareImg}
                        className={`object-cover object-center w-full h-full`}
                    />
                )}

            </div>
                {id===6 && (
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                    </BackgroundGradientAnimation>
                )}
        
        <div className={cn(
            titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
                
                   
        )}>
                <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                    {description}
                </div>
                 <div className="font-sans font-bold text-lg lg:text-3xl max-w-full z-10">
          {title}
        </div>
       {id === 1 && (
  <a href="https://www.youtube.com/watch?v=E64TKUqgi_4" target="_blank" rel="noopener noreferrer" className="font-normal pt-4">
    <div>Step Inside, Click Here!</div>
  </a>
  
)}
<div className="video-container">
 {isClient && id === 5 && (
  <div>
        <div>

          <div className='mb-6'>
            <div className="font-sans font-bold text-3xl text-center pt-0 mt-0 mb-2">
            <a href="https://www.behance.net/gallery/203812557/Vivacity24-Fest-Branding">Behance Project Link</a>
            </div>
            <p className='font-sans font-light text-lg text-center'>Showcasing our year-long journey of dynamic motion graphics  <br />and engaging reels for Vivacity.</p>
          </div>
          <ReactPlayer
            className="rounded-sm"
            style={{ borderRadius: '12px' }}
            url="/draft1.mp4" // Path to your video file
            width="100%"     // Adjust width as needed
            height="auto"    // Adjust height as needed
            playing          // Automatically starts playing the video
            loop             // Makes the video loop continuously
            controls={false} // Hides the controls
          />
        </div>
        
        </div>
        
      )}
      </div>

        {id===2 && <GlobeDemo />}
        {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                <div className="flex flex-col gap-3 lg:gap-8">
                    {['Motion G.','Cinematic Edits','Motion Graphics'].map((item)=>(
                        <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                            {item}
                        </span>
                    ))}
                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                </div>
                <div className="flex flex-col gap-3 lg:gap-8">
                      <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                    {['Creative Cuts','Striking Visuals',''].map((item)=>(
                        <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                            {item}
                        </span>
                    ))}
                  
                </div>
            </div>
        )}

        {id===6 && (
            <div className="mt-5 relative">
                <div className={`absolute -bottom-5 right-0`}>
                    <Lottie options={{
                        loop:copied,
                        autoplay:copied,
                        animationData:animationData,
                        rendererSettings:{
                            preserveAspectRatio:'xMidYMid slice'
                        }
                    }}/>
                </div>
                <MagicButton
                    title={copied ? 'Email copied' : "Copy my Email!"}
                    icon={<IoCopyOutline/>}
                    position="left"
                    otherClasses="!bg-[#161a31]"
                    handleClick={handleCopy}/>
            </div>
        )}
    </div>
    </div>
    </div>
  );
};
