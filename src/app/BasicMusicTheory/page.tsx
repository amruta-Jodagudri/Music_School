'use client'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import MusicTheory from '@/data/MusicTheory.json';

function BasicMusicTheory() {
    return (
        <div className="min-h-screen bg-black py-12 pt-36">
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Basic Theory Of Music</h1>
            <div className="flex flex-wrap justify-center">
                {MusicTheory.BasicTheory.map((BasicTheory)=>(
                    <DirectionAwareHover imageUrl={BasicTheory.imageUrl} className='p-10'>
                        <p className="font-bold text-xl">{BasicTheory.Title}</p>
                        <p className="font-normal text-sm">{BasicTheory.Description}</p>
                    </DirectionAwareHover>
                ))}
            </div>
        </div>
    )
}

export default BasicMusicTheory


