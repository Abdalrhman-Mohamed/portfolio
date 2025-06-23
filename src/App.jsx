import './App.css'
import Header from './Components/1-Header/Header'
import Hero from './Components/2-Hero/Hero'
import Main from './Components/3-Main/Main'
import ContactUs from './Components/4-ContactUs/ContactUs'
import Footer from './Components/5-Footer/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css'


function App() {

  return (
    <div className='w-4/5 overflow-hidden p-1 mx-auto bg-white text-black dark:bg-[#18181b] dark:text-[#fff] border-2 border-[rgba(63,63,70,0.4)]'>
      <Header />
      <Hero />
      <div className='border-b-2 border-[rgba(63,63,70,0.13)] dark:border-[rgba(63,63,70,0.4)] my-10'></div>
      <Main />
      <div className='border-b-2 border-[rgba(63,63,70,0.13)] dark:border-[rgba(63,63,70,0.4)] mb-10'></div>
      <ContactUs />
      <div className='border-b-2 border-[rgba(63,63,70,0.13)] dark:border-[rgba(63,63,70,0.4)] mb-5'></div>
      <Footer />
    </div>
  )
}

export default App
