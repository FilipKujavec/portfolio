import React from 'react'

export default function Background(props) {
    const width = 424;
    const height = width * (711/424);

    return (
        <div className={`background-wrapper ${props.class}`} >
            <svg className='background-item svg-left' width={width} height={height} viewBox="0 0 424 711" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                        <path d="M382 360.5L0.25 703.879V17.1209L382 360.5Z" fill="#C4C4C4"/>
                    </g>
                    <defs>
                        <filter id="filter0_d" x="0.25" y="0.120972" width="423.75" height="710.758" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dx="30" dy="-5"/>
                            <feGaussianBlur stdDeviation="6"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                    </defs>
            </svg>
            <svg className='background-item svg-right' width={width} height={height} viewBox="0 0 424 711" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                    <path d="M42 360.5L423.75 17.121L423.75 703.879L42 360.5Z" fill="#C4C4C4"/>
                </g>
                <defs>
                    <filter id="filter0_d" x="0" y="0.120972" width="423.75" height="710.758" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dx="-30" dy="-5"/>
                        <feGaussianBlur stdDeviation="6"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                </defs>
            </svg>

        </div>
    );
}
