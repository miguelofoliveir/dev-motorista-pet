import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section id='servicos' className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
       <h2 className="bold-40 lg:bold-64">Serviços</h2>
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="w-1/2 pr-12 pt-12">
          <Image
            src="/cat.jpg"
            alt="dog"
            width={240}
            height={300}
            className='w-full rounded-lg'
          />
        </div>

        <div className="z-20 flex w-1/2 flex-col">
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features