import {FC, memo} from 'react';

import {education, experience, Leadership,SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import Skills from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  //const { skillData } = skill;
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>

        <ResumeSection title="Leadership">
          {Leadership.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Experience">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <Skills />
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
