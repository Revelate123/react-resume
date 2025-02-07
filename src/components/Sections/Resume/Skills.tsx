import React from 'react'
import {FC, memo} from 'react';
import {SectionId} from '../../../data/data';
import Section from '../../Layout/Section';

import { skill } from '../../../data/data';





const Skills: FC = memo(() => {
  const { skillData } = skill;
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Skills}>
      <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative h-max">
          <h2 className="text-xl font-bold uppercase text-neutral-800">Skills</h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
        </div>
      </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-center gap-4">

      {skillData.map((props) => (
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <div className="flex justify-center">
            {props.svg?<svg></svg>:<props.icon className="text-7xl text-center"/>}
            </div>
            
            <h2 className='text-2xl text-center'>{props.name}</h2>
          </div>
          ))}
      
        
        
        
      </div>
    

    </Section>
    
  );
});
export default Skills;
