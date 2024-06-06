import Partner from '@/interfaces/partner'

import oceanThreads from '@/assets/partners/ocean-threads.png'
import blueCycle from '@/assets/partners/blue-cycle.png'
import ecoWave from '@/assets/partners/eco-wave.png'
import marisGreen from '@/assets/partners/maris-green.png'

export const partners: Partner[] = [
  {
    title: 'OceanThreads',
    description: 'Tênis sustentáveis e elegantes.',
    image: oceanThreads,
  },
  {
    title: 'BlueCycle',
    description: 'Fios de alta qualidade para impressoras 3D.',
    image: blueCycle,
  },
  {
    title: 'EcoWave',
    description: 'Roupas estilosas e ecológicas.',
    image: ecoWave,
  },
  {
    title: 'MarisGreen',
    description: 'Acessórios que fazem a diferença!',
    image: marisGreen,
  },
]
