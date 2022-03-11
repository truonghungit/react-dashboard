import Features from '../../components/Features/Features';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

type FeatureProps = {
  title: string;
};

const Feature = ({ title }: FeatureProps) => {
  return (
    <div className='px-8 py-12 mx-4 mt-8 text-center bg-white rounded-lg shadow-md border-2 border-gray-50 hover:border-indigo-500'>
      <div className='relative inline-block'>
        <img src='images/services-shape.svg' alt='shape' />
        <img
          className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'
          src='images/services-shape-1.svg'
          alt='shape'
        />
        <i className='lni lni-baloon' />
      </div>
      <div className='mt-8'>
        <h4 className='mb-8 text-xl font-bold text-gray-900'>{title}</h4>
        <p className='mb-8'>
          Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.
        </p>
        <a className='duration-300 hover:text-theme-color' href='href'>
          Learn More <i className='ml-2 lni lni-chevron-right' />
        </a>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <div>
      <div
        className='w-full pb-12 antialiased bg-white bg-cover bg-no-repeat bg-bottom'
        style={{ backgroundImage: 'url(images/banner-bg.svg)' }}
      >
        <Navbar />
        <Header />

        <div className='m-5 p-5'> hihi</div>
        <div className='m-5 p-5'> hihi</div>
      </div>

      <div className='container mx-auto xl:max-w-7xl'>
        <div className='flex justify-center'>
          <div className='w-full lg:w-2/3'>
            <div className='pb-10 text-center section-title'>
              <div className='m-auto line' />
              <h3 className='text-4xl font-bold'>
                Clean and simple design,
                <span className='font-normal'> Comes with everything you need to get started!</span>
              </h3>
            </div>
          </div>
        </div>
        <div className='justify-center flex'>
          <div className='w-full sm:w-2/3 lg:w-1/3'>
            <Feature title='Clean' />
          </div>
          <div className='w-full sm:w-2/3 lg:w-1/3'>
            <Feature title='Robust' />
          </div>
          <div className='w-full sm:w-2/3 lg:w-1/3'>
            <Feature title='Powerful' />
          </div>
        </div>
      </div>

      <section id='about' className='relative pt-20 about-area'>
        <div className='container  mx-auto xl:max-w-7xl'>
          <div className='flex'>
            <div className='w-full lg:w-1/2'>
              <div className='mx-4 mt-12 about-content'>
                <div className='mb-4 section-title'>
                  <div className='line' />
                  <h3 className='text-4xl font-bold'>
                    Quick &amp; Easy <span className='font-normal'>to Use Tailwind Template</span>
                  </h3>
                </div>
                <p className='mb-8'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore
                  et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet, consetetur sadipscing.
                </p>
                <a href='void' className='main-btn gradient-btn'>
                  Try it Free
                </a>
              </div>
            </div>
            <div className='w-full lg:w-1/2'>
              <div className='mx-4 mt-12 text-center about-image'>
                <img src='images/about1.svg' alt='about' />
              </div>
            </div>
          </div>
        </div>
        <div className='absolute top-0 right-0 height-full w-2/6'>
          <img src='images/about-shape-1.svg' alt='shape' />
        </div>
      </section>

      <section id='about' className='relative pt-20 about-area'>
        <div className='container  mx-auto xl:max-w-7xl'>
          <div className='flex'>
            <div className='w-full lg:w-1/2'>
              <div className='mx-4 mt-12 text-center about-image'>
                <img src='images/about1.svg' alt='about' />
              </div>
            </div>
            <div className='w-full lg:w-1/2'>
              <div
                className='mx-4 mt-12 about-content wow fadeInLeftBig'
                data-wow-duration='1s'
                data-wow-delay='0.5s'
                style={{
                  visibility: 'visible',
                  animationDuration: '1s',
                  animationDelay: '0.5s',
                  animationName: 'fadeInLeftBig',
                }}
              >
                <div className='mb-4 section-title'>
                  <div className='line' />
                  <h3 className='text-4xl font-bold'>
                    Quick &amp; Easy <span className='font-normal'>to Use Tailwind Template</span>
                  </h3>
                </div>
                <p className='mb-8'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore
                  et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet, consetetur sadipscing.
                </p>
                <a href='void' className='main-btn gradient-btn'>
                  Try it Free
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute top-0 left-0 height-full w-2/6'>
          <img src='images/about-shape-2.svg' alt='shape' />
        </div>
      </section>

      <Features />

      <Footer />
    </div>
  );
}
