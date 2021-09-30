import React from 'react'
import {Scene ,Mesh,BoxGeometry ,
        PerspectiveCamera,MeshNormalMaterial,PlaneGeometry,MeshPhongMaterial,DoubleSide,
        WebGLRenderer,
    } from 'three'

export default function Three() {
    let mount__myRef = React.useRef(null);

    React.useEffect(() => {
        const scene = new Scene();
    
        const camera = new PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01,12);
        camera.position.z = 1;
        
        const renderer = new WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setAnimationLoop( animation );
        mount__myRef.appendChild( renderer.domElement );    
        
        const geometry = new BoxGeometry( 0.4,0.6,0.4 );
        const material = new MeshNormalMaterial();
        // const geometry = new PlaneGeometry( 1,1,1 );
        // const material = new MeshNormalMaterial({color:0xdd0 , side:DoubleSide});
    
        const mesh = new Mesh( geometry, material );
        scene.add( mesh );
        // console.log(geometry);
        // mesh.rotation.y = 10
        // mesh.rotation.x = 10
        
        function animation(){
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.005;
            renderer.render( scene, camera );
        }
    }, [])



    return (
            <div className="three" ref={(ref)=> (mount__myRef = ref)} />
    )
}
