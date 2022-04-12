import Link from 'next/link';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import { Section } from '@components/layout';

const Spotlight = () => {
  const features = [
    'Playable & support on all major platform',
    'Optimize & boots your ad performance',
    'Drive user engagement',
  ];

  return (
    <Section yPadding="py-20">
      <div className="relative flex flex-col sm:flex-row gap-10 lg:gap-20">
        <div className="w-full sm:w-7/12">
          <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold">
            <span className="block sm:inline">Maximaze your </span>
            <span>business growth with</span>
          </h3>
          <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-bold text-secondary mb-8">
            Playable Ads
          </h1>
          <p className="lg:text-lg text-gray-500">
            Our speciality, Playable Ads drive revenue and retention through its
            intractivity. Your potential users can experience your mobile game,
            app, brand & product through it. By simply tapping & dragging the ad
            content, this interactive advertisement format lets users experience
            core app functionality.
          </p>
          <ul className="mt-10">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="text-xl lg:text-2xl flex items-start gap-4 mt-4"
              >
                <BsFillCheckCircleFill
                  color="#26CD7D"
                  size={14}
                  className="mt-2"
                />{' '}
                {item}
              </li>
            ))}
          </ul>
          <div className="flex mt-10 justify-center sm:justify-start">
            <Link href={'/portfolio'} passHref>
              <a className="lg:text-lg bg-primary px-6 py-4 rounded-full">
                View Portfolio
              </a>
            </Link>
          </div>
        </div>

        <div className="w-full sm:w-5/12 flex flex-col gap-5 lg:gap-10">
          <div>
            <img
              src="https://derrint.sirv.com/Images/simple-duck-studios/services/playable-1.png"
              className="shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl lg:rounded-3xl w-full"
              alt=""
            />
          </div>
          <div className="flex gap-5 lg:gap-10">
            <div className="w-1/2">
              <img
                src="https://derrint.sirv.com/Images/simple-duck-studios/services/playable-4.png"
                className="shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl lg:rounded-3xl w-full"
                alt=""
              />
            </div>
            <div className="w-1/2">
              <img
                src="https://derrint.sirv.com/Images/simple-duck-studios/services/playable-2.png"
                className="shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl lg:rounded-3xl w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Spotlight;
