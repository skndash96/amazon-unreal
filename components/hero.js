import styled from './hero.module.scss'
import { useState } from 'react'

export default function Hero() {
    const data = [
        {
            src: "https://m.media-amazon.com/images/I/51IpWF-q4RL._SR1236,1080_.jpg",
            destination: ""
        },
        {
            src: "https://m.media-amazon.com/images/I/81Q62pLRIzL._SR1236,1080_.png",
            destination: ""
        },
        {
            src: "https://m.media-amazon.com/images/I/51CWHEaL4vL._SR1236,1080_.jpg",
            destination: ""
        },
        {
            src: "https://m.media-amazon.com/images/I/51FkM+rv2BL._SR1236,1080_.jpg",
            destination: ""
        }
    ]
    
    return (
        <div className={"container no-scrollbar " + styled.hero}>
            {
                data.map((data, index) => (
                    <div key={index} className="hero-image">
                       <img src={data.src} />
                    </div>
                ))
            }
        </div>
    )
}
