import { Link } from "react-router-dom";

import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Button from "components/Button";

const Footer = () => {
	const AddressDetail = [
		{ icon: FaLocationDot, label: "Ho Chi Minh City", path: "https://maps.app.goo.gl/ZWVsiFuvibNPksCz7" },
		{ icon: BiSolidPhoneCall, label: "(+84) 862 248 332", path: "tel:0862248332" },
		{ icon: IoMdMail, label: "caohaiduong04@gmail.com", path: "mailto:caohaiduong04@gmail.com" },
	]

	const SocialLink = [
		{ icon: FaFacebookF, label: "Facebook", path: "https://maps.app.goo.gl/ZWVsiFuvibNPksCz7" },
		{ icon: FaInstagram, label: "Instagram", path: "https://maps.app.goo.gl/ZWVsiFuvibNPksCz7" },
		{ icon: FaYoutube, label: "Youtube", path: "https://maps.app.goo.gl/ZWVsiFuvibNPksCz7" },
		{ icon: FaGithub, label: "Github", path: "https://maps.app.goo.gl/ZWVsiFuvibNPksCz7" },
	]
	return (
		<div>
			<div className='bg-[#252525] text-white py-24'>
				<div className="container grid grid-cols-3">
					<div className="col-span-1">
						<p className="text-2xl mb-6">Address</p>
						<ul className="flex flex-col items-start justify-start gap-3">
							{AddressDetail?.map((item, index) => (
								<li key={index} className="flex items-center justify-start gap-4 group w-fit cursor-pointer" title={item.label}>
									<div className="size-7 rounded-full border-[1px] border-solid border-white grid place-items-center"><item.icon size={14} /></div>
									<Link to={item.path} target={"_"} className="group-hover:text-primary duration-300  transition-colors">{item.label}</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="col-span-1">
						<p className="text-2xl mb-6">Social link</p>
						<ul className="flex flex-col items-start justify-start gap-3">
							{SocialLink?.map((item, index) => (
								<li key={index} className="flex items-center justify-start gap-4 group w-fit cursor-pointer" title={item.label}>
									<div className="size-7 rounded-full border-[1px] border-solid border-white grid place-items-center"><item.icon size={14} /></div>
									<Link to={item.path} target={"_"} className="group-hover:text-primary duration-300  transition-colors">{item.label}</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="col-span-1">
						<p className="text-2xl mb-6">Newsletter</p>
						<input className="w-[70%] px-4 py-2 focus:outline-none text-black" placeholder="Enter Your Email"/>
						<Button className={"mt-5 rounded-full"}>Subcribe</Button>
					</div>
				</div>
			</div>
			<div className='py-5 bg-white text-black text-center'>
				Copyright 2024 by Cao Hai Duong
			</div>
		</div>
	);
};

export default Footer;
