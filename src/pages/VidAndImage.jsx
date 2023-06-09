import React, { useEffect, useState } from "react";
import FrameEdital from "../components/FrameEdital";
import Video from "../components/Video";
import NavBar from "../components/NavBar";
import Background from "../components/Background";
import axios from "axios";


function VidAndImages(){
    const [ docs, setDocs ] = useState({
        docs: [], videos: []
    })
    
    const [activeTab, setActiveTab] = useState("videos");

    useEffect(() => {
        axios.get('http://localhost:8000/api/tutoriais')
    .then(response => updateVideos(response.data.map((element) => {
        return <Video key={element.id} link={element.src} description={element.title}/>
    }
    )))
    .catch(error => {
      console.log('deu ruim');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateVideos = (newVideos) => {
        setDocs(prevState => ({
          ...prevState,
          videos: newVideos
        }));
      };

    return (
        <>
            <NavBar/>
            <Background/>
            <div //Screen
                className="absolute text-white flex flex-col justify-center items-center w-screen top-20"
            >
                <div //Título da página
                    className="w-full text-center mb-32"
                >
                    <h1 
                        className="font-oswald text-2xl mt-6"
                    >
                        Aproveite nossos tutoriais!
                    </h1>
                </div>

                <div //Container do painel central
                    className="w-full flex items-start justify-center"
                >
                    <div //Painel central
                        className="h-8/12 bg-white flex flex-col shadow-2xl justify-center items-center
                        mobile:w-11/12
                        desktop:w-10/12
                        "
                    >
                        <div //Cabeçalho do painel
                            className="w-full"
                        >
                            <button
                                className={`w-1/2 h-11 items-center font-robot text-footer border border-b-green-600 ${
                                        activeTab === "videos"
                                        ? "bg-footer text-white"
                                        : "bg-slate-200 text-gray-900"
                                    }`}
                                onClick={() => setActiveTab('videos')}
                            >
                                VÍDEOS
                            </button>
                            <button
                                className={`w-1/2 h-11 items-center font-robot text-footer border border-b-green-600 ${
                                        activeTab === "manuals"
                                        ? "bg-footer text-white"
                                        : "bg-slate-200 text-gray-900"
                                    }`}
                                    onClick={() => setActiveTab('manuals')}
                            >
                                MANUAIS
                            </button>
                        </div>
                        <div //Documentos
                            className={`w-full grid min-h-centralPanel
                            desktop:overflow-auto desktop:max-h-centralPanel
                            mobile:max-h-none mobile:pb-16 text-center

                            ${docs.docs.length > 0 || docs.videos.length > 0 ? 'mobile:grid-cols-1 desktop:grid-cols-2' : 'text-center flex justify-center'}`}
                        >                            
                            {docs.docs.length > 0 && activeTab === 'manuals' && docs.docs}
                            {docs.videos.length > 0 && activeTab === 'videos' && docs.videos}
                            {docs.docs.length === 0 && activeTab === 'manuals' &&
                                <p 
                                    className="pt-5 text-letter"
                                >
                                    Nenhum video disponível no momento
                                </p>    
                            }
                            {docs.videos.length === 0 && activeTab === 'videos' && 
                                <p 
                                    className="pt-5 text-letter"
                                >
                                    Nenhum video disponível no momento
                                </p> 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VidAndImages;