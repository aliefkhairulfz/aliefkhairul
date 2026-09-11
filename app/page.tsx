import { cn } from '@/lib/utils';
import { Antonio } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { BiographyText } from '@/components/BiographyText';
import { ProjectImageSlider } from '@/components/ProjectImageSlider';
import { SiTypescript, SiNextdotjs, SiNestjs, SiReact, SiVuedotjs, SiMysql } from 'react-icons/si';
import { projects } from '@/lib/data';

const antionio = Antonio({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
});

export default function Home() {

    // Data tech stack
    const techStacks = [
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'NestJS', icon: SiNestjs },
        { name: 'React', icon: SiReact },
        { name: 'Vue.js', icon: SiVuedotjs },
        { name: 'MySQL', icon: SiMysql },
    ];

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
                    <div className="flex items-center justify-center gap-2 py-2 px-4 bg-neutral-900 text-neutral-100 hover:bg-neutral-800 transition-colors cursor-pointer">
                        <div className="tracking-tight uppercase text-sm sm:text-base font-mono">Contact Me</div>
                    </div>
                </div>

                {/* Biography Text */}
                <BiographyText />

                {/* Bottom Main Typography Group */}
                <div className={cn('absolute bottom-0 left-0 p-4 sm:p-6 text-neutral-900 flex flex-col gap-4 sm:gap-4 w-full z-20')}>
                    {/* Skills Header */}
                    <div className="grid grid-cols-2 w-full max-w-full md:max-w-266.25 border-b border-neutral-400 pb-1.5 sm:pb-2 font-mono text-sm sm:text-base tracking-widest uppercase text-neutral-500 sm:ml-2">
                        <div className="flex items-center gap-1 sm:gap-2">
                            <span className="truncate">start from front-end</span>
                        </div>
                        <div className="flex items-center justify-end gap-1 sm:gap-2 text-right">
                            <span className="truncate">ready for full-stack</span>
                        </div>
                    </div>

                    {/* Fluid Typography */}
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
                        <h3 className={cn('text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-100', antionio.className)}>PROJECTS</h3>
                    </div>
                </div>

                {/* Grid List Aplikasi: 1 kolom di mobile, 2 di desktop */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 my-8 sm:my-12 z-10">
                    {projects.map((project, idx) => {
                        return (
                            <Link
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-neutral-800 bg-neutral-950/80 backdrop-blur-xs flex flex-col group hover:border-neutral-500 transition-colors duration-300 overflow-hidden"
                            >
                                {/* Image Section */}
                                <div className="relative w-full h-56 sm:h-72 border-b border-neutral-800 overflow-hidden bg-neutral-900">
                                    <ProjectImageSlider images={project.imageSrc} alt={project.title} index={idx} />
                                </div>
                                
                                {/* Content Section */}
                                <div className="p-6 sm:p-8 flex flex-col grow justify-between relative">
                                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neutral-700 group-hover:border-neutral-400 m-6 sm:m-8"></div>

                                    <div>
                                        <div className="flex justify-between items-start text-neutral-500 mb-4 text-xs sm:text-sm">
                                            <span className="truncate max-w-[60%] font-semibold text-neutral-400">{project.platform}</span>
                                            <span className="shrink-0 text-right">{project.timeframe}</span>
                                        </div>

                                        <h4 className={cn('text-2xl sm:text-4xl font-bold tracking-wide text-neutral-100', antionio.className)}>
                                            {project.title}
                                        </h4>
                                        <p className="mt-3 text-neutral-300 text-sm sm:text-base font-semibold normal-case">
                                            {project.subtitle}
                                        </p>
                                        <p className="mt-4 text-neutral-400 text-xs sm:text-sm normal-case leading-relaxed line-clamp-4">
                                            {project.overview}
                                        </p>
                                    </div>
                                    <div className="mt-8 flex flex-wrap gap-2 text-[10px] sm:text-xs normal-case">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* TECH STACK SECTION */}
            <section className="w-full bg-neutral-900 border-t border-neutral-800 p-4 sm:p-8 md:p-12 font-mono uppercase text-neutral-400 py-16 sm:py-24">
                <div className="flex flex-col gap-8 sm:gap-10">
                    <span className="text-neutral-600 text-sm tracking-widest">MY TECH STACK</span>
                    <div className="flex flex-wrap gap-8 sm:gap-12 text-5xl sm:text-7xl text-neutral-500">
                        {techStacks.map((stack, idx) => {
                            const Icon = stack.icon;
                            return (
                                <div key={idx} className="flex items-center gap-4 hover:text-neutral-100 transition-colors cursor-pointer" title={stack.name}>
                                    <Icon />
                                    <span className="text-xl sm:text-3xl tracking-wider font-semibold">{stack.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* MAIN FOOTER SECTION */}
            <footer className="w-full bg-neutral-950 text-neutral-400 border-t border-neutral-800 p-4 sm:p-8 md:p-12 font-mono text-xs uppercase">
                <div className="w-full flex flex-col md:flex-row justify-between gap-6 sm:gap-8 items-start md:items-end">
                    {/* Sisi Kiri */}
                    <div className="flex flex-col gap-2 sm:gap-3 max-w-sm">
                        <span className="text-neutral-600 text-sm tracking-widest">ALIEF KHAIRUL</span>
                        <div className="text-sm sm:text-base text-neutral-500 normal-case leading-relaxed">Building digital products that are secure, scalable, and genuinely useful.</div>
                    </div>

                    {/* Sisi Kanan: Media Sosial */}
                    <div className="flex flex-col md:items-end gap-3 sm:gap-4">
                        <span className="text-neutral-600 text-sm tracking-widest">LINKS</span>
                        <div className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base">
                            <Link
                                href="https://instagram.com/aliefmagic"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-1 hover:text-neutral-100 transition-colors duration-200"
                            >
                                <span>Instagram</span>
                                <span className="text-neutral-600 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                            </Link>
                            <Link
                                href="https://linkedin.com/in/alief-khairul-fz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-1 hover:text-neutral-100 transition-colors duration-200"
                            >
                                <span>LinkedIn</span>
                                <span className="text-neutral-600 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sub-bottom Bar */}
                <div className="w-full mt-8 sm:mt-12 pt-4 border-t border-neutral-900 flex justify-between items-center text-sm text-neutral-600">
                    <div>Yogyakarta, Indonesia</div>
                </div>
            </footer>
        </div>
    );
}
