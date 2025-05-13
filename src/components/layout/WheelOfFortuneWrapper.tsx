'use client';

import { useEffect, useState } from 'react';
import WheelOfFortune from './WheelOfFortune';
import { useWheelStore } from '@/stores/wheel-store';

export default function WheelOfFortuneWrapper({ open }: { open: boolean }) {
    const [config, setConfig] = useState<null | { randomProducts: any[], winningIndex: number }>(null);
    const { closeWheel } = useWheelStore(); // ✅ bring in close method from store

    useEffect(() => {
        if (!open) return;

        const fetchData = async () => {
            const res = await fetch('/api/wheel/config');
            const data = await res.json();
            setConfig(data);
        };

        fetchData();
    }, [open]);

    if (!open || !config) return null;

    return (
        <div className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center'>
            <div className='relative bg-white p-6 rounded-2xl shadow-xl'>
                <button
                    onClick={closeWheel}
                    className='absolute top-3 right-3 text-lg font-bold hover:text-red-500'
                >
                    ✕
                </button>

                <WheelOfFortune
                    products={config.randomProducts}
                    winningIndex={config.winningIndex}
                />
            </div>
        </div>
    );
}
