import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Transition } from 'react-transition-group';

gsap.registerPlugin( useGSAP );

const Description = ( { description, isActive } ) => {
    const descr = useRef();

    const { contextSafe } = useGSAP( { scope: descr } );

    const onEnter = contextSafe( () => {
        gsap.timeline()
            .from(descr.current, { x: -20 } )
            .from(descr.current, { opacity: 0, ease: "none" }, 0 );
    } );

    const onExit = contextSafe( () => {
        gsap.timeline()
            .to(descr.current, { x: -20, ease: "power1.in" } )
            .to(descr.current, { opacity: 0, ease: "none" }, 0 );
    } );

    return <Transition
        nodeRef={ descr }
        in={ isActive }

        mountOnEnter
        unmountOnExit

        timeout={ 500 }
        onEnter={ onEnter }
        onExit={ onExit }
    >
        <div 
            ref={ descr }
            className="description"
        >
            { description }
        </div>
    </Transition>
};

export default Description;