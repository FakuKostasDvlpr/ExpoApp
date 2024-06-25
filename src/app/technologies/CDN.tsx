import Image from "next/image";
export default function CDN() {
    return (
        <>
            <Image src="/cdn123.png" width={500} height={500} alt="Logo" />

        </>
    );
}
