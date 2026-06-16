import { cn } from '@/lib/utils';
import { Antonio } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const antionio = Antonio({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
});

export default function Home() {
    // Data showcase proyek agar kode di bawah lebih rapi dan modular
    const projects = [
        { name: 'PickBlue WebApp', url: 'app-dev.pickblue.cloud', tag: 'APP-01' },
        { name: 'PerQuest WebApp', url: 'app-dev.perquest.cloud', tag: 'APP-02' },
        { name: 'FT3App', url: 'Local Environment', tag: 'APP-03' },
    ];

    // Data tech stack untuk manifes di footer
    const stacks = ['JS', 'TS', 'React', 'NestJS', 'Laravel'];

    return (
        <div>
            {/* HERO SECTION */}
            <section className="relative bg-linear-to-b from-neutral-50 to-neutral-200 w-full h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute w-full h-full scale-110">
                    <Image src="/img/crane.png" alt="crane" fill className="object-contain translate-x-60 -scale-x-100 rotate-2" />
                </div>

                <div className="w-full h-full grid grid-rows-[100px_1fr_300px] divide-y divide-neutral-300">
                    <div className="grid grid-cols-5 divide-x divide-neutral-300">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                    <div className="grid grid-cols-2"></div>
                    <div className="grid grid-cols-5 divide-x divide-neutral-300">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                </div>

                <div className="absolute top-0 left-0 text-neutral-900 px-4 py-7.5">
                    <div className="flex items-center justify-center gap-2 py-2 px-4 bg-neutral-900 text-neutral-100">
                        <div className="tracking-tight uppercase text-sm">[Contact Me]</div>
                    </div>
                </div>

                <div className="absolute top-1/3 left-0 ml-6 max-w-xs flex flex-col gap-2 font-mono text-xs text-neutral-500 uppercase tracking-wider">
                    <span className="text-neutral-900 font-bold">[CORE SPECIFICATION]</span>
                    <p className="leading-relaxed normal-case text-neutral-600">
                        Architecting digital environments by bridging the gap between interactive web development and immersive 3D execution. Structured to scale.
                    </p>
                </div>

                <div className={cn('absolute bottom-0 left-0 p-4 text-neutral-900 flex flex-col gap-2 w-full')}>
                    <div className="grid grid-cols-2 ml-2 mb-12 w-266 border-b border-neutral-400 pb-2 font-mono text-xs tracking-widest uppercase text-neutral-500">
                        <div className="flex items-center gap-2">
                            <span>3D Generalist</span>
                            <span className="text-neutral-900 font-bold">[01]</span>
                        </div>
                        <div className="flex items-center justify-end gap-2 text-right">
                            <span className="text-neutral-900 font-bold">[02]</span>
                            <span>Web Development</span>
                        </div>
                    </div>
                    <h2 className={cn('scroll-m-20 border-b pb-2 text-5xl font-black tracking-tight first:mt-0 ml-2 -mb-4 text', antionio.className)}>Alief Khairul</h2>
                    <h1 className={cn('scroll-m-20 text-9xl font-bold tracking-tight text-balance uppercase', antionio.className)}>Scaffold Digital World</h1>
                </div>
            </section>

            {/* SHOWCASE SECTION */}
            <section className="w-full min-h-screen bg-neutral-900 text-neutral-100 flex flex-col justify-between p-6 md:p-12 relative overflow-hidden font-mono uppercase text-xs">
                {/* BG IMAGE BARU: crane-2.png difilter Hitam Putih (Grayscale) */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <Image src="/img/crane.png" alt="crane backdrop" fill className="object-contain blur-lg opacity-40 md:scale-105 scale-125 -rotate-2" />
                </div>

                {/* Header Section */}
                <div className="w-full flex justify-between items-start border-b border-neutral-700 pb-6 z-10">
                    <div className="flex flex-col gap-1">
                        <span className="text-neutral-500">[DEPLOYMENT REGISTRY]</span>
                        <h3 className={cn('text-4xl md:text-5xl font-bold tracking-tight text-neutral-100', antionio.className)}>ACTIVE DEVELOPMENT</h3>
                    </div>
                    <div className="text-right hidden sm:block text-neutral-500">
                        <div>STG_ENV // YOGYAKARTA</div>
                        <div>STATUS: STABLE_BUILD</div>
                    </div>
                </div>

                {/* Grid List Aplikasi */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 my-12 z-10">
                    {projects.map((project, idx) => {
                        const isExternal = project.url.includes('.cloud');
                        const hrefValue = isExternal ? `https://${project.url}` : '#';

                        return (
                            <Link
                                key={idx}
                                href={hrefValue}
                                target={isExternal ? '_blank' : undefined}
                                rel={isExternal ? 'noopener noreferrer' : undefined}
                                className="border border-neutral-800 bg-neutral-950/70 backdrop-blur-xs p-6 flex flex-col justify-between h-72 relative group hover:border-neutral-500 transition-colors duration-300 cursor-pointer"
                            >
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neutral-700 group-hover:border-neutral-400"></div>

                                <div>
                                    <div className="flex justify-between items-center text-neutral-500 mb-6 font-mono text-xs">
                                        <span>[{project.tag}]</span>
                                        <div className="flex items-center gap-1.5 px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                            UNDER DEV
                                        </div>
                                    </div>

                                    <h4 className={cn('text-3xl font-bold tracking-wide text-neutral-200 group-hover:text-neutral-100 transition-colors', antionio.className)}>{project.name}</h4>
                                </div>

                                <div className="mt-auto pt-6 border-t border-neutral-900 flex flex-col gap-1 font-mono text-xs">
                                    <span className="text-[10px] text-neutral-600">TARGET_URL</span>
                                    <span className="text-neutral-400 group-hover:text-neutral-200 transition-colors lowercase tracking-normal font-sans break-all">{project.url}</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Footer Section (Inner) */}
                <div className="w-full flex justify-between items-center border-t border-neutral-700 pt-6 text-neutral-500 z-10">
                    <div>[ SYSTEM PHASE 02 // PITFALL ARCH ]</div>
                    <div className="flex items-center gap-4">
                        <span>©2026</span>
                        <div className="w-2 h-2 bg-amber-500 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* MAIN FOOTER SECTION */}
            <footer className="w-full bg-neutral-950 text-neutral-400 border-t border-neutral-800 p-6 md:p-12 font-mono text-xs uppercase">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                    {/* Sisi Kiri: Tech Stack Manifes */}
                    <div className="flex flex-col gap-4">
                        <span className="text-neutral-600 text-[10px] tracking-widest">[CORE ENGINE COMPONENTS]</span>
                        <div className="flex flex-wrap gap-2">
                            {stacks.map((stack, index) => (
                                <div key={index} className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-2">
                                    <span className="text-neutral-600 text-[9px]">0{index + 1}</span>
                                    <span className="tracking-wider font-semibold">{stack}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sisi Kanan: Media Sosial (Rata Kanan) */}
                    <div className="flex flex-col md:items-end gap-4">
                        <span className="text-neutral-600 text-[10px] tracking-widest">[EXTERNAL NETWORK INDEX]</span>
                        <div className="flex items-center gap-6">
                            <Link
                                href="https://instagram.com/aliefmagic"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-1.5 hover:text-neutral-100 transition-colors duration-200"
                            >
                                <span>[ Instagram ]</span>
                                <span className="text-neutral-600 group-hover:text-neutral-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                            </Link>
                            <Link
                                href="https://linkedin.com/in/alief-khairul-fz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-1.5 hover:text-neutral-100 transition-colors duration-200"
                            >
                                <span>[ LinkedIn ]</span>
                                <span className="text-neutral-600 group-hover:text-neutral-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sub-bottom Bar */}
                <div className="w-full mt-12 pt-4 border-t border-neutral-900 flex justify-between items-center text-[10px] text-neutral-600">
                    <div>TERMINAL_PORTFOLIO_V2.0</div>
                    <div>ALL SYSTEMS OPERATIONAL</div>
                </div>
            </footer>
        </div>
    );
}
