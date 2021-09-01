import styled from "./hero.module.scss";
import { useState } from "react";
import { banners } from "../fakedata";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className={"container no-scrollbar " + styled.hero}>
            {banners.map(({ src, destination }, index) =>
                destination ? (
                    <Link href={destination}>
                        <div key={index} className="hero-image">
                            <Image
                                objectFit="cover"
                                priority={true}
                                layout="fill"
                                src={src}
                                alt="banner"
                            />
                        </div>
                    </Link>
                ) : (
                    <div key={index} className="hero-image">
                        <Image
                            objectFit="cover"
                            priority={true}
                            layout="fill"
                            src={src}
                            alt="banner"
                        />
                    </div>
                )
            )}
        </div>
    );
}
