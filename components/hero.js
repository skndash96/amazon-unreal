import styled from "./hero.module.scss";
import { useState } from "react";
import { banners } from "../fakedata";
import Image from "next/image";

export default function Hero() {
    return (
        <div className={"container no-scrollbar " + styled.hero}>
            {banners.map((data, index) => (
                <div key={index} className="hero-image">
                    <Image
                        objectFit="fill"
                        priority={true}
                        layout="fill"
                        src={data.src}
                    />
                </div>
            ))}
        </div>
    );
}
