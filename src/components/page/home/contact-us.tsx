import { useState } from 'react';

import { RadioGroup } from '@headlessui/react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import { FiInstagram, FiMail, FiTwitter } from 'react-icons/fi';
import { IoPaperPlaneOutline } from 'react-icons/io5';

import { Section } from '@components/layout';

const ContactUs = () => {
  const plans = ['$5k - $20k', '$20k - $50k', '$50k - $100k', '$100k +'];

  const [selected, setSelected] = useState(null as any);

  return (
    <Section yPadding="py-20">
      <div className="relative min-h-[720px] flex lg:gap-20">
        <div className="w-5/12 lg:w-1/3 lg:px-16">
          <h3 className="text-xl lg:text-2xl mb-3">Shoot us an e-mail</h3>
          <Link href={'mailto:hi@simpleduckstudios.com'} passHref>
            <a className="text-sm lg:text-base">
              <FiMail className="text-secondary inline mr-2 w-[22px]" />
              <span className="inline break-all">hi@simpleduckstudios.com</span>
            </a>
          </Link>

          <h3 className="text-xl lg:text-2xl mb-3 mt-10">Follow our socials</h3>
          <div>
            <Link href={'https://instagram.com'} passHref>
              <a className="text-sm lg:text-base">
                <FiInstagram className="text-secondary inline mr-2 w-[22px]" />
              </a>
            </Link>
            <Link href={'https://instagram.com'} passHref>
              <a className="text-sm lg:text-base">
                <FiTwitter className="text-secondary inline mr-2 w-[22px]" />
              </a>
            </Link>
          </div>
        </div>

        <div className="w-7/12 lg:w-2/3 lg:px-8">
          <form action="https://formspree.io/f/mrgjyqgv" method="POST">
            <h2 className="text-xl lg:text-2xl text-gray-500">
              Any inquiries?
            </h2>
            <h1 className="text-3xl lg:text-[40px] font-bold mb-4">
              Contact us, we’re happy to help!
            </h1>

            <div className="lg:w-10/12 mt-6">
              <label
                htmlFor="name"
                className="block text-sm font-bold text-gray-700"
              >
                Name & Company
              </label>
              <div className="mt-3 relative rounded-md">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full px-4 py-3 sm:text-sm rounded-md bg-[#F5F5F5]"
                  placeholder="John Doe from Simple Duck"
                  required
                />
              </div>
            </div>

            <div className="lg:w-10/12 mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700"
              >
                E-mail
              </label>
              <div className="mt-3 relative rounded-md">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full px-4 py-3 sm:text-sm rounded-md bg-[#F5F5F5]"
                  placeholder="john@simpleduckstudios.com"
                  required
                />
              </div>
            </div>

            <div className="lg:w-10/12 mt-6">
              <label
                htmlFor="project"
                className="block text-sm font-bold text-gray-700"
              >
                I’m interested in
              </label>
              <div className="mt-3 relative rounded-md">
                <select
                  id="project"
                  name="project"
                  className="block w-full px-4 py-3 sm:text-sm rounded-md bg-[#F5F5F5] appearance-none"
                  required
                >
                  <option value="" disabled selected>
                    Choose your project type
                  </option>
                  <option value="web">Web Based</option>
                </select>
                <FaChevronDown
                  size={12}
                  className="absolute top-1/2 -translate-y-1/2 right-3"
                />
              </div>
            </div>

            <div className="lg:w-10/12 mt-6">
              <RadioGroup value={selected} onChange={setSelected}>
                <RadioGroup.Label className="text-sm font-bold text-gray-700">
                  Project Budget
                </RadioGroup.Label>
                <div className="mt-3">
                  {plans.map((plan) => (
                    <RadioGroup.Option
                      key={plan}
                      value={plan}
                      className={({ active, checked }) =>
                        `${active ? '' : ''}
                  ${checked ? 'bg-secondary text-white' : 'bg-white'}
                    relative rounded-full px-5 py-2 inline-block mr-5 mb-5 focus:outline-none ring-2 ring-offset-2 ring-offset-black ring-white ring-opacity-60`
                      }
                    >
                      {({ checked }) => (
                        <>
                          <div
                            className={` whitespace-nowrap ${
                              checked ? 'text-white' : 'text-black'
                            }`}
                          >
                            {plan}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
              <input type="hidden" name="budget" value={selected} />
            </div>

            <div className="lg:w-10/12 mt-6">
              <label
                htmlFor="description"
                className="block text-sm font-bold text-gray-700"
              >
                Project Description
              </label>
              <div className="mt-3 relative rounded-md">
                <textarea
                  name="description"
                  id="description"
                  className="block w-full px-4 py-3 sm:text-sm rounded-md bg-[#F5F5F5]"
                  placeholder="We need help to...."
                />
              </div>
            </div>

            <div className="flex mt-10">
              <button
                type="submit"
                className="text-lg bg-primary px-6 py-4 rounded-full flex items-center gap-2 font-bold"
              >
                <IoPaperPlaneOutline size={24} />
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
