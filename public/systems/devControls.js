        /////// DEV
        // const lightHelper = new DirectionalLightHelper( mainLight );
        // const hemiLightHelper = new HemisphereLightHelper( ambientLight, 5 );
        // scene.add( lightHelper, hemiLightHelper );
        // controls = createControls(camera, renderer.domElement);
        // controls.autoRotate = false;
        // controls.enabled = true;
        // // controls.target.copy(model.position)
        // loop.updatables.push(controls);
        // const dir = new Vector3( 1, 2, 0 );
        // //normalize the direction vector (convert to vector of length 1)
        // dir.normalize();
        
        // const origin = new Vector3( 0, 0, 0 );
        // const length = 1;
        // const hex = 0xffff00;
        // const arrowHelper = new ArrowHelper( dir, origin, length, hex );
        // scene.add( arrowHelper );
          
        // const size = 10;
        // const divisions = 10;
        // const gridHelper = new GridHelper( size, divisions );
        // scene.add( gridHelper );
        // scene.add(axesHelper)
        // camera.add(mainLight)
        // axesHelper.setColors(colorRed , colorMagenta , colorBlue );
        // //  // lights helper
        // const gui = new GUI();
        // // // bind the gui to the class World
        // this.gui = gui;

        // class ColorGUIHelper {
        //     constructor(object, prop) {
        //     this.object = object;
        //     this.prop = prop;
        //     }
        //     get value() {
        //     return `#${this.object[this.prop].getHexString()}`;
        //     }
        //     set value(hexString) {
        //     this.object[this.prop].set(hexString);
        //     }
        // }
        // function makeXYZGUI(gui, vector3, name, onChangeFn) {
        //     const folder = gui.addFolder(name);
        //     folder.add(vector3, 'x', -10, 10).onChange(onChangeFn);
        //     folder.add(vector3, 'y', 0, 10).onChange(onChangeFn);
        //     folder.add(vector3, 'z', -10, 10).onChange(onChangeFn);
        //     folder.open();
        // }
        // function updateLight() {
        //     mainLight.target.updateMatrixWorld();
        //     lightHelper.update();
        // }
        // updateLight();
        // gui.addColor(new ColorGUIHelper(mainLight, 'color'), 'value').name('color');
        // gui.add(mainLight, 'intensity', 0, 10, 0.01);
        // makeXYZGUI(gui, mainLight.position, 'position', updateLight);
        // makeXYZGUI(gui, mainLight.target.position, 'target', updateLight);
   
        // // Hemispherelight
        // gui.addColor(new ColorGUIHelper(ambientLight, 'color'), 'value').name('color');
        // gui.addColor(new ColorGUIHelper(ambientLight, 'color'), 'value').name('skyColor');
        // gui.addColor(new ColorGUIHelper(ambientLight, 'groundColor'), 'value').name('groundColor');
        // gui.add(ambientLight, 'intensity', 0, 10, 0.01);
        
        // stats = createStats();
        // loop.updatables.push(stats);
        ///// DEV ENDSx