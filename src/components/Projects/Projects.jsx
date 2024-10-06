import { useRef } from 'react';
import parajectWebsitePreview from '~/assets/paraject.jpg';
import pizzaShopWebsitePreview from '~/assets/pizza-shop.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import { default as sprTextureLarge } from '~/assets/spr-lesson-builder-dark-large.jpg';
import { default as sprTexturePlaceholder } from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import { default as sprTexture } from '~/assets/spr-lesson-builder-dark.jpg';
import { Heading } from '~/components/Heading';
import { ProjectSummary } from '~/components/ProjectSummary';
import { Section } from '~/components/Section';
import { useVisibleSections } from '~/hooks/useVisibleSections';
import styles from './projects.module.css';

export const Projects = ({ id }) => {
  const projectSectionHeader = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();

  const visibleSections = useVisibleSections([
    projectSectionHeader,
    projectOne,
    projectTwo,
    projectThree,
  ]);

  return (
    <div id={id} className={styles.projects} tabIndex={-1}>
      <Section as="section" ref={projectSectionHeader} tabIndex={-1}>
        <Heading
          level={2}
          as="h2"
          data-visible={visibleSections.includes(projectSectionHeader.current)}
          data-align="center"
          className={styles.title}
        >
          Here are some of the projects I've built. Feel free to check them out.
        </Heading>
      </Section>

      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Designing the future of education"
        description="Designing a platform to help educators build better online courseware"
        sourceCodeBtn={{
          text: 'Source Code',
          link: '#',
        }}
        liveViewBtn={{
          text: 'Live View',
          link: '#',
        }}
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Paraject"
        description="This project management application tracks and organizes tasks, helping users enhance their productivity and stay focused on the main goal."
        sourceCodeBtn={{
          text: 'Source Code',
          link: 'https://github.com/davedalmao/Paraject',
        }}
        liveViewBtn={{
          text: 'Download Link',
          link: 'https://github.com/davedalmao/Paraject?tab=readme-ov-file#how-to-download',
        }}
        model={{
          type: 'laptop',
          alt: 'For Projects - Paraject.',
          textures: [
            {
              srcSet: `${parajectWebsitePreview} 1280w, ${parajectWebsitePreview} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Crave Co. Pizza"
        description="A responsive pizza shop website built with Bootstrap. Featuring an intuitive menu, and an embedded Google Maps section."
        sourceCodeBtn={{
          text: 'Source Code',
          link: 'https://github.com/davedalmao/Pizza-Shop',
        }}
        liveViewBtn={{
          text: 'Live View',
          link: 'https://davedalmao.github.io/Pizza-Shop/',
        }}
        model={{
          type: 'laptop',
          alt: "I'll take you to the pizza shop (Crave Co. Pizza).",
          textures: [
            {
              srcSet: `${pizzaShopWebsitePreview} 800w, ${pizzaShopWebsitePreview} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
    </div>
  );
};
