'use client';
import React, { useState, useRef } from 'react';

const getThumbnail = (url) => {
    if (/tiktok\.com/.test(url)) {
        return '/img/icons/tiktok-placeholder.png';
    }
    if (/facebook\.com/.test(url)) {
        return '/img/icons/facebook-logo-icon.png';
    }
    return url;
    // return '/img/icons/video-placeholder.png';
};

const getEmbed = (url) => {
    if (/tiktok\.com/.test(url)) {
        return (
            <iframe
                src={`https://www.tiktok.com/embed/v2/${url.split('/').filter(Boolean).pop()}`}
                width="100%"
                height="400"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="TikTok Video"
                style={{ border: 'none' }}
            />
        );
    }
    if (/facebook\.com/.test(url)) {
        return (
            <iframe
                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}`}
                width="100%"
                height="400"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Facebook Video"
                style={{ border: 'none' }}
            />
        );
    }

    return (
        <video width="100%" height="300" controls>
            <source src={url} />
            Your browser does not support the video tag.
        </video>
    );
};

const FeaturedMediaCard = ({ url, thumbnail = "", videoUrl="", caption = "" }) => {
    const [loaded, setLoaded] = useState(true);
    const mediaRef = useRef(null);

    const handleLoad = () => setLoaded(true);

    const isIframe = /tiktok\.com|facebook\.com/.test(url);

    return (
        <div className="featured-media-card">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className={`media-area ${isIframe ? 'frame' : ''}`}>
                    {(!!thumbnail) ? (
                        <img
                            src={getThumbnail(thumbnail)}
                            alt={caption}
                        />
                    )
                        : (
                            <div style={{ display: loaded ? 'block' : 'none' }}>
                                {isIframe ? (
                                    <iframe
                                        ref={mediaRef}
                                        src={/tiktok\.com/.test(url)
                                            ? `https://www.tiktok.com/embed/v2/${url.split('/').filter(Boolean).pop()}`
                                            : `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}`}
                                        width="100%"
                                        height="100%"
                                        allow="encrypted-media"
                                        autoFocus
                                        title={caption.split(' ').slice(0,15)}
                                        onLoad={handleLoad}
                                        className="border-0"
                                    />
                                ) : (
                                    <video
                                        ref={mediaRef}
                                        width="100%"
                                        height="100%"
                                        autoPlay
                                        controls
                                        onLoadedData={handleLoad}
                                    >
                                        <source src={videoUrl} />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                        )}
                </div>
            </a>
            {loaded && !isIframe &&
                <div className="caption-area"
                    dangerouslySetInnerHTML={{ __html: caption }}
                ></div>
            }
        </div>
    );
};

export default FeaturedMediaCard; 