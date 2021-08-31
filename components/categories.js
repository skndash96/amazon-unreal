import styles from "./categories.module.scss";
import { heroCategories } from "../fakedata";
import Image from "next/image";

export default function Categories() {
    return (
        <div className={"container no-scrollbar " + styles.categories}>
            <Card isDisclaimer />

            {heroCategories.map((category, idx) => (
                <Card key={idx} {...category} />
            ))}
        </div>
    );
}

const Card = ({ isDisclaimer, image, name }) => {
    return (
        <div className={`card${isDisclaimer ? " disclaimer" : ""}`}>
            {isDisclaimer ? (
                <button>This ain&apos;t real Amazon!</button>
            ) : (
                <div className="card-image">
                    <Image
                        alt={name}
                        src={image}
                        layout="fill"
                        objectFit="fill"
                    />
                </div>
            )}
        </div>
    );
};
