import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <div>
        <Heading order='#1'>Ola Mundo</Heading>
        <Heading order='#2'>Ola Mundo</Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          beatae at. Harum iure, iste ipsam voluptatem accusamus dolor
          doloremque! Quos porro dolorem odit non sed aspernatur impedit nobis
          voluptas dignissimos!
        </p>
      </div>
    </>
  );
}
