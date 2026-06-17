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
        { name: 'PickBlue WebApp', url: 'https://app-dev.pickblue.cloud', tag: 'APP-01' },
        { name: 'PerQuest WebApp', url: 'https://app-dev.perquest.cloud', tag: 'APP-02' },
        { name: 'FT3App', url: 'https://ft-3-web-docs.vercel.app', tag: 'APP-03' },
    ];

    // Data tech stack untuk manifes di footer
    const stacks = ['TypeScript', 'ReactJS', 'NestJS', 'Laravel'];

    return (
        <div className="w-full min-h-screen bg-neutral-50 overflow-x-hidden selection:bg-neutral-900 selection:text-neutral-100">
            {/* HERO SECTION */}
            <section className="relative bg-linear-to-b from-neutral-50 to-neutral-200 w-full min-h-screen lg:h-screen flex items-center justify-center overflow-hidden">
                {/* Background Crane: Disesuaikan posisinya di mobile agar tidak menutupi teks */}
                <div className="absolute z-90 inset-0 w-full h-full scale-105 sm:scale-110 pointer-events-none">
                    <Image
                        src="/img/crane.png"
                        alt="crane"
                        fill
                        priority
                        className="object-contain translate-x-28 sm:translate-x-44 md:translate-x-60 -scale-x-100 rotate-2 opacity-40 sm:opacity-100"
                    />
                </div>

                {/* Wireframe Grid: Di mobile dikurangi kolomnya agar tidak terlalu padat */}
                <div className="absolute inset-0 w-full h-full grid grid-rows-[70px_1fr_200px] sm:grid-rows-[100px_1fr_300px] divide-y divide-neutral-300 pointer-events-none z-10">
                    <div className="grid grid-cols-3 sm:grid-cols-5 divide-x divide-neutral-300">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="hidden sm:block"></div>
                        <div className="hidden sm:block"></div>
                    </div>
                    <div className="grid grid-cols-1"></div>
                    <div className="grid grid-cols-3 sm:grid-cols-5 divide-x divide-neutral-300">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="hidden sm:block"></div>
                        <div className="hidden sm:block"></div>
                    </div>
                </div>

                {/* Contact Me Button */}
                <div className="absolute top-0 left-0 text-neutral-900 p-4 sm:p-6 md:py-7.5 z-20">
                    <div className="flex items-center justify-center gap-2 py-2 px-4 bg-neutral-900 text-neutral-100">
                        <div className="tracking-tight uppercase text-xs sm:text-sm font-mono">[Contact Me]</div>
                    </div>
                </div>

                {/* Core Specification Text */}
                <div className="absolute top-[18%] sm:top-1/4 md:top-1/3 left-0 ml-4 sm:ml-6 max-w-62.5 sm:max-w-xs flex flex-col gap-2 font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider z-20">
                    <span className="text-neutral-900 font-bold">[CORE SPECIFICATION]</span>
                    <p className="leading-relaxed normal-case text-neutral-600">
                        Architecting digital environments by bridging the gap between interactive web development and immersive 3D execution. Structured to scale.
                    </p>
                </div>

                {/* Bottom Main Typography Group */}
                <div className={cn('absolute bottom-0 left-0 p-4 sm:p-6 text-neutral-900 flex flex-col gap-4 sm:gap-4 w-full z-20')}>
                    {/* Skills Header: Mengganti w-266 statis dengan sistem max-w dinamis */}
                    <div className="grid grid-cols-2 w-full max-w-full md:max-w-266.25 border-b border-neutral-400 pb-1.5 sm:pb-2 font-mono text-[10px] sm:text-xs tracking-widest uppercase text-neutral-500 sm:ml-2">
                        <div className="flex items-center gap-1 sm:gap-2">
                            <span className="truncate">3D Generalist</span>
                            <span className="text-neutral-900 font-bold">[01]</span>
                        </div>
                        <div className="flex items-center justify-end gap-1 sm:gap-2 text-right">
                            <span className="text-neutral-900 font-bold">[02]</span>
                            <span className="truncate">Web Development</span>
                        </div>
                    </div>

                    {/* Fluid Typography: Teks mengecil secara proporsional di mobile */}
                    <h2 className={cn('text-2xl sm:text-4xl md:text-5xl font-black tracking-tight ml-0.5 sm:ml-1 -mb-1 sm:-mb-3 text-neutral-400 uppercase', antionio.className)}>Alief Khairul</h2>
                    <h1 className={cn('text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-balance uppercase leading-[0.9] sm:leading-[0.85]', antionio.className)}>
                        Scaffold <br className="block sm:hidden" /> Digital World
                    </h1>
                </div>
            </section>

            {/* SHOWCASE SECTION */}
            <section className="w-full min-h-screen bg-neutral-900 text-neutral-100 flex flex-col justify-between p-4 sm:p-8 md:p-12 relative overflow-hidden font-mono uppercase text-xs">
                {/* BG Image Backdrop: Dibuat aman untuk text kontras */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <Image src="/img/crane.png" alt="crane backdrop" fill className="object-contain blur-xl opacity-15 sm:opacity-30 scale-150 md:scale-125 -rotate-2 select-none" />
                </div>

                {/* Header Section */}
                <div className="w-full flex justify-between items-start border-b border-neutral-700 pb-4 sm:pb-6 z-10 mt-12 sm:mt-0">
                    <div className="flex flex-col gap-1">
                        <span className="text-neutral-500 text-[10px] sm:text-xs">[DEPLOYMENT REGISTRY]</span>
                        <h3 className={cn('text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-100', antionio.className)}>ACTIVE DEVELOPMENT</h3>
                    </div>
                    <div className="text-right hidden sm:block text-neutral-500 text-[10px] sm:text-xs">
                        <div>STG_ENV // YOGYAKARTA</div>
                        <div>STATUS: STABLE_BUILD</div>
                    </div>
                </div>

                {/* Grid List Aplikasi: 1 kolom di mobile, 2 di tablet, 3 di desktop */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-8 sm:my-12 z-10">
                    {projects.map((project, idx) => {
                        const hrefValue = project.url;

                        return (
                            <Link
                                key={idx}
                                href={hrefValue}
                                className="border border-neutral-800 bg-neutral-950/80 backdrop-blur-xs p-5 sm:p-6 flex flex-col justify-between h-64 sm:h-72 relative group hover:border-neutral-500 transition-colors duration-300 cursor-pointer"
                            >
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neutral-700 group-hover:border-neutral-400"></div>

                                <div>
                                    <div className="flex justify-between items-center text-neutral-500 mb-4 sm:mb-6 text-[10px] sm:text-xs">
                                        <span>[{project.tag}]</span>
                                        <div className="flex items-center gap-1.5 px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[9px] sm:text-[10px]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                            UNDER DEV
                                        </div>
                                    </div>

                                    <h4 className={cn('text-2xl sm:text-3xl font-bold tracking-wide text-neutral-200 group-hover:text-neutral-100 transition-colors', antionio.className)}>
                                        {project.name}
                                    </h4>
                                </div>

                                <div className="mt-auto pt-4 sm:pt-6 border-t border-neutral-900 flex flex-col gap-1 font-mono text-[10px] sm:text-xs">
                                    <span className="text-[9px] sm:text-[10px] text-neutral-600">TARGET_URL</span>
                                    <span className="text-neutral-400 group-hover:text-neutral-200 transition-colors lowercase tracking-normal font-sans break-all">{project.url}</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Footer Section (Inner) */}
                <div className="w-full flex justify-between items-center border-t border-neutral-700 pt-4 sm:pt-6 text-neutral-500 text-[10px] sm:text-xs z-10">
                    <div>[ SYSTEM PHASE 02 // PITFALL ARCH ]</div>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <span>©2026</span>
                        <div className="w-2 h-2 bg-amber-500 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* MAIN FOOTER SECTION */}
            <footer className="w-full bg-neutral-950 text-neutral-400 border-t border-neutral-800 p-4 sm:p-8 md:p-12 font-mono text-xs uppercase">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-end">
                    {/* Sisi Kiri: Tech Stack Manifes */}
                    <div className="flex flex-col gap-3 sm:gap-4">
                        <span className="text-neutral-600 text-[9px] sm:text-[10px] tracking-widest">[CORE ENGINE COMPONENTS]</span>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {stacks.map((stack, index) => (
                                <div key={index} className="px-2.5 sm:px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                                    <span className="text-neutral-600 text-[8px] sm:text-[9px]">0{index + 1}</span>
                                    <span className="tracking-wider font-semibold">{stack}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sisi Kanan: Media Sosial */}
                    <div className="flex flex-col md:items-end gap-3 sm:gap-4">
                        <span className="text-neutral-600 text-[9px] sm:text-[10px] tracking-widest">[EXTERNAL NETWORK INDEX]</span>
                        <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
                            <Link
                                href="https://instagram.com/aliefmagic"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-1 hover:text-neutral-100 transition-colors duration-200"
                            >
                                <span>[ Instagram ]</span>
                                <span className="text-neutral-600 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                            </Link>
                            <Link
                                href="https://linkedin.com/in/alief-khairul-fz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-1 hover:text-neutral-100 transition-colors duration-200"
                            >
                                <span>[ LinkedIn ]</span>
                                <span className="text-neutral-600 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sub-bottom Bar */}
                <div className="w-full mt-8 sm:mt-12 pt-4 border-t border-neutral-900 flex justify-between items-center text-[9px] sm:text-[10px] text-neutral-600">
                    <div>TERMINAL_PORTFOLIO_V2.0</div>
                    <div>ALL SYSTEMS OPERATIONAL</div>
                </div>
            </footer>
        </div>
    );
}
