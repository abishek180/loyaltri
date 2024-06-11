import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import Image from "next/image";
import loyaltrinew from "@/public/images/loyaltrinew.png";
import loyaltriold from "@/public/images/loyaltriold.png";
import hr from "@/public/images/hr.png"

gsap.registerPlugin(ScrollTrigger);

const images = [
	{ src: loyaltrinew },
	{ src: loyaltriold },
	{ src: hr }
];

function ServiceType() {
	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

			const animation = gsap.to(".photo:not(:first-child)", {
				opacity: 1,
				scale: 1,
				duration: 1,
				stagger: 1
			});

			ScrollTrigger.create({
				trigger: ".gallery",
				start: "top top",
				end: "bottom bottom",
				pin: ".rightblock",
				animation: animation,
				scrub: true,
				// markers: true,
			});
		});
		return () => ctx.revert();
	}, []);

	return (
		<React.Fragment>
			<Box className="gallery" sx={{ display: "flex" }}>
				<Box
					className="left"
					sx={{
						width: "50%",
						marginLeft: "auto",
						"& .details": {
							height: "100vh",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							width: "40vw",
							marginLeft: "auto",
							color: "#fff",
							fontSize: "3rem",
							fontWeight: 900,
						},
					}}
				>
					<Box className="details">BRAND PRODUCT</Box>
					<Box className="details">PRODUCT DETAILS</Box>
					<Box className="details">DESIGN AGENCY</Box>
				</Box>
				<Box
					className="rightblock"
					sx={{
						width: "50%",
						height: "100vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Box
						sx={{
							width: "40vw",
							height: "40vw",
							position: "relative",
							"& .photo": {
								position: "absolute",
								width: "100%",
								height: "100%",
								"& img": {
									height: "100%",
									width: "100%",
								},
							},
						}}
					>
						{images.map((image, index) => (
							<Box key={index} className="photo rounded-2xl overflow-hidden">
								<Image src={image.src} alt={image.alt} className="w-full h-full object-center object-cover"/>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		</React.Fragment>
	);
}

export default ServiceType;
