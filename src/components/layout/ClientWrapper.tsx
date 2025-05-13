'use client';

import WheelOfFortuneWrapper from './WheelOfFortuneWrapper';
import { useWheelStore } from '@/stores/wheel-store';

export default function ClientWrapper() {
    const { open } = useWheelStore();
    return <WheelOfFortuneWrapper open={open} />;
}
