import { Iimage } from "@/types";
import Image from "next/image";
import React from "react";
import { HomePageAdidas } from "@/data/data";
import Link from "next/link";
import Buttons from "./Button";

interface ImageListProps {
	HomePageAdidas: Iimage[];
}

export const AdidasOfficialStoreSection: React.FC<ImageListProps> = ({
	HomePageAdidas,
}) => {
	return (
		<div className="w-full h-auto bg-appWhite py-2">
			<div className="h1-header-addidas-div px-6">
				<h3> Adidas Official Store </h3>
				<Link href={"/"}>
					<h3> SEE ALL </h3>
				</Link>
			</div>
			<div className="officialvendor-allimg-container">
				{HomePageAdidas.map((image) => (
					<div key={image.id}>
						<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 h-40">
							<Image
								src={image.imageSrc}
								alt={image.imageAlt}
								width={image.width}
								height={image.height}
								className="h-full w-full  object-center group-hover:opacity-75"
							/>
						</div>
						<div className="store-botton ">
							<Buttons small label="Shop Now" />
						</div>
					</div>
				))}
			</div>
		</div >
	);
};
