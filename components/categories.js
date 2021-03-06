import styles from "./categories.module.scss";
import { heroCategories } from "../fakedata";
import Image from "next/image";

export default function Categories() {
    return (
        <div className={"container no-scrollbar " + styles.categories}>
            <Card key={heroCategories.length} isDisclaimer />

            {heroCategories.map((category, index) => (
                <Card isPrior={!!(index < 3)} key={index} {...category} />
            ))}
        </div>
    );
}

function Card({ isPrior, isDisclaimer, image, name }) {
    return (
        <div className={`card ${isDisclaimer ? "disclaimer" : ""}`}>
            {isDisclaimer ? (
                <div>
                    <button>
                        This is built purely for educational purposes only.
                    </button>
                </div>
            ) : (
                <div className="card-image">
                    <Image
                        alt={name}
                        src={image}
                        layout="fill"
                        objectFit="fill"
                        isPrior={isPrior}
                    />
                </div>
            )}
        </div>
    );
}
