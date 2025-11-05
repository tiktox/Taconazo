import React, { useState, useRef, useEffect } from 'react';
import './TacoLovers.css';

const TacoLovers = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  const videos = [
    {
      url: 'https://ik.imagekit.io/lics6cm47/Taconazo%20a%202,000%20pies%20de%20altura%20%E2%9C%88%EF%B8%8F%20_%20Demasiado%20duros%20los%20muchachos%20de%20@thedrivershow%20@fast_elem.mp4?updatedAt=1762193983755',
      title: 'Preparación de Tacos de Carnitas',
      description: 'Mira cómo preparamos nuestros deliciosos tacos de carnitas'
    },
    {
      url: 'https://ik.imagekit.io/lics6cm47/@RDJAVI_%20SE%20COME%208%20TACOS%20EN%20VIVO%20EN%20@TACONAZO24_%EF%B8%8F.mp4?updatedAt=1762194542919',
      title: 'Tacos de Asada en Acción',
      description: 'El proceso artesanal de nuestros tacos de asada'
    },
    {
      url: 'https://ik.imagekit.io/lics6cm47/Un%20pedacito%20de%20M%C3%A9xico%20en%20Rep%C3%BAblica%20Dominicana!Si%20eres%20mexicano%20o%20simplemente%20amante%20de%20la%20buena%20.mp4?updatedAt=1762194964639',
      title: 'Experiencia Taconazo',
      description: 'Vive la experiencia completa en nuestro restaurante'
    }
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateTime = () => setCurrentTime(video.currentTime);
      const updateDuration = () => setDuration(video.duration);
      
      video.addEventListener('timeupdate', updateTime);
      video.addEventListener('loadedmetadata', updateDuration);
      
      return () => {
        video.removeEventListener('timeupdate', updateTime);
        video.removeEventListener('loadedmetadata', updateDuration);
      };
    }
  }, [currentVideo]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimelineClick = (e) => {
    const timeline = e.currentTarget;
    const rect = timeline.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className="section taco-lovers" id="taco-lovers">
      <h2>Taco Lovers</h2>
      <p>¡Lo que taconazo Representa!</p>
      
      <div className="video-player">
       <div className="hours-bar">
-          <span>24</span>
-          <span>H</span>
-          <span>O</span>
-          <span>R</span>
-          <span>A</span>
-          <span>S</span>
        </div>
        <div className="video-container">
          <video
            ref={videoRef}
            src={videos[currentVideo].url}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onClick={togglePlay}
          />
          
          <div className="video-controls">
            <button className="control-btn prev" onClick={prevVideo}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
              </svg>
            </button>
            
            <div className="timeline-container">
              <div className="time-display">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
              <div className="timeline" onClick={handleTimelineClick}>
                <div className="timeline-bg"></div>
                <div 
                  className="timeline-progress" 
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
                <div 
                  className="timeline-thumb" 
                  style={{ left: `${(currentTime / duration) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <button className="control-btn next" onClick={nextVideo}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 18h2V6h-2zm-8.5-6L16 6v12z"/>
              </svg>
            </button>
          </div>
          
          <div className="video-indicators">
            {videos.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentVideo ? 'active' : ''}`}
                onClick={() => {
                  setCurrentVideo(index);
                  setIsPlaying(false);
                  setCurrentTime(0);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TacoLovers;