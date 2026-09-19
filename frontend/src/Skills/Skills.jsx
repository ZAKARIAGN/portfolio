import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
    SiHtml5,
    SiTailwindcss,
    SiJavascript,
    SiReact,
    SiGreensock,
    SiFigma,
    SiNodedotjs,
    SiExpress,
    SiLaravel,
    SiMysql,
    SiMongodb,
    SiGithub,
    SiGit,
    SiPostman,
    SiDocker,
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';


const FRONTEND = [
    { name: 'HTML5', Icon: SiHtml5, color: '#e34f26' },
    { name: 'CSS3', Icon: FaCss3Alt, color: '#1572b6' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06b6d4' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
    { name: 'React.js', Icon: SiReact, color: '#61dafb' },
    { name: 'GSAP', Icon: SiGreensock, color: '#88ce02' },
    { name: 'Figma', Icon: SiFigma, color: '#f24e1e' },
];

const BACKEND_AND_TOOLS = [
    { name: 'Node.js', Icon: SiNodedotjs, color: '#5fa04e' },
    { name: 'Express.js', Icon: SiExpress, color: '#fb923c' },
    { name: 'Laravel', Icon: SiLaravel, color: '#ff2d20' },
    { name: 'MySQL', Icon: SiMysql, color: '#4ea1d3' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
    { name: 'GitHub', Icon: SiGithub, color: '#ffffff' },
    { name: 'Git', Icon: SiGit, color: '#f05032' },
    { name: 'Postman', Icon: SiPostman, color: '#ff6c37' },
    { name: 'Docker', Icon: SiDocker, color: '#2496ed' },
];

const COPIES = 6;

const CUBES = [
    { size: 70, top: '12%', left: '8%',  dur: 26, delay: 0,   color: '#61dafb', mobile: true },
    { size: 46, top: '18%', left: '82%', dur: 22, delay: -6,  color: '#a259ff', mobile: true },
    { size: 90, top: '60%', left: '88%', dur: 32, delay: -12, color: '#06b6d4', mobile: false },
    { size: 38, top: '68%', left: '5%',  dur: 20, delay: -3,  color: '#f24e1e', mobile: false },
    { size: 58, top: '6%',  left: '48%', dur: 28, delay: -9,  color: '#88ce02', mobile: false },
];

const FACES = ['front', 'back', 'right', 'left', 'top', 'bottom'];

const Cube = ({ size, top, left, dur, delay, color, mobile }) => (
    <div
        className={`cube-wrap ${mobile ? '' : 'hidden md:block'}`}
        style={{
            top,
            left,
            '--s': `${size}px`,
            '--c': color,
            '--dur': `${dur}s`,
            '--delay': `${delay}s`,
        }}
    >
        <div className="cube">
            {FACES.map((f) => (
                <span key={f} className={`face face-${f}`} />
            ))}
        </div>
    </div>
);

const Background3D = () => (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
                backgroundImage:
                    'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                backgroundSize: '40px 40px',
            }}
        />
        <div className="absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="grid-floor" />
        {CUBES.map((c, i) => (
            <Cube key={i} {...c} />
        ))}
    </div>
);


const Tile = ({ name, Icon, color }) => (
    <li
        style={{ '--c': color }}
        className="group flex w-[132px] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.06] bg-[#0c0c0f] py-6 transition-all duration-300 hover:border-[color:var(--c)] hover:shadow-[0_0_28px_-8px_var(--c)]"
    >
        <Icon
            size={34}
            aria-hidden="true"
            className="text-neutral-500 transition-all duration-300 group-hover:text-[color:var(--c)] group-hover:[filter:drop-shadow(0_0_8px_var(--c))]"
        />
        <span className="text-[11px] font-semibold text-neutral-500 transition-colors duration-300 group-hover:text-white">
            {name}
        </span>
    </li>
);

