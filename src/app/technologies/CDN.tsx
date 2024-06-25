import Image from "next/image";
export default function CDN() {
    return (
        <>
            <Image src="/cdn123.png" width={700} height={700} alt="Logo" />

        </>
    );
}
