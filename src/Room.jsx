import { useEffect, useRef, useState } from 'react';
import Label from './Label.jsx';
import { Edges } from '@react-three/drei';

const Room = ( { model, texture, lDistanceFactor, lPos, lName, lDescription } ) => {
    const { geometry, position, rotation, scale } = model;

    const edges = useRef();

    const [ isHovered, setHovered ] = useState( false );
    const [ isActive, setActive ] = useState( false );

    useEffect( () => {
        if (!edges.current) return;

        edges.current.material.depthTest = false;
        edges.current.material.depthWrite = false;
        edges.current.renderOrder = 999;
    }, [] );


    return <mesh
        geometry={ geometry }
        position={ position }
        rotation={ rotation }
        scale={ scale }
    >
        <meshBasicMaterial map={ texture } />
        <Label distanceFactor={ lDistanceFactor } position={ lPos } name={ lName } description={ lDescription } setHovered={ setHovered } isActive={ isActive } setActive={ setActive } />
        <Edges ref={ edges } visible={ isHovered } lineWidth={ 2 } threshold={1} position={ [ 0, 0.01, 0 ] }/>
    </mesh>
};

export default Room;