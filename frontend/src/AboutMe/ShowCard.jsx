import React, { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, MapPin, UserPlus } from 'lucide-react';
import PHOTO from '../assets/man.png';

const ACCENT = '#60a5fa';

const PROFILE = {
    firstName: 'Zakaria',
    lastName: 'Gnaoui',
    title: 'Full Stack Developer',
    location: 'Morocco',
    email: "zakariagnaoui06@gmail.com",
    phone: '+212649961829',
    github: 'https://github.com/ZAKARIAGN',
    linkedin: 'https://www.linkedin.com/in/zakaria-gnaoui-749146398/',
};

const fullName = `${PROFILE.firstName} ${PROFILE.lastName}`.trim();

const Svg = ({ children }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        {children}
    </svg>
);

const GithubIcon = () => (
    <Svg>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </Svg>
);

const LinkedinIcon = () => (
    <Svg>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </Svg>
);

const MailIcon = () => (
    <Svg>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </Svg>
);

const WhatsappIcon = () => (
    <Svg>
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </Svg>
);

const BlueJay = () => (
    <svg
        viewBox="0 0 220 200"
        className="block w-full h-auto overflow-visible"
        style={{ transform: 'scaleX(-1)' }}
        aria-hidden="true"
    >
        <polygon points="140,112 162,106 200,148 216,194 194,198 166,158" fill="#1e3a8a" />
        <polygon points="162,106 200,148 216,194 204,176 184,138" fill="#2563eb" />
        <path d="M168 126 L186 118 M176 144 L196 134 M186 164 L206 152" stroke="#0b1226" strokeWidth="3.2" strokeLinecap="round" fill="none" />
        <polygon points="36,72 48,58 54,44 74,40 98,54 134,80 162,106 140,128 112,132 84,122 58,106 44,88" fill="#3b82f6" />
        <polygon points="58,106 84,122 112,132 140,128 126,112 96,106 72,96 52,92" fill="#dbeafe" />
        <polygon points="36,72 48,58 54,44 74,40 92,52 96,72 70,84 46,86" fill="#60a5fa" />
        <polygon points="54,44 62,10 92,26 100,56 92,52 74,40" fill="#2563eb" />
        <polygon points="62,10 92,26 76,32" fill="#93c5fd" />
        <polygon points="98,70 134,80 162,106 148,124 120,116 100,96" fill="#1d4ed8" />
        <polygon points="98,70 134,80 118,92" fill="#60a5fa" />
        <path d="M110 92 L146 100 M116 104 L150 112 M122 114 L146 122" stroke="#0b1226" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M132 88 L136 94 M140 96 L144 102 M132 108 L136 114" stroke="#eff6ff" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M46 88 Q70 100 98 72" stroke="#0b1226" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <polygon points="36,72 12,76 38,64" fill="#0b1226" />
        <circle cx="54" cy="62" r="3" fill="#0b1226" />
        <circle cx="55" cy="61" r="1" fill="#fff" />
        <path d="M96 130 L92 152 M110 132 L110 152" stroke="#0b1226" strokeWidth="3" strokeLinecap="round" />
        <path d="M-60 154 H170" stroke="#0b1226" strokeWidth="5" strokeLinecap="round" />
    </svg>
);
const LINKS = [
    PROFILE.github && { label: 'GitHub', href: PROFILE.github, Icon: GithubIcon, external: true },
    PROFILE.linkedin && { label: 'LinkedIn', href: PROFILE.linkedin, Icon: LinkedinIcon, external: true },
    PROFILE.email && { label: 'Email', href: `mailto:${PROFILE.email}`, Icon: MailIcon, external: false },
    PROFILE.phone && {
        label: 'WhatsApp',
        href: `https://wa.me/${PROFILE.phone.replace(/\D/g, '')}`,
        Icon: WhatsappIcon,
        external: true,
    },
].filter(Boolean);

const buildVCard = () => {
    const { firstName, lastName, title, location, email, phone, github, linkedin } = PROFILE;
    return [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `N:${lastName};${firstName};;;`,
        `FN:${fullName}`,
        title && `TITLE:${title}`,
        phone && `TEL;TYPE=CELL:${phone}`,
        email && `EMAIL;TYPE=INTERNET:${email}`,
        location && `ADR;TYPE=HOME:;;;;;;${location}`,
        github && `URL:${github}`,
        linkedin && `URL:${linkedin}`,
        'END:VCARD',
    ]
        .filter(Boolean)
        .join('\r\n');
};

