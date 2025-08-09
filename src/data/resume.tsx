import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Play } from "lucide-react";
import { DiPostgresql } from "react-icons/di";
import { FaDocker, FaNodeJs, FaPython } from "react-icons/fa";
import { SiAppwrite, SiGo, SiKubernetes, SiRedis } from "react-icons/si";

export const DATA = {
  name: "Muhammad Nur Ashiddiqi",
  nickname: "Bulin",
  initials: "MNA",
  url: "https://www.bulin.dev",
  location: "Bandar Lampung, Indonesia",
  locationLink: "https://maps.app.goo.gl/Zbzok1mCik445h1C6",
  description:
    "Backend/Fullstack Developer yang fokus membangun solusi nyata dengan teknologi open source.",
  summary:
    "Halo, aku Bulin yang terbiasa membangun backend yang scalable, API yang rapi, dan integrasi sistem untuk produk nyata (pemerintahan & swasta). Nyaman di ekosistem TypeScript/Node.js, Next.js, serta stack Postgres–Docker. Sesekali ngoprek Python buat otomasi dan data. Suka menulis dokumentasi teknis dan merancang arsitektur yang gampang di-maintain.",

  avatarUrl: "/me.png",
  skills: [
    {
      name: "Next.js",
      icon: <Icons.nextjs className="size-3" />,
    },
    {
      name: "Typescript",
      icon: <Icons.typescript className="size-3" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="size-3" />,
    },
    {
      name: "Python",
      icon: <FaPython className="size-3" />,
    },
    {
      name: "Postgres",
      icon: <DiPostgresql className="size-3" />,
    },
    {
      name: "Docker",
      icon: <FaDocker className="size-3" />,
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="size-3" />,
    },
    {
      name: "Golang",
      icon: <SiGo className="size-3" />,
    },
    {
      name: "Redis",
      icon: <SiRedis className="size-3" />,
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hi@bulin.dev", // ganti kalau perlu
    tel: "+62 8xx-xxxx-xxxx", // ganti kalau perlu
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bulindev", // ganti kalau username beda
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bulin", // ganti kalau perlu
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/bulin_dev", // ganti kalau perlu
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hi@bulin.dev",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

work: [
    {
      company: "Newus Teknologi",
      href: "https://newus.id/",
      badges: [],
      location: "WFO, Bandar Lampung, Indonesia",
      title: "Backend Developer",
      logoUrl: "/work-experience/newus.png",
      start: "December 2024",
      end: "Present",
      description: [
        "- Mengembangkan dan merapikan API berbasis Node.js/Express & Prisma untuk aplikasi E-Gov dan internal product.",
        "- Integrasi layanan pihak ketiga (pembayaran, autentikasi, notifikasi) dan optimasi query database PostgreSQL.",
        "- Merancang arsitektur modul, logging, dan job worker untuk sinkronisasi data real-time.",
      ],
      links: [
        {
          type: "Website",
          href: "https://newus.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      company: "PT. Giga Prima Lestari",
      href: "https://www.gpl.net.id/",
      badges: [],
      location: "Kontrak, Bandar Lampung, Indonesia",
      title: "Fullstack Developer",
      logoUrl: "/work-experience/gpl.png",
      start: "July 2024",
      end: "September 2024",
      description: [
        "- Maintenance core backend (MERN) dan perbaikan performa endpoint penting.",
        "- Implementasi fitur real-time (WebSocket) untuk notifikasi & komunikasi internal.",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.gpl.net.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      company: "BP-KKN Universitas Lampung",
      href: "https://www.unila.ac.id/",
      badges: [],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "/work-experience/kkn.png",
      start: "October 2023",
      end: "December 2023",
      description: [
        "- Pengembangan fitur backend untuk kebutuhan operasional KKN dan automasi pelaporan.",
        "- Menyusun dokumentasi API dan pipeline sederhana untuk deployment.",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.unila.ac.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
  education: [
    {
      school: "Universitas Lampung",
      href: "https://www.unila.ac.id/",
      degree: "Sarjana Ilmu Komputer (S.Kom) | IPK 3.32",
      logoUrl: "/educations/unila.png",
      start: "2018",
      end: "2024",
    },
    {
      school: "SMK Yadika Bandar Lampung",
      href: "https://smkyadikabalam.sch.id/",
      degree: "Teknik Otomotif",
      logoUrl: "/educations/yadika.png",
      start: "2014",
      end: "2017",
    },
  ],
   projects: [
    {
      title: "SIMRESES",
      href: "https://ereses.dprdpalikab.com/",
      dates: "2025 - Present",
      active: true,
      description:
        "Sistem Reses DPRD Kabupaten PALI untuk menyalurkan dan memonitor aspirasi masyarakat (E-Gov).",
      technologies: ["Next.js", "TypeScript", "Prisma", "Express", "PostgreSQL"],
      links: [{ type: "Website", href: "https://ereses.dprdpalikab.com/", icon: <Icons.globe className="size-3" /> }],
      image: "/projects/simreses.webp",
    },
    {
      title: "SIPAKGURU",
      href: "https://sipakguru.disdikpali.com/",
      dates: "2025 - Present",
      active: true,
      description:
        "Platform manajemen data pendidik & administrasi pendidikan untuk Dinas Pendidikan.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Express", "PostgreSQL"],
      links: [{ type: "Website", href: "https://sipakguru.disdikpali.com/", icon: <Icons.globe className="size-3" /> }],
      image: "/projects/sipakguru.webp",
    },
    {
      title: "SMARTSCHOOL",
      href: "https://smartschool.disdikpali.com/",
      dates: "2025 - Present",
      active: true,
      description:
        "Learning Management System (LMS) dengan aplikasi Android untuk monitoring akademik.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Express", "PostgreSQL"],
      links: [
        { type: "Play Store", href: "https://play.google.com/store/apps/details?id=com.newustechnology.smartschool", icon: <Play className="size-3" /> },
        { type: "Website", href: "https://smartschool.disdikpali.com/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "/projects/smartschool.webp",
    },
    {
      title: "PPDB",
      href: "https://spmb.disdikpali.com/",
      dates: "2025 - Present",
      active: true,
      description:
        "Portal pendaftaran peserta didik baru (PPDB) dengan verifikasi dokumen dan dasbor sekolah.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Express", "PostgreSQL"],
      links: [{ type: "Website", href: "https://spmb.disdikpali.com/", icon: <Icons.globe className="size-3" /> }],
      image: "/projects/ppdb.webp",
    },
    {
      title: "SIMPUSKES",
      href: "https://simpuskes.com/",
      dates: "2025 - Present",
      active: true,
      description:
        "Aplikasi manajemen klinik/puskesmas: pendaftaran, rekam medis sederhana, dan laporan.",
      technologies: ["Next.js", "Express.js", "PostgreSQL", "Sequelize"],
      links: [{ type: "Website", href: "https://simpuskes.com/", icon: <Icons.globe className="size-3" /> }],
      image: "/projects/simpuskes.webp",
    },
    {
      title: "SUPERAPPS RAMATRANS",
      href: "https://ramatranz.co.id/",
      dates: "2025 - Present",
      active: true,
      description:
        "Superapp pemesanan travel & rental mobil: pemesanan, pembayaran, dan pelacakan.",
      technologies: ["Laravel 10", "React", "Next.js", "MySQL"],
      links: [
        { type: "Play Store", href: "https://play.google.com/store/apps/details?id=com.newustechnology.supperapps", icon: <Play className="size-3" /> },
        { type: "Website", href: "https://ramatranz.co.id/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "/projects/rama.webp",
    },
    {
      title: "MJA RENTCAR",
      href: "https://mjarentcar.com/",
      dates: "2025 - Present",
      active: true,
      description:
        "Website perusahaan rental mobil dengan katalog armada dan pemesanan.",
      technologies: ["PHP", "CodeIgniter 4", "MySQL"],
      links: [{ type: "Website", href: "https://mjarentcar.com/", icon: <Icons.globe className="size-3" /> }],
      image: "/projects/mja.png",
    },
    {
      title: "TIGA R",
      href: "https://tigarunila.com/",
      dates: "2025 - Present",
      active: true,
      description:
        "Website organisasi/komunitas dengan manajemen konten sederhana.",
      technologies: ["PHP", "Laravel 9", "MySQL", "Bootstrap 4"],
      links: [{ type: "Website", href: "https://tigarunila.com/", icon: <Icons.globe className="size-3" /> }],
      image: "/projects/3r.png",
    },
    {
      title: "SDGS Universitas Lampung",
      href: "https://sdgcenter.unila.ac.id/",
      dates: "2025 - Present",
      active: true,
      description:
        "Situs informasi pusat SDGs Unila (WordPress) dengan optimasi performa & SEO dasar.",
      technologies: ["WordPress", "PHP", "MySQL"],
      links: [{ type: "Website", href: "https://sdgcenter.unila.ac.id/", icon: <Icons.globe className="size-3" /> }],
      image: "/projects/sdgs.png",
    },
    {
      title: "Green Metric Universitas Lampung",
      href: "https://greenmetric.unila.ac.id/",
      dates: "2025 - Present",
      active: true,
      description:
        "Situs informasi GreenMetric Unila (WordPress) dan manajemen konten.",
      technologies: ["WordPress", "PHP", "MySQL"],
      links: [{ type: "Website", href: "https://greenmetric.unila.ac.id/", icon: <Icons.globe className="size-3" /> }],
      image: "/projects/gm.png",
    },
  ],
} as const;
