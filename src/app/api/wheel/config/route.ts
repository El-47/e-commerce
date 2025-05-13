import { NextResponse } from 'next/server';
import { getWheelOfFortuneConfiguration } from '@/actions/wheel-of-fortune-actions';

export async function GET() {
    const { randomProducts, winningIndex } = await getWheelOfFortuneConfiguration();
    return NextResponse.json({ randomProducts, winningIndex });
}
