import { useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import useClickOutside from './useOutside.jsx';

const Label = ( { distanceFactor, position, name, setHovered, isActive, setActive } ) => {
    const ref = useRef();
    const [ isOccluded, setOccluded ] = useState( false );
    useClickOutside(
        ref, 
        () => { setActive(false) },
        () => { setActive(!isActive) }
    );

    return <Html
        distanceFactor={ distanceFactor }
        position={ position }
        occlude
        center
        onOcclude={ setOccluded }
    >
        <div 
            ref={ ref }
            className="label"
            style={ { transition: 'opacity 0.2s, transform 0.2s', opacity: !isOccluded ? 1 : 0, transform: `scale(${!isOccluded ? 1 : 0.25})` } }
            onPointerEnter={ () => { setHovered(true) } }
            onPointerLeave={ () => { setHovered(false) } }
        >
            { name }
        </div>
    </Html>
};

export default Label;