//constants
import { educations } from "../constants";
//styles
import { styles } from "../style";
//icons
import { FiExternalLink } from "react-icons/fi";
//motions
import { motion , useScroll } from "framer-motion";
// fadeIn
import { fadeIn } from '../constants';
//Ref
import { useRef } from "react";
//Icons
import CircleIcon from "../components/CircleIcon";
const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start center","start start"]
        }
    )
    const isEven= (x:number):boolean =>{
        return x % 2 === 0;
    }
    return ( 
        <section id="education" ref={ref} className="lg:h-[850px] w-full flex justify-start items-center relative mt-10 md:mt-0">
            {/* EXPERIENCE */}
            <div  className="w-full h-full sm:h-[90%] space-y-4 lg:space-y-0 flex flex-col justify-center lg:px-8">
                <h1 className={`px-2 lg:py-4 ${styles.title}`}>EDUCATION</h1>
                {educations.map((education)=>(
                    <ul 
                        ref={ref}  
                        className="relative px-4 py-2 lg:px-0 lg:py-0 flex justify-start space-x-4 lg:space-x-0 lg:grid lg:grid-cols-2 lg:gap-0 " 
                        key={education.id}>
                            <div className="lg:hidden z-20 translate-y-2">
                                <CircleIcon />
                            </div>
                            <motion.span
                                variants={fadeIn('left',0.1)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{once : false, amount: 0.1}}
                                className={isEven(education.id) ? 'border-2 border-white/50 w-10/12 lg:h-[190px] lg:grid content-center lg:space-y-2 lg:col-start-2 education_card px-4 py-2 rounded-3xl cursor-pointer lg:place-self-end' : 'border-2 border-white/50 w-10/12 lg:h-[190px] lg:grid content-center lg:space-y-2 lg:col-start-1 education_card px-4 py-2 rounded-3xl cursor-pointer '}>
                                <motion.h1 
                                    variants={fadeIn('left',0.3)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    viewport={{once : false, amount: 0.7}}
                                    className={styles.subtitle}>{education.title}
                                </motion.h1>   
                                <motion.p 
                                    variants={fadeIn('left',0.4)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    viewport={{once : false, amount: 0.7}}
                                    className={styles.subtitle}>{education.date}
                                </motion.p>
                                {education.chapters && <motion.p
                                    variants={fadeIn('left',0.5)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    viewport={{once : false, amount: 0.7}} 
                                    className={styles.paragraph}>{education.chapters}
                                </motion.p>}
                                {education.certificate && 
                                <motion.a
                                    variants={fadeIn('left',0.6)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    viewport={{once : false, amount: 0.7}} 
                                    className="place-self-end flex items-center space-x-2 hover:underline decoration-blue-700 underline-offset-4 " href={education.certificate} target="_blank" >
                                    <p className={styles.gradient__text}>See Certificate !</p>
                                    <span className="mt-1 md:mt-0 w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex justify-center items-center btn rounded-full">
                                        <FiExternalLink className="w-[10px] h-[10px] lg:w-auto lg:h-auto"/>
                                    </span>
                                </motion.a>}
                            </motion.span>
                    </ul>
                ))}
            </div>
            {/* LEFT_LINE */}
            <motion.div 
                style={{scaleY : scrollYProgress}}
                className="absolute origin-top top-[60px] lg:top-[90px] left-[27px] lg:left-1/2 bg-accent w-[4px] h-[760px] xs:h-[600px] xxs:h-[500px] sm:h-[450px] md:h-[430px] lg:h-[620px]" />
            <div className="absolute hidden lg:block lg:left-1/2 lg:top-[90px] lg:-translate-x-[11px]">
                <CircleIcon />
            </div>
            <div className="absolute hidden lg:block lg:left-1/2 lg:top-[290px] lg:-translate-x-[11px]">
                <CircleIcon />
            </div>
            <div className="absolute hidden lg:block lg:left-1/2 lg:bottom-[270px] lg:-translate-x-[11px]">
                <CircleIcon />
            </div>
            <div className="absolute hidden lg:block lg:left-1/2 lg:bottom-[80px] lg:-translate-x-[11px]">
                <CircleIcon />
            </div>

        </section>
     );
}
 
export default Education;