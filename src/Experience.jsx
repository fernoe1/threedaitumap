import { useTexture, useGLTF, OrbitControls, Html, Stats, Edges } from '@react-three/drei';
import Label from './Label.jsx';
import { useControls } from 'leva';
import { useEffect, useRef, useState } from 'react';

const Experience = () => {
    const { distanceFactorScale } = useControls( {
        distanceFactorScale: 1,
    } );

    const { nodes: a112 } = useGLTF( './model/1/12/mesh.glb' );
    const flooring = useTexture( './model/1/12/flooring.jpg' );
    flooring.flipY = false;
    const walls = useTexture( './model/1/12/walls.jpg' );
    walls.flipY = false;

    const edges = useRef();

    useEffect(() => {
        edges.current.material.depthTest = false;
        edges.current.material.depthWrite = false;
        edges.current.renderOrder = 999;
    }, []);

    return <>
        <color args={ [ '#030202' ] } attach="background" />

        <OrbitControls makeDefault />

        <Stats />

        <mesh 
            geometry={ a112["121K"].geometry }
            position={ a112["121K"].position }
            rotation={ a112["121K"].rotation }
            scale={ a112["121K"].scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 18 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ '121K' } />
        </mesh>

        <mesh 
            geometry={ a112["122K"].geometry }
            position={ a112["122K"].position }
            rotation={ a112["122K"].rotation }
            scale={ a112["122K"].scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 18 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ '122K' } />
        </mesh>

        <mesh 
            geometry={ a112["123K"].geometry }
            position={ a112["123K"].position }
            rotation={ a112["123K"].rotation }
            scale={ a112["123K"].scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 18 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ '123K '} />
        </mesh>

        <mesh 
            geometry={ a112["124K"].geometry }
            position={ a112["124K"].position }
            rotation={ a112["124K"].rotation }
            scale={ a112["124K"].scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 18 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ '124K' } />
        </mesh>

        <mesh 
            geometry={ a112["135"].geometry }
            position={ a112["135"].position }
            rotation={ a112["135"].rotation }
            scale={ a112["135"].scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 18 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ '135' } />
        </mesh>

        <mesh 
            geometry={ a112["136"].geometry }
            position={ a112["136"].position }
            rotation={ a112["136"].rotation }
            scale={ a112["136"].scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 18 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ '136' } />
        </mesh>

        <mesh 
            geometry={ a112["137P"].geometry }
            position={ a112["137P"].position }
            rotation={ a112["137P"].rotation }
            scale={ a112["137P"].scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 18 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ '137P '} />
        </mesh>

        <mesh 
            geometry={ a112["138L"].geometry }
            position={ a112["138L"].position }
            rotation={ a112["138L"].rotation }
            scale={ a112["138L"].scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 18 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ '138L' } />
        </mesh>

        <mesh 
            geometry={ a112["139"].geometry }
            position={ a112["139"].position }
            rotation={ a112["139"].rotation }
            scale={ a112["139"].scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 18 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ '139' } />
        </mesh>

        <mesh 
            geometry={ a112.atrium.geometry }
            position={ a112.atrium.position }
            rotation={ a112.atrium.rotation }
            scale={ a112.atrium.scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 20 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ 'Atrium' } />
            <Edges visible ref={ edges } lineWidth={ 2 } threshold={1} position={ [ 0, 0.01, 0 ] } />
        </mesh>

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

        <mesh 
            geometry={ a112.cloakroom.geometry }
            position={ a112.cloakroom.position }
            rotation={ a112.cloakroom.rotation }
            scale={ a112.cloakroom.scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 16 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ 'Cloakroom' } />
        </mesh>

        <mesh 
            geometry={ a112.coffee.geometry }
            position={ a112.coffee.position }
            rotation={ a112.coffee.rotation }
            scale={ a112.coffee.scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 18 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ 'Coffee' } />
        </mesh>

        <mesh 
            geometry={ a112.coworking.geometry }
            position={ a112.coworking.position }
            rotation={ a112.coworking.rotation }
            scale={ a112.coworking.scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 24 * distanceFactorScale } position={ [ 0, 0.2, -1 ] } name={ 'Coworking' } />
        </mesh>

        <mesh 
            geometry={ a112.elevator112.geometry }
            position={ a112.elevator112.position }
            rotation={ a112.elevator112.rotation }
            scale={ a112.elevator112.scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 16 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ 'Elevator' } />
        </mesh>

        <mesh 
            geometry={ a112.exitStair1121.geometry }
            position={ a112.exitStair1121.position }
            rotation={ a112.exitStair1121.rotation }
            scale={ a112.exitStair1121.scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 12 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ 'Emeregency exit' } />
        </mesh>

        <mesh 
            geometry={ a112.exitStair1122.geometry }
            position={ a112.exitStair1122.position }
            rotation={ a112.exitStair1122.rotation }
            scale={ a112.exitStair1122.scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 12 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ 'Emeregency exit' } />
        </mesh>

        <mesh 
            geometry={ a112.floor112.geometry }
            position={ a112.floor112.position }
            rotation={ a112.floor112.rotation }
            scale={ a112.floor112.scale }
        >
            <meshBasicMaterial map={ flooring } />
        </mesh>

        <mesh 
            geometry={ a112.merch.geometry }
            position={ a112.merch.position }
            rotation={ a112.merch.rotation }
            scale={ a112.merch.scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 14 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ 'Merch' } />
        </mesh>

        <mesh 
            geometry={ a112.security.geometry }
            position={ a112.security.position }
            rotation={ a112.security.rotation }
            scale={ a112.security.scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 14 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ 'Security' } />
        </mesh>

        <mesh 
            geometry={ a112.walls112.geometry }
            position={ a112.walls112.position }
            rotation={ a112.walls112.rotation }
            scale={ a112.walls112.scale }
        >
            <meshBasicMaterial map={ walls } />
        </mesh>

        <mesh 
            geometry={ a112.wc1121.geometry }
            position={ a112.wc1121.position }
            rotation={ a112.wc1121.rotation }
            scale={ a112.wc1121.scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 14 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ 'WC' } />
        </mesh>

        <mesh 
            geometry={ a112.wc1122.geometry }
            position={ a112.wc1122.position }
            rotation={ a112.wc1122.rotation }
            scale={ a112.wc1122.scale }
        >
            <meshBasicMaterial map={ flooring } />
            <Label distanceFactor={ 14 * distanceFactorScale } position={ [ 0, 0.2, 0 ] } name={ 'WC' } />
        </mesh>
    </>
};

export default Experience;