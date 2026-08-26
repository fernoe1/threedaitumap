import { useRef } from 'react';
import { Html } from '@react-three/drei';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';

import useClickOutside from './useOutside.jsx';
import Description from './Description.jsx';

gsap.registerPlugin( useGSAP );

const Label = ( { distanceFactor, position, name, description, setHovered, isActive, setActive } ) => {
    const label = useRef();
    const labelContent = useRef();
    const before = useRef();

    const { contextSafe } = useGSAP( { scope: label } );

    const onOcclude = contextSafe( ( isOccluded ) => {
        gsap
            .to( label.current, { opacity: isOccluded ? 0 : 1, scale: isOccluded ? 0 : 1, duration: 0.2 } );
    } );

    const onPointerEnter = contextSafe( (e) => {
        if ( e.pointerType === "touch" ) return;

        setHovered( true );

        gsap.timeline()
            .to( before.current, { scaleX: 1 } )
            .to( labelContent.current, { color: "white" }, 0 )
            .to( label.current, { backgroundColor: "#5995ED", duration: 0.8 }, 0);
    } );

    const onPointerLeave = contextSafe( (e) => {
        setHovered( false );

        gsap.timeline()
            .to( before.current, { scaleX: 0 } )
            .to( labelContent.current, { color: "black", ease: "power1.in" }, 0 )
            .to( label.current, { backgroundColor: "white", duration: 0.8 }, 0);
    } );

    useClickOutside(
        label, 
        () => { setActive( false ); },
        () => { setActive( !isActive ); }
    );

    return <Html
        distanceFactor={ distanceFactor }
        position={ position }
        occlude
        center
        onOcclude={ onOcclude }
    >
        <div 
            ref={ label }
            className="label"
            onPointerEnter={ onPointerEnter }
            onFocus={ onPointerEnter }
            onPointerLeave={ onPointerLeave }
            onBlur={ onPointerLeave }
        >   
            <div 
                ref={ before }
                className="before"
            />
            <span
                ref={ labelContent }
                className="label-content"
            >
                { name }
            </span>
        </div>
        <Description 
            description={ description }
            isActive={ isActive } 
        />
    </Html>
};

export default Label;