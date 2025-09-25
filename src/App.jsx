import React, {useRef} from 'react';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger, SplitText} from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {

    return (
        <div className="flex-center h-[100vh]"></div>
    )
}

export default App;