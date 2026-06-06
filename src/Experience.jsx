import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const Experience = () => {
    const model = useLoader(GLTFLoader, './aituMap.glb')

    return <>
        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 3.0 } />
        <ambientLight intensity={ 0.5 } />

        <primitive object={ model.scene } scale={ 0.1 } />
    </>
};

export default Experience;