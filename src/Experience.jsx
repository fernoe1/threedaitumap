import { useTexture, useGLTF, OrbitControls, Html, Stats, Edges } from '@react-three/drei';
import Label from './Label.jsx';
import { useControls } from 'leva';
import { useEffect, useRef, useState } from 'react';
import Room from './Room.jsx';

const Experience = () => {
    const { distanceFactorScale } = useControls( {
        distanceFactorScale: 1,
    } );

    const { nodes: a112 } = useGLTF( './model/1/12/mesh.glb' );
    const flooring = useTexture( './model/1/12/flooring.jpg' );
    flooring.flipY = false;
    const walls = useTexture( './model/1/12/walls.jpg' );
    walls.flipY = false;

    return <>
        <color args={ [ '#030202' ] } attach="background" />

        <OrbitControls makeDefault />

        <Stats />

        <Room
            model={ a112['121K'] } texture={ flooring }
            lDistanceFactor={ 18 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ '121K' } 
        />

        <Room
            model={ a112['122K'] } texture={ flooring }
            lDistanceFactor={ 18 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ '122K' } 
        />

        <Room
            model={ a112['123K'] } texture={ flooring }
            lDistanceFactor={ 18 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ '123K' } 
        />

        <Room
            model={ a112['124K'] } texture={ flooring }
            lDistanceFactor={ 18 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ '124K' } 
        />

        <Room
            model={ a112['135'] } texture={ flooring }
            lDistanceFactor={ 18 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ '135' } 
        />

        <Room
            model={ a112['136'] } texture={ flooring }
            lDistanceFactor={ 18 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ '136' } 
        />

        <Room
            model={ a112['137P'] } texture={ flooring }
            lDistanceFactor={ 18 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ '137P' } 
        />

        <Room
            model={ a112['138L'] } texture={ flooring }
            lDistanceFactor={ 18 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ '138L' } 
        />

        <Room 
            model={ a112['139'] } texture={ flooring }
            lDistanceFactor={ 18 * distanceFactorScale } lPos={ [0, 0.2, 0 ] } lName={ '139' }
        />

        <Room
            model={ a112.atrium } texture={ flooring }
            lDistanceFactor={ 20 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ 'Atrium' }
        />

        <mesh 
            geometry={ a112.atriumCloakroom.geometry }
            position={ a112.atriumCloakroom.position }
            rotation={ a112.atriumCloakroom.rotation }
            scale={ a112.atriumCloakroom.scale }
        >
            <meshBasicMaterial map={ flooring } />
        </mesh>

        <mesh 
            geometry={ a112.atriumCoffee.geometry }
            position={ a112.atriumCoffee.position }
            rotation={ a112.atriumCoffee.rotation }
            scale={ a112.atriumCoffee.scale }
        >
            <meshBasicMaterial map={ flooring } />
        </mesh>

        <mesh 
            geometry={ a112.atriumMerch.geometry }
            position={ a112.atriumMerch.position }
            rotation={ a112.atriumMerch.rotation }
            scale={ a112.atriumMerch.scale }
        >
            <meshBasicMaterial map={ flooring } />
        </mesh>

        <mesh 
            geometry={ a112.atriumSecurity.geometry }
            position={ a112.atriumSecurity.position }
            rotation={ a112.atriumSecurity.rotation }
            scale={ a112.atriumSecurity.scale }
        >
            <meshBasicMaterial map={ flooring } />
        </mesh>

        <Room
            model={ a112.cloakroom } texture={ flooring }
            lDistanceFactor={ 16 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ 'Cloakroom' } 
        />

        <Room
            model={ a112.coffee } texture={ flooring }
            lDistanceFactor={ 18 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ 'Coffee' } 
        />

        <Room
            model={ a112.coworking } texture={ flooring }
            lDistanceFactor={ 24 * distanceFactorScale } lPos={ [ 0, 0.2, -1 ] } lName={ 'Coworking' } 
        />

        <Room
            model={ a112.elevator112 } texture={ flooring }
            lDistanceFactor={ 16 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ 'Elevator' } 
        />

        <Room
            model={ a112.exitStair1121 } texture={ flooring }
            lDistanceFactor={ 12 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ 'Emeregency exit' } 
        />

        <Room
            model={ a112.exitStair1122 } texture={ flooring }
            lDistanceFactor={ 12 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ 'Emeregency exit' } 
        />

        <mesh 
            geometry={ a112.floor112.geometry }
            position={ a112.floor112.position }
            rotation={ a112.floor112.rotation }
            scale={ a112.floor112.scale }
        >
            <meshBasicMaterial map={ flooring } />
        </mesh>

        <Room
            model={ a112.merch } texture={ flooring }
            lDistanceFactor={ 14 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ 'Merch' } 
        />

        <Room
            model={ a112.security } texture={ flooring }
            lDistanceFactor={ 14 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ 'Security' } 
        />

        <mesh 
            geometry={ a112.walls112.geometry }
            position={ a112.walls112.position }
            rotation={ a112.walls112.rotation }
            scale={ a112.walls112.scale }
        >
            <meshBasicMaterial map={ walls } />
        </mesh>

        <Room
            model={ a112.wc1121 } texture={ flooring }
            lDistanceFactor={ 14 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ 'WC' } 
        />

        <Room
            model={ a112.wc1122 } texture={ flooring }
            lDistanceFactor={ 14 * distanceFactorScale } lPos={ [ 0, 0.2, 0 ] } lName={ 'WC' } 
        />
    </>
};

export default Experience;