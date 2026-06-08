import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaBrain,
    FaGithub,
    FaDownload,
    FaArrowRight,
    FaExternalLinkAlt
} from 'react-icons/fa';

const NewAppBanner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-default border-4 border-default rounded-2xl shadow-brutal overflow-hidden relative"
        >
            {/* Badge NUEVA APP en esquina superior derecha con animación */}
            <div className="absolute top-4 right-4 z-10">
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="px-3 py-1 bg-yellow border-4 border-default rounded-lg shadow-brutal-sm"
                >
                    <span className="font-black text-black text-xs">NUEVA APP</span>
                </motion.div>
            </div>

            <div className="flex flex-col md:flex-row">
                {/* Imagen */}
                <div className="w-full md:w-48 h-48 md:h-auto bg-purple border-b-4 md:border-b-0 md:border-r-4 border-default flex-shrink-0">
                    <img
                        src="/memory-hero.png"
                        alt="MEMORY App"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Contenido */}
                <div className="flex-1 p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <FaBrain className="text-2xl text-default" />
                        <h3 className="text-xl md:text-2xl font-black text-default">
                            MEMORY
                        </h3>
                    </div>

                    <p className="text-sm font-bold text-default mb-4">
                        Guarda tus notas, contraseñas y recuerdos de forma segura. Solo tú puedes acceder, incluso sin internet.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href="https://github.com/BryanRF/memory-releases"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-default border-4 border-default rounded-lg font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all duration-200 text-default"
                        >
                            <FaGithub />
                            GitHub
                        </a>
                        <a
                            href="https://github.com/BryanRF/memory-releases/releases"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-green border-4 border-default rounded-lg font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all duration-200 text-black"
                        >
                            <FaDownload />
                            Descargar APK
                        </a>
                        <a
                            href="https://memory-web-sand.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-purple border-4 border-default rounded-lg font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all duration-200 text-black"
                        >
                            <FaExternalLinkAlt />
                            Landing Page
                        </a>
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary border-4 border-default rounded-lg font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all duration-200 text-black"
                        >
                            Ver más
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default NewAppBanner;
