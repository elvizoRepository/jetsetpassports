import React from 'react'
import About from '@/Components/sections/About'
import Banner from '@/Components/Banner'
import Title from '@/Components/Title'
import WhyUs from '@/Components/sections/WhyUs'
export default function page() {
    const data = [
        { countries: ['France', 'Germany', 'Italy', 'Japan', 'Singapore', 'Spain'], locations: 194 },
        { countries: ['Finland', 'South Korea', 'Sweden'], locations: 193 },
        { countries: ['Austria', 'Denmark', 'Ireland', 'Netherlands'], locations: 192 },
        { countries: ['Belgium', 'Luxembourg', 'Norway', 'Portugal', 'United Kingdom'], locations: 191 },
        { countries: ['Greece', 'Malta', 'Switzerland'], locations: 190 },
        { countries: ['Australia', 'Czechia', 'New Zealand', 'Poland'], locations: 189 },
        { countries: ['Canada', 'Hungary', 'United States'], locations: 188 },
        { countries: ['Estonia', 'Lithuania'], locations: 187 },
        { countries: ['Latvia', 'Slovakia', 'Slovenia'], locations: 186 },
        { countries: ['Iceland'], locations: 185 },
      ];
  return (
    <div>
        <Banner title='Know More About Us'/>
        <About/>
        <section>
        <Title title='Our Connections'/>
        <table className='text-sm w-full'>
            <thead>
                <tr className='text-left'>
                <th className='border p-2'>Country</th>
                <th className='border p-2'>Visa Free To </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                <tr key={index} >
                    <td className='border p-2'>{item.countries.join(', ')}</td>
                    <td className='border p-2'>{item.locations} Countries</td>
                </tr>
                ))}
            </tbody>
        </table>
        </section>
        <WhyUs/>
    </div>
  )
}
