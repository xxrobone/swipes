'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import { Jobs } from '@/data/jobsArray';
import JobDetails from '@/app/components/jobDetails/JobDetails';

export default function DetailsPage() {

  let id = usePathname();
 
  id = id.replace('/Swipetwo/', '')
  
  console.log(id)

  return (
    <div>
      {Jobs.map((job) => {
        if (id == job.id) {
          /* const { id, title, subtitle, desc, img } = job; */
          return (
            <div key={job.id}>
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
