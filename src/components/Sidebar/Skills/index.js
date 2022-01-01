import React from 'react';
import styles from './Skill.module.scss';

const Skills = () => (
  <ul className={styles['tags']}>
    <li>
      <a type="button" className="react">
        React
      </a>
    </li>
    <li>
      <a type="button" className="js">
        JavaScript
      </a>
    </li>
    <li>
      <a type="button" className={'next'}>
        Next.js
      </a>
    </li>
    <li>
      <a type="button" className={'node'}>
        Node.js
      </a>
    </li>
    <li>
      <a type="button" className={'vue'}>
        Vue.js
      </a>
    </li>
    <li>
      <a type="button" className={'vue'}>
        Nuxt.js
      </a>
    </li>
    <li>
      <a type="button" className={'git'}>
        Git
      </a>
    </li>
    <li>
      <a type="button" className={'html'}>
        HTML
      </a>
    </li>
    <li>
      <a type="button" className={'css'}>
        CSS3
      </a>
    </li>
  </ul>
);

export default Skills;
