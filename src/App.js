import Navigation from './components/navigation';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';



ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

function App() {
  return (
    <div>
      <Navigation />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
    </div>
  );
}