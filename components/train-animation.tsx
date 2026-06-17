import Image from 'next/image';

export default function TrainAnimation() {
    return (
        <div className="w-full">
            {/* Container utama untuk memotong area luar layar */}
            <div className="relative flex w-full overflow-hidden whitespace-nowrap">
                {/* Wrapper yang menjalankan animasi dari Tailwind v4 */}
                <div className="flex animate-kereta-loop min-w-full shrink-0">
                    {/* Kereta Utama */}
                    <div className="relative h-[200px] w-[1200px] shrink-0">
                        <Image src="/img/train.png" alt="Express Train Part 1" fill priority className="object-contain" />
                    </div>

                    {/* Kereta Duplikat (Menyambung tepat di belakang kereta utama) */}
                    <div className="relative h-[200px] w-[1200px] shrink-0">
                        <Image src="/img/train.png" alt="Express Train Part 2" fill priority className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
}
