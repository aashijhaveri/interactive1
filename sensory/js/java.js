

<svg class="blur" width="100%">
            <image filter="url(#{{filter}})" xlink:href="{{image}}" width="100%" height="100%"></image>

            <filter id="{{filter}}">
                <feGaussianBlur stdDeviation="10" color-interpolation-filters="sRGB"/>
            </filter>

            <mask class="mask" id="{{mask}}">
                <circle cx="-50%" cy="-50%" r="150" fill="white" filter="url(#{{filter}})" />
            </mask>

            <image xlink:href="{{image}}" width="100%" height="100%" mask="url(#{{mask}})"></image>
        </svg>