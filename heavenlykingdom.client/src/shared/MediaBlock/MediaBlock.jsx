import React, { useState } from 'react';
import './MediaBlock.css';

export const MediaBlock = () => {
    const [activeTab, setActiveTab] = useState('ceremony');
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <div className="media-container">
            {/* Навигация внутри блока */}
            <div className="media-tabs">
                <button onClick={() => setActiveTab('ceremony')} className={activeTab === 'ceremony' ? 'active' : ''}>CEREMONY</button>
                <button onClick={() => setActiveTab('music')} className={activeTab === 'music' ? 'active' : ''}>MUSIC</button>
                <button onClick={() => setActiveTab('video')} className={activeTab === 'video' ? 'active' : ''}>VIDEOS</button>
            </div>

            <div className="media-content">
                {/* 1. ЦЕРЕМОНИИ: Сетка 3х3 */}
                {activeTab === 'ceremony' && (
                    <div className="grid-3x3">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="empty-cell">Ячейка {i + 1}</div>
                        ))}
                    </div>
                )}

                {/* 2. МУЗЫКА: Список песен */}
                {activeTab === 'music' && (
                    <div className="music-player-vibe">
                        <div className="music-list">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num} className="music-item">
                                    <span>Песнопение №{num}</span>
                                    <button>▶</button>
                                </div>
                            ))}
                        </div>
                        <div className="mini-controls">
                            {/* Тут будет сам плеер */}
                            <p>Сейчас играет: Выберите трек</p>
                        </div>
                    </div>
                )}

                {/* 3. ВИДЕО: Сетка с модальным плеером */}
                {activeTab === 'video' && (
                    <div className="video-grid">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="video-thumb" onClick={() => setSelectedVideo(i + 1)}>
                                <span>Видео {i + 1}</span>
                            </div>
                        ))}

                        {/* Наложение видео (Overlay) */}
                        {selectedVideo && (
                            <div className="video-overlay">
                                <button className="close-video" onClick={() => setSelectedVideo(null)}>✖ Закрыть</button>
                                <div className="video-placeholder">
                                    <h2>Воспроизведение видео {selectedVideo}</h2>
                                    <div className="fake-video-player"></div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};