const saveContact = () => {
    const blob = new Blob([buildVCard()], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fullName.replace(/\s+/g, '-')}.vcf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const PHOTO_MASK = 'linear-gradient(to bottom, #000 72%, transparent 100%)';
const ShowCard = ({ isOpen, onClose }) => {
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const img = new Image();
        img.src = PHOTO;
    }, []);
    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isOpen, onClose]);

    const ease = [0.22, 1, 0.36, 1];
    const card = {
        hidden: { opacity: 0, x: reduceMotion ? 0 : 140, scale: reduceMotion ? 1 : 0.95 },
        show: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease,
                staggerChildren: reduceMotion ? 0 : 0.08,
                delayChildren: reduceMotion ? 0 : 0.2,
            },
        },
        exit: {
            opacity: 0,
            x: reduceMotion ? 0 : 90,
            scale: reduceMotion ? 1 : 0.97,
            transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
        },
    };

    const bird = {
        hidden: { opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -50, y: reduceMotion ? 0 : -18, rotate: reduceMotion ? 0 : -5 },
        show: { opacity: 1, x: 0, y: 0, rotate: 0, transition: { duration: 0.9, ease } },
    };
    const photo = {
        hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
    };

    const child = {
        hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.aside
                    id="business-card"
                    aria-label="Business card"
                    variants={card}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ '--accent': ACCENT }}
                    className="relative mt-10 lg:mt-0 w-full max-w-sm bg-[#0a0a0a] rounded-[2rem] border border-neutral-800 shadow-[0_0_90px_-30px_var(--accent)] overflow-hidden flex flex-col"
                >
                    <div
                        className="relative h-[272px] w-full overflow-hidden"
                        style={{
                            background:
                                'radial-gradient(circle at 74% 42%, rgba(96,165,250,0.55), transparent 55%), linear-gradient(100deg, #07122b 0%, #11306f 55%, #1d4ed8 100%)',
                        }}
                    >
                        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                            <defs>
                                <pattern id="jay-feathers" width="28" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M0 20 Q14 2 28 20" fill="none" stroke="#fff" strokeOpacity="0.07" strokeWidth="1.4" />
                                    <path d="M-14 10 Q0 -8 14 10" fill="none" stroke="#fff" strokeOpacity="0.07" strokeWidth="1.4" />
                                    <path d="M14 10 Q28 -8 42 10" fill="none" stroke="#fff" strokeOpacity="0.07" strokeWidth="1.4" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#jay-feathers)" />
                        </svg>

                        <motion.div variants={bird} className="absolute left-[-5%] top-[23%] w-[50%]">
                            <BlueJay />
                        </motion.div>
                        <motion.img
                            variants={photo}
                            src={PHOTO}
                            alt={fullName}
                            decoding="async"
                            className="absolute bottom-0 right-3 h-[96%] w-auto select-none"
                            style={{ WebkitMaskImage: PHOTO_MASK, maskImage: PHOTO_MASK }}
                            draggable={false}
                        />
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close card"
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/30 backdrop-blur-sm text-neutral-200 hover:text-white hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)] transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <div className="relative -mt-3 px-8 pb-8 flex flex-col items-center text-center">
                        <motion.div variants={child}>
                            <h2 className="text-3xl font-black tracking-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                                {fullName}
                            </h2>
                            <p className="mt-1 text-sm text-neutral-400">{PROFILE.title}</p>
                        </motion.div>

                        {PROFILE.location && (
                            <motion.p
                                variants={child}
                                className="mt-3 flex items-center gap-1.5 text-xs text-neutral-500"
                            >
                                <MapPin size={14} aria-hidden="true" />
                                {PROFILE.location}
                            </motion.p>
                        )}

                        <motion.div variants={child} className="my-6 h-px w-full bg-neutral-800/80" />

                        <motion.ul variants={child} className="flex items-center justify-center gap-3">
                            {LINKS.map(({ label, href, Icon, external }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        aria-label={label}
                                        title={label}
                                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        className="h-12 w-12 rounded-full flex items-center justify-center border border-neutral-800 bg-black text-neutral-400 transition-all duration-300 hover:text-[color:var(--accent)] hover:border-[color:var(--accent)] hover:shadow-[0_0_16px_-2px_var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                                    >
                                        <Icon />
                                    </a>
                                </li>
                            ))}
                        </motion.ul>

                        <motion.button
                            variants={child}
                            type="button"
                            onClick={saveContact}
                            className="mt-7 w-full px-6 py-3.5 rounded-2xl flex items-center justify-center gap-3 bg-black border text-neutral-300 hover:text-white hover:bg-white/[0.04] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                            style={{ borderColor: `${ACCENT}99` }}
                        >
                            <UserPlus size={18} style={{ color: ACCENT }} aria-hidden="true" />
                            <span className="font-semibold tracking-wide text-sm">Save contact</span>
                        </motion.button>
                    </div>
                </motion.aside>
            )}
        </AnimatePresence>
    );
};

export default ShowCard;