const Marquee = ({ label, items, duration = 45, reverse = false }) => (
    <div className="skills-marquee overflow-hidden py-2">
        <div
            className="skills-track"
            style={{
                '--copies': COPIES,
                '--duration': `${duration}s`,
                animationDirection: reverse ? 'reverse' : 'normal',
            }}
        >
            {Array.from({ length: COPIES }, (_, copy) => (
                <ul
                    key={copy}
                    className="skills-group"
                    aria-label={copy === 0 ? label : undefined}
                    aria-hidden={copy > 0 ? 'true' : undefined}
                >
                    {items.map((item) => (
                        <Tile key={item.name} {...item} />
                    ))}
                </ul>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section id="skills" className="relative w-full overflow-hidden bg-black py-24">
            <Background3D />

            <motion.div
                className="relative z-10"
                initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
                    <h2
                        className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-5xl"
                        style={{ fontFamily: "'Segoe UI', 'Inter', system-ui, Arial, sans-serif" }}
                    >
                        Skills
                    </h2>
                    <p className="mx-auto mt-4 max-w-sm font-serif text-sm leading-7 text-neutral-400">
                        The tools I use to design, build and ship complete web applications.
                    </p>
                </div>

                <div className="mt-12 space-y-5">
                    <Marquee label="Frontend skills" items={FRONTEND} duration={50} />
                    <Marquee label="Backend and tools" items={BACKEND_AND_TOOLS} duration={65} reverse />
                </div>
            </motion.div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                .skills-marquee {
                    -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
                    mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
                }
                .skills-track {
                    display: flex;
                    width: max-content;
                    animation: skills-marquee var(--duration, 45s) linear infinite;
                }
                .skills-group {
                    display: flex;
                    gap: 1.25rem;
                    padding-right: 1.25rem;
                    margin: 0;
                    list-style: none;
                }
                .skills-marquee:hover .skills-track {
                    animation-play-state: paused;
                }
                @keyframes skills-marquee {
                    to { transform: translateX(calc(-100% / var(--copies))); }
                }

                .grid-floor {
                    position: absolute;
                    left: -50%;
                    right: -50%;
                    bottom: -10%;
                    height: 60%;
                    background-image:
                        linear-gradient(rgba(97, 218, 251, 0.22) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(97, 218, 251, 0.22) 1px, transparent 1px);
                    background-size: 60px 60px;
                    transform: perspective(500px) rotateX(62deg);
                    transform-origin: bottom center;
                    -webkit-mask-image: linear-gradient(to top, #000 0%, transparent 85%);
                    mask-image: linear-gradient(to top, #000 0%, transparent 85%);
                    animation: grid-move 4s linear infinite;
                }
                @keyframes grid-move {
                    to { background-position: 0 60px, 0 0; }
                }

                .cube-wrap {
                    position: absolute;
                    width: var(--s);
                    height: var(--s);
                    perspective: 800px;
                    animation: cube-float 9s ease-in-out infinite;
                    animation-delay: var(--delay);
                }
                .cube {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transform-style: preserve-3d;
                    animation: cube-spin var(--dur) linear infinite;
                    animation-delay: var(--delay);
                }
                .face {
                    position: absolute;
                    inset: 0;
                    border: 1px solid var(--c);
                    background: color-mix(in srgb, var(--c) 6%, transparent);
                    box-shadow: 0 0 18px -6px var(--c), inset 0 0 18px -10px var(--c);
                    opacity: 0.55;
                }
                .face-front  { transform: translateZ(calc(var(--s) / 2)); }
                .face-back   { transform: rotateY(180deg) translateZ(calc(var(--s) / 2)); }
                .face-right  { transform: rotateY(90deg)  translateZ(calc(var(--s) / 2)); }
                .face-left   { transform: rotateY(-90deg) translateZ(calc(var(--s) / 2)); }
                .face-top    { transform: rotateX(90deg)  translateZ(calc(var(--s) / 2)); }
                .face-bottom { transform: rotateX(-90deg) translateZ(calc(var(--s) / 2)); }

                @keyframes cube-spin {
                    from { transform: rotateX(-20deg) rotateY(0deg); }
                    to   { transform: rotateX(340deg) rotateY(360deg); }
                }
                @keyframes cube-float {
                    0%, 100% { transform: translateY(0); }
                    50%      { transform: translateY(-18px); }
                }

                @media (prefers-reduced-motion: reduce) {
                    .skills-marquee {
                        -webkit-mask-image: none;
                        mask-image: none;
                    }
                    .skills-track {
                        animation: none;
                        width: 100%;
                        justify-content: center;
                    }
                    .skills-group {
                        flex-wrap: wrap;
                        justify-content: center;
                        padding: 0 1.5rem;
                    }
                    .skills-group[aria-hidden="true"] { display: none; }

                    .grid-floor, .cube-wrap, .cube { animation: none; }
                    .cube { transform: rotateX(-25deg) rotateY(35deg); }
                }
            `,
                }}
            />
        </section>
    );
};

export default Skills;