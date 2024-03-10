import React from 'react'
import About from '@/Components/sections/About'
import Banner from '@/Components/Banner'
import Title from '@/Components/Title'
import WhyUs from '@/Components/sections/WhyUs'
export default function Page() {
    const data = [
        { countries: ['France', 'Germany'], locations: 194 },
        { countries: ['United Kingdom'], locations: 191 },
        { countries: ['Poland'], locations: 189 },
        { countries: ['Canada', 'United States'], locations: 188 },
        { countries: ['Seychelles', 'Bahamas','Dominica','Saint Lucia', 'Russia', 'Cape-Verde', 'South Africa'], locations: null },
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
