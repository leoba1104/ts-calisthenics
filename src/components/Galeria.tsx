import ThumbnailCarousel from '@/components/ui/thumbnail-carousel'
import type { CarouselItem } from '@/components/ui/thumbnail-carousel'

const photos: CarouselItem[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=880&h=600&fit=crop',
    title: 'Entrenamiento de fuerza — dominadas',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=880&h=600&fit=crop',
    title: 'Sesión de muscle-up',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=880&h=600&fit=crop',
    title: 'Core y estabilidad',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=880&h=600&fit=crop',
    title: 'Comunidad TS en acción',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=880&h=600&fit=crop',
    title: 'Técnica y progresión',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=880&h=600&fit=crop',
    title: 'Street workout al aire libre',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=880&h=600&fit=crop',
    title: 'Clase grupal — entrenamiento funcional',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=880&h=600&fit=crop',
    title: 'Fuerza que se construye día a día',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=880&h=600&fit=crop',
    title: 'La academia — espacio de transformación',
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=880&h=600&fit=crop',
    title: 'Handstand — control total del cuerpo',
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=880&h=600&fit=crop',
    title: 'Comunidad, disciplina y resultados',
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=880&h=600&fit=crop',
    title: 'Superá tus límites — cada rep cuenta',
  },
]

export default function Galeria() {
  return (
    <section id="galeria" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-muted text-[15px] max-w-lg leading-relaxed mb-10">
          Entrenamientos, comunidad y momentos reales. Esto es TS Calisthenics.
        </p>

        <ThumbnailCarousel items={photos} />

      </div>
    </section>
  )
}
