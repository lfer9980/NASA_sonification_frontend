import React, { useEffect, useState } from 'react'
import { HeaderMenu } from '../components/HeaderMenu'
import axios from "axios";
import { VideoInput } from '../components/VideoInput';
import { useNavigate } from 'react-router-dom';

import "../styles/paralax.scss";
import "../styles/Home.scss";

function Home() {

    const [file, setFile] = useState(null);
    const [source, setSource] = useState();
    const [progress, setProgress] = useState({ started: false, pc: 0 });
    const [msg, setMsg] = useState(null);

    const navigate = useNavigate();


    const handlePreUpload = () => {
        if (!file) {
            setMsg("No file selected yet!")
            return;
        } else {
            setMsg(null)
        }

        const url = URL.createObjectURL(file);
        setSource(url);
    }


    const handleUpload = () => {

        const fd = new FormData();
        fd.append('file', file);

        setMsg("uploading...");
        setProgress(prevState => {
            return { ...prevState, started: true }
        })
        axios.post('/upload', fd, {
            onUploadProgress: (progressEvent) => {
                setProgress(prevState => {
                    return { ...prevState, pc: progressEvent.progress * 100 }
                })
            },
            headers: {
                'Custom-Header': 'multipart/form-data',
            }
        })
            .then(res => {
                setMsg('loading sucessful')
                console.log(res.data);
                navigate("/generate")
            })
            .catch(err => {
                setMsg('Upload failed')
                console.error(err);
            });
    }


    return (
        <>
            <HeaderMenu />
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <main>
                <section className='load-section'>
                    <h1>GAN's AI SONIFICATION FOR NASA SPACE APPS</h1>
                    <p className='p2'>
                        Lorem ipsum dolor sit amet consectetur. Aliquam auctor faucibus sed ipsum quis mauris urna. Nunc sit id quam posuere senectus sem sed sem. Aliquet ridiculus mauris felis pellentesque suspendisse eget a. Ullamcorper lacus fringilla egestas aenean praesent tellus nec.
                    </p>
                    <div className='load-section__form'>
                        <input
                            onChange={(e) => {
                                setFile(e.target.files[0])
                            }}
                            type='file'
                            accept=".mp4"
                            className='load-section__form__input'
                        />
                        {
                            source &&
                            <VideoInput
                                width={400}
                                height={300}
                                source={source}
                            />
                        }
                    </div>

                    {
                        progress.started &&
                        <progress max='100' value={progress.pc} />
                    }

                    {
                        msg && <p className='message p2 bold'>{msg}</p>
                    }

                    {
                        source ?
                            <button
                                onClick={handleUpload}
                            >
                                Upload your video to GAN AI
                            </button>
                            :

                            <button
                                onClick={handlePreUpload}
                            >
                                Pre upload your video
                            </button>
                    }


                </section>

            </main>
        </>
    )
}

export { Home }