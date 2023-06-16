import React from 'react';
import { motion } from "framer-motion";
import { useRef, useEffect, useState} from "react";
import images from "./../images.jsx";

export default function Slider() {
	const [width, setWidth] = useState(0);
	const carousel = useRef();
	useEffect(()=>{
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	},[])
	return (	
		<motion.div ref={carousel} whileTap={{cursor: "grabbing"}} className="carousel">
			<motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="innercarousel">
				{images.map(image=>{
					return (
						<motion.div className="item">
							<img src={image} key={image} alt="" />
						</motion.div>
						);
				})}
			</motion.div>
		</motion.div>
	)
}