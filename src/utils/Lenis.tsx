import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

export default function LenisScroll() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 2.5,
		})

		function raf(time: number) {
			
			requestAnimationFrame(raf)
         
		}

		requestAnimationFrame(raf)
	})

	return <script about='lenis' />
}

