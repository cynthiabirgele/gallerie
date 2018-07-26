import React, { Component } from "react"

export default class Water extends Component {
	constructor(props) {
		super(props)

		this.start = this.start.bind(this)
		this.stop = this.stop.bind(this)
		this.animate = this.animate.bind(this)
		this.onWindowResize = this.onWindowResize.bind(this)
	}

	componentDidMount() {
		var THREE = require("three")
		var OrbitControls = require("three-orbit-controls")(THREE)
		const width = this.mount.clientWidth
		const height = this.mount.clientHeight

		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000)
		camera.position.set(0, 1, -3)
		camera.lookAt(new THREE.Vector3())

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

		scene.add(new THREE.HemisphereLight(0xaaaaaa, 0x444444))
		var light = new THREE.DirectionalLight(0xffffff, 0.5)
		light.position.set(1, 1, 1)
		scene.add(light)

		//Controls
		var controls = new OrbitControls(camera, renderer.domElement)
		controls.minDistance = 10
		controls.maxDistance = 50
		controls.maxPolarAngle = Math.PI / 2
		//

		//First element
		const geometry = new THREE.DodecahedronBufferGeometry(0.8)
		var material = new THREE.MeshStandardMaterial({
			color: 0xe3e4e6,
			roughness: 0.7,
			metalness: 0.3,
			flatShading: true,
		})

		const cube = new THREE.Mesh(geometry, material)
		cube.position.x = -2.7
		cube.position.y = 1.3
		scene.add(cube)

		//Second element
		const cube2 = cube.clone()
		cube2.geometry = new THREE.DodecahedronBufferGeometry(1.3)
		cube2.material = new THREE.MeshStandardMaterial({
			color: 0xcad4c8,
			roughness: 0.5,
			metalness: 0.2,
			flatShading: true,
		})
		cube2.position.x = 1.7
		cube2.position.y = 1.3
		scene.add(cube2)
		//

		//Third element
		const cube3 = cube.clone()
		cube3.geometry = new THREE.DodecahedronBufferGeometry(1.6)
		cube3.material = new THREE.MeshStandardMaterial({
			color: 0xe6e5e3,
			roughness: 0.4,
			metalness: 0.01,
			flatShading: true,
		})
		cube3.position.x = -1.7
		cube3.position.y = -1.3
		scene.add(cube3)
		//

		//Fourth element
		const cube4 = cube.clone()
		cube4.geometry = new THREE.DodecahedronBufferGeometry(0.6)
		cube4.material = new THREE.MeshStandardMaterial({
			color: 0xe7e7df,
			roughness: 0.4,
			metalness: 0.01,
			flatShading: true,
		})
		cube4.position.x = 1
		cube4.position.y = -0.3
		cube4.position.z = -0.3
		scene.add(cube4)
		//

		//Fifth element
		const cube5 = cube.clone()
		cube5.geometry = new THREE.DodecahedronBufferGeometry(1)
		cube5.material = new THREE.MeshStandardMaterial({
			color: 0xdce3df,
			roughness: 0.4,
			metalness: 0.01,
			flatShading: true,
		})
		cube5.position.x = -2.3
		cube5.position.y = 1.3
		cube5.position.z = -0.8
		scene.add(cube5)
		//

		//Sixth element
		const cube6 = cube.clone()
		cube6.geometry = new THREE.DodecahedronBufferGeometry(1)
		cube6.material = new THREE.MeshStandardMaterial({
			color: 0xa2a2a2,
			roughness: 0.4,
			metalness: 0.01,
			flatShading: true,
		})
		cube6.position.x = 2.3
		cube6.position.y = -1.3
		cube6.position.z = -0.8
		scene.add(cube6)
		//

		//Seventh element
		const cube7 = cube.clone()
		cube7.geometry = new THREE.DodecahedronBufferGeometry(0.8)
		cube7.material = new THREE.MeshStandardMaterial({
			color: 0xd5dae0,
			roughness: 0.4,
			metalness: 0.01,
			flatShading: true,
		})
		cube7.position.x = 2.3
		cube7.position.y = -1.3
		cube7.position.z = -0.8
		scene.add(cube7)
		//

