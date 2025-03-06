"use client";
import Link from 'next/link';
import React from 'react';

const BackToHomeButton = () => {
    return (
        <Link href="/">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Volver a la página principal
            </button>
        </Link>
    );
};

export default BackToHomeButton;