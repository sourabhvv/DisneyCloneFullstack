import React from 'react'
import {Link} from 'react-router-dom'
import ProductionHouse from './ProductionHouse';
const movies = [
    { 

      id:1,
      title: 'Avengers Endgame',
      image: 'https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5158/875158-v',
    },
    
    { 
      id:2,
      title: 'Guardians of the Galaxy Vol. 3',
      image: 'https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7487/1557487-v-7443ca868089',
    },

    { 
      id:3,
      title: 'Aladin ',
      image: 'https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5151/875151-v',
    },

    { 
      id:4,
      title: 'Moana 2016',
      image: 'https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8258/1548258-v-0afc42d2d4b8',
    },

    { 
      id:5,
      title: 'Frozen 2 2019',
      image: 'https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5203/875203-v',
    },

  ];
function Marvel() {
  return (
    <>
    <ProductionHouse/>
     <div className="p-8 px-8 md:px-16">
        <h2 className="text-[20px] text-white font-bold">Marvel</h2>
        <div className="relative">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute mt-[80px]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M328 112L184 256l144 144"></path>
          </svg>
          <div className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4">
            {movies.map((movie, index) => (
              <Link to={`/movies-Details/${movie.id}`}> 
              <section
                key={index}
                className="hover:scale-110 transition-all duration-150 ease-in"
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-[100px] md:w-[230px] rounded-lg hover:border-[2px] border-gray-400 cursor-pointer"
                />
                <h2 className="w-[110px] md:w-[260px] text-white mt-2">{movie.title}</h2>
              </section>
              </Link>  
            ))}
          </div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 mt-[80px]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M184 112l144 144-144 144"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Marvel