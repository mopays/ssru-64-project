import './App.css';
import  'remixicon/fonts/remixicon.css';
import Details from './pages/Details';
import Itemsgrid from './components/itemsgrid';

function App() {
  const data = [
    {
      menu:[
        {
          title: 'menu1',
          icon: 'ri-cpu-line'
        },
        {
          title: 'menu2',
          icon: 'ri-kick-fill'
        },
        {
          title: 'menu3',
          icon: 'ri-kick-line',
        },
        {
          title: 'menu4',
          icon: 'ri-kick-line',
        },
        {
          title: 'menu5',
          icon: 'ri-kick-line',
        },
        {
          title: 'menu6',
          icon: 'ri-kick-line',
        },
        {
          title: 'menu7',
          icon: 'ri-kick-line',
        }
      ]
    }
  ]
  return (

    <>


{/* ----------------section start icon open ----------------  */}
<div className="flex content-center justify-center mt-10">
          {data[0].menu.map((item, index) => (
            <li class="liiconmenu" key={index}>
              <a
                href='#'
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page">
                <i className={`text-black text-3xl ${item.icon}`}></i>
              </a>
            </li>
          ))}
      </div>

{/* ----------------section  icon close  ----------------  */}









{/* ----------------section start banner   ----------------  */}
  <div className='banner'>

      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
    
  </div>

{/* ----------------section  end banner  ----------------  */}


{/* ----------------section  start Itemsgrid  ----------------  */}
<Itemsgrid/>
{/* ----------------section  end Itemsgrid  ----------------  */}
    </>
  );
}

export default App;
