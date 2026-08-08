"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .45 }}
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
              Web Application Developer
            </p>

            <h1 className="mt-2 text-[2rem] font-semibold tracking-tight text-zinc-100 md:text-[3rem]">
              รัชชพงษ์ ทองเวียง
            </h1>

            <p className="mt-5 max-w-[430px] text-[15px] leading-8 text-zinc-400">
              สวัสดีครับ ทิวครับ มีความสนใจในด้าน
              <strong> Full-Stack Developer </strong>
              พร้อมเรียนรู้และพัฒนาทักษะเพื่อสร้าง Web Application
              ที่ใช้งานได้จริง
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a href="/resume.pdf" className="button-primary">
                <Download size={16} />
                Resume
              </a>

              <a
                href="https://github.com/TiwRatchapong"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-github"
              >
                <FaGithub size={17} />
                GitHub
              </a>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .6 }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={210}
              height={210}
              priority
              className="rounded-full border border-zinc-700 object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}