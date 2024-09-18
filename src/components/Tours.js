import Tour from './Tour.js'
import { tours } from '../data'
import Title from './Title.js'

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title title="featured" subTitle="tours"></Title>

        <div className="section-center featured-center">
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour}></Tour>
          })}
        </div>
      </section>
    </>
  )
}
export default Tours
