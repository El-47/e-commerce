'use client';
import { useRouter } from 'next/navigation';
import React,{useEffect, useState} from 'react';

const SalesCampaignBanner = () => {
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState('00:00:00');

    useEffect(() => {
        // Set sale end time: today at 23:59:59
        const now = new Date();
        const endTime = new Date(now);
        endTime.setHours(23, 59, 59, 999);

        const updateTimer = () => {
            const diff = endTime.getTime() - new Date().getTime();
            if (diff <= 0) {
                setTimeLeft('00:00:00');
                return;
            }

            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            const format = (num: number) => num.toString().padStart(2, '0');
            setTimeLeft(`${format(hours)}:${format(minutes)}:${format(seconds)}`);
        };

        updateTimer(); // Initial call
        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full bg-gradient-to-r from-red-600 via-orange-500 to-red-600 py-3 relative overflow-hidden'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-white'>
                    <div className='flex items-center gap-2'>
                        <span className='text-xl sm:text-2xl font-bold animate-bounce'>🔥</span>
                        <div className='text-sm sm:text-base font-bold'>FLASH SALE ENDS IN:</div>
                        <div className='bg-white/20 rounded px-2 py-1 font-mono font-bold'>{timeLeft}</div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <span className='text-xl font-bold'>⚡</span>
                        <span className='font-bold text-yellow-200 animate-pulse'>UP TO 95% OFF!</span>
                    </div>

                    <button
                        className='bg-white text-red-600 px-4 py-1 rounded-full font-bold text-sm hover:bg-yellow-100 transition-colors shadow-lg'
                        onClick={() => {
                            router.push('/');
                        }}
                    >
                        SHOP NOW!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SalesCampaignBanner;