		camera.position.z = 3
		renderer.setClearColor(0xffffff, 0)
		renderer.setSize(width, height)

		this.scene = scene
		this.camera = camera
		this.renderer = renderer
		this.material = material
		this.cube = cube
		this.cube2 = cube2
		this.cube3 = cube3
		this.cube4 = cube4
		this.cube5 = cube5
		this.cube6 = cube6
		this.cube7 = cube7
		this.controls = controls

		this.mount.appendChild(this.renderer.domElement)
		this.start()
	}

	componentWillUnmount() {
		this.stop()
		this.mount.removeChild(this.renderer.domElement)
	}

	start() {
		if (!this.frameId) {
			this.frameId = requestAnimationFrame(this.animate)
		}
	}

	stop() {
		cancelAnimationFrame(this.frameId)
	}

	animate() {
		var time = performance.now() * 0.0001
		var time2 = performance.now() * 0.000077
		this.controls.update()

		this.cube.rotation.x += 0.00098
		this.cube.rotation.y -= 0.00096
		this.cube.position.x = Math.sin(time) * -1 - 3.8
		this.cube.position.z = Math.sin(time) * 1 + 1
		this.cube.position.y = Math.sin(time) * -1 + 2

		this.cube2.rotation.x -= 0.00068
		this.cube2.rotation.y += 0.00086
		this.cube2.position.x = Math.sin(time2) * -0.8 + 0.8
		this.cube2.position.y = Math.sin(time2) * 1 + 2
		this.cube2.position.z = Math.sin(time2) * -1 + 0.3

		this.cube3.rotation.x += 0.00061
		this.cube3.rotation.y -= 0.00089
		this.cube3.position.x = Math.sin(time2) * 1 - 0.8
		this.cube3.position.y = Math.sin(time2) * 1 - 0.8
		this.cube3.position.z = Math.sin(time2) * -1 + 1.2

		this.cube4.rotation.x += 0.00071
		this.cube4.rotation.y -= 0.00079
		this.cube4.position.y = Math.sin(time2) * 1 - 0.8
		this.cube4.position.z = Math.sin(time2) * -1 + 3.4
		this.cube4.position.x = Math.sin(time2) * -1 + 0.9

		this.cube5.rotation.x -= 0.00081
		this.cube5.rotation.y += 0.00099
		this.cube5.position.y = Math.sin(time2) * -1 + 3.3
		this.cube5.position.z = Math.sin(time2) * -1 - 1.8
		this.cube5.position.x = Math.sin(time2) * 1 - 1.4

		this.cube6.rotation.x -= 0.00081
		this.cube6.rotation.y += 0.00099
		this.cube6.position.y = Math.sin(time2) * -1 + 2.7
		this.cube6.position.z = Math.sin(time2) * 1 + 0.8
		this.cube6.position.x = Math.sin(time2) * -1 + 2.9

		this.cube7.rotation.x += 0.00071
		this.cube7.rotation.y += 0.00099
		this.cube7.position.y = Math.sin(time2) * -1 + 0.7
		this.cube7.position.z = Math.sin(time2) * 1 + 0.8
		this.cube7.position.x = Math.sin(time2) * -1 + 2.9

		this.renderScene()
		this.frameId = window.requestAnimationFrame(this.animate)
	}

	onWindowResize() {
		this.camera.aspect = window.innerWidth / window.innerHeight
		this.camera.updateProjectionMatrix()
		this.renderer.setSize(window.innerWidth, window.innerHeight)
	}

	renderScene() {
		this.renderer.render(this.scene, this.camera)
	}

	render() {
		return (
			<div
				ref={mount => {
					this.mount = mount
				}}
				style={{
					width: "100%",
					height: "100%",
					position: `absolute`,
					top: `50px`,
					left: 0,
					right: 0,
					margin: `auto`,
				}}
			/>
		)
	}
}
