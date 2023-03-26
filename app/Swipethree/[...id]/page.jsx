'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import { Jobs } from '@/data/jobsArray';
import JobDetails from '@/app/components/jobDetails/JobDetails';

export default function DetailsPage() {

  let id = usePathname();
 
  id = id.replace('/Swipethree/', '')
  
  console.log(id)

  return (
    <div>
      {Jobs.map((job) => {
        if (id == job.id) {
          /* const { id, title, subtitle, desc, img } = job; */
          return (
            <div key={job.id}>
              {/* <Image src={img} alt={title}
                width={'100%'}
                height={480}
              ></Image>
              <h2>{title}</h2>
              <h4>{subtitle}</h4>
              <p>{desc}</p> */}
              <JobDetails
                {...job}
              />
            </div>
          );
        }
      })}
    </div>
  );
}
