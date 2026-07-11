import * as THREE from 'three';
import { useState, useRef } from 'react';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Label = ( { distanceFactor, position, name } ) => {
    const ref = useRef();

    const [isOccluded, setOccluded] = useState();

    return <group ref={ ref } >
        <Html
            distanceFactor={ distanceFactor }
            position={ position }
            occlude
            center
            onOcclude={ setOccluded }
        >
            <div 
                className="label"
                style={ { transition: 'opacity 0.2s, transform 0.2s', opacity: !isOccluded ? 1 : 0, transform: `scale(${!isOccluded ? 1 : 0.25})` } }
            >
                { name }
            </div>
        </Html>
    </group> 
};

export default Label;