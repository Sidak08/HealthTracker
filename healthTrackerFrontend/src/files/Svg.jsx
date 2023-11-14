import React from 'react';

const FoodSvg = ({ width, height, color }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 126 138" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_7_8)">
                <mask id="mask0_7_8" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="-178" y="-159" width="482" height="471">
                    <path d="M-177.523 -61.4531L199.293 -158.191L303.519 214.492L-73.2973 311.23L-177.523 -61.4531ZM31.8355 -12.8109L18.9302 -6.67774C11.9083 -3.19615 9.05257 0.993459 8.80156 8.97311C8.44188 20.4679 12.7598 38.3477 19.7401 55.9507C22.7769 63.6089 28.1512 73.6694 32.3566 78.2298C35.2776 81.3975 38.9516 82.9432 42.9362 83.6093L11.6027 137.557L37.0561 152.162L64.1125 105.533L90.883 153.714L103.707 146.755L116.868 139.927L81.2753 75.9856L81.8072 75.0551C82.7802 74.7537 83.4736 74.6089 84.537 74.2512C89.0864 72.7194 95.993 70.2346 101.425 65.7104C107.769 60.4258 113.58 51.478 117.376 45.0448C120.016 40.5699 119.544 42.0413 124.161 32.4849L128.938 22.6223L115.73 16.7641L115.876 16.4717L90.4229 1.93964L90.277 2.23211L78.3318 -6.23767L72.2074 2.84438C66.0664 11.9474 67.6772 9.78064 64.7854 14.8497C62.1369 19.492 58.8627 25.6772 56.6779 31.7992L31.8355 -12.8109Z" fill="white" />
                </mask>
                <g mask="url(#mask0_7_8)">
                    <path d="M61.8909 14.7612C56.7233 14.7688 51.4768 15.4125 46.271 16.7489C12.9538 25.3023 -6.64957 59.0978 2.56585 92.0495C11.7813 125.001 46.3945 144.847 79.7116 136.293C113.029 127.74 132.651 93.9627 123.436 61.0109C115.66 33.2079 89.7957 14.7205 61.8909 14.7612ZM62.127 25.4322C85.261 25.357 106.572 40.5753 113.033 63.6806C120.692 91.0648 104.523 118.915 76.8355 126.023C49.1477 133.132 20.6079 116.764 12.9495 89.3801C5.29115 61.9959 21.4785 34.2004 49.1663 27.0922C53.4926 25.9816 57.8428 25.446 62.127 25.4322ZM62.2611 35.0027C58.7838 35.0085 55.2562 35.4343 51.7549 36.3332C29.3466 42.0859 16.1133 64.8149 22.3114 86.9775C28.5094 109.14 51.8386 122.517 74.2469 116.764C96.6552 111.012 109.888 88.246 103.69 66.0834C98.4605 47.3838 81.0383 34.9713 62.2611 35.0027ZM62.4781 45.6002C76.4875 45.5453 89.3719 54.7509 93.2878 68.7529C97.9288 85.3479 88.1498 102.187 71.3708 106.495C54.5918 110.802 37.3916 100.885 32.7506 84.2898C28.1096 67.6948 37.8521 50.9289 54.6311 46.6213C57.2528 45.9483 59.8837 45.6102 62.4781 45.6002Z" fill={color} />
                </g>
                <path className="foodSVGColour" d="M93.5018 15.7317L76.2252 44.9077L23.9775 133.141L32.4907 137.934L84.7384 49.7L102.015 20.5239L93.5018 15.7317Z" fill={color} />
                <path className="foodSVGColour" d="M80.3334 8.14905C80.3334 8.14905 76.8704 13.201 73.1142 19.6421C69.3576 26.0829 65.1868 33.6794 63.7912 40.8577C62.7387 46.2703 63.6174 51.5827 64.442 56.1668C65.2667 60.7508 66.2913 64.3409 66.2913 64.3409L76.2842 59.6568C76.2842 59.6568 75.4367 56.4338 74.7067 52.3757C73.9766 48.3175 73.6287 43.17 73.9855 41.3351C74.6854 37.7346 78.2584 30.2771 81.7193 24.3423C85.1812 18.4081 88.3994 13.758 88.3994 13.758L80.3334 8.14905Z" fill={color} />
                <path className="foodSVGColour" d="M115.354 27.8488L106.329 23.8553C106.329 23.8553 103.797 28.8921 100.25 34.7775C96.7031 40.6627 91.8396 47.4268 88.995 49.792C87.5328 51.008 82.7349 53.2683 78.7232 54.6563C74.7115 56.0443 71.3989 56.8686 71.3989 56.8686L72.1243 67.7097C72.1243 67.7097 75.8755 66.7979 80.409 65.2293C84.9426 63.6608 90.1777 61.7535 94.517 58.1451C100.239 53.3874 104.883 46.073 108.736 39.6797C112.587 33.2859 115.354 27.8488 115.354 27.8488Z" fill={color} />
                <path className="foodSVGColour" d="M60.2568 58.6609L27.8036 0.332764L24.3944 2.02325C20.3428 4.03664 20.1153 4.3718 19.9446 8.64265C19.5461 18.6449 23.1395 34.0579 29.8479 51.1214C32.6053 58.1348 37.4427 66.8622 40.2449 69.8787C44.6354 74.6048 49.1115 76.1415 53.3294 74.37C54.9113 73.7085 56.4661 72.5478 57.5188 71.2418C57.8337 70.8515 58.9829 72.8385 71.7166 95.7886L94.682 137.179L98.2505 135.294L101.819 133.408L60.2568 58.6609Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_7_8">
                    <rect width="126" height="138" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

const HomeSvg = ({ width, height, color }) => {
    return (
        <svg width={width} height={width} viewBox="0 0 120 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_7_26)">
                <path d="M56.1838 1.50795L1.62546 53.4289C1.10917 53.9274 0.699444 54.5226 0.420318 55.1791C0.141192 55.8356 -0.00176938 56.5402 1.65282e-05 57.2518V112.718C0.0148472 114.114 0.585503 115.449 1.58957 116.437C2.59364 117.424 3.95128 117.985 5.37118 118H114.558C115.991 118.004 117.366 117.45 118.385 116.461C119.405 115.471 119.985 114.126 120 112.718V57.2518C120.002 56.5402 119.859 55.8356 119.58 55.1791C119.301 54.5226 118.891 53.9274 118.375 53.4289L63.7457 1.50795C62.7328 0.54081 61.3766 -0.000274658 59.9648 -0.000274658C58.5531 -0.000274658 57.1967 0.54081 56.1838 1.50795ZM60 12.7679L109.117 59.5455V107.366H10.8127V59.6152L60 12.7679Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_7_26">
                    <rect width="120" height="118" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

const NavbarLineSvg = ({ width, height, color }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 421 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_3)">
                <path d="M416.5 17.5L260.705 2C209.082 53.4911 214.2 57.1443 159.5 2L5 13.5" stroke={color} strokeWidth="2" />
            </g>
            <defs>
                <filter id="filter0_d_1_3" x="0.925781" y="0.95813" width="419.673" height="50.0419" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}


const WorkoutSvg = ({ width, height, color }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 119 116" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_7_2)">
                <path fillRule="evenodd" clipRule="evenodd" d="M23.809 51.9619C23.3121 51.4749 22.7186 51.0912 22.0626 50.8327C21.4066 50.5742 20.7011 50.446 19.9866 50.4557C19.272 50.4654 18.5626 50.6126 17.899 50.8889C17.2354 51.1652 16.6308 51.5653 16.1198 52.066L1.61498 66.2051C0.593829 67.2141 0.0132461 68.5654 0.000264106 69.9633C-0.0127179 71.3611 0.54296 72.6918 1.54571 73.6639L7.37832 79.3494L2.61833 83.9894C2.10474 84.4875 1.69432 85.0769 1.41085 85.7238C1.12737 86.3707 0.976346 87.0622 0.966427 87.7587C0.956507 88.4552 1.08803 89.1429 1.35319 89.7824C1.61835 90.4218 2.01199 91.0004 2.51159 91.4847L25.1858 113.587C26.193 114.555 27.5637 115.084 28.9979 115.058C30.4321 115.031 31.813 114.453 32.8385 113.448L37.5985 108.808L43.4311 114.493C44.4284 115.471 45.7934 116.012 47.2274 116C48.6614 115.987 50.0476 115.421 51.0828 114.426L65.5876 100.287C66.1012 99.7886 66.5116 99.1992 66.7951 98.5523C67.0786 97.9054 67.2295 97.2138 67.2394 96.5173C67.2494 95.8208 67.1179 95.1331 66.8528 94.4937C66.5876 93.8543 66.194 93.2757 65.6944 92.7914L23.809 51.9619ZM19.8043 63.2569L54.1437 96.7306L47.4348 103.27L41.6022 97.5849C41.1053 97.0979 40.5118 96.7142 39.8558 96.4557C39.1998 96.1972 38.4944 96.0691 37.7799 96.0787C37.0653 96.0884 36.3558 96.2356 35.6923 96.5119C35.0287 96.7882 34.424 97.1883 33.913 97.6889L29.1905 102.292L14.0622 87.5455L18.7847 82.942C19.8155 81.9424 20.4093 80.5963 20.4361 79.1982C20.463 77.8002 19.9207 76.464 18.9279 75.4822L13.0953 69.7967L19.8043 63.2569Z" fill={color} />
                <path d="M73.5046 29.6726C73.0078 29.1856 72.4142 28.8019 71.7583 28.5434C71.1023 28.2849 70.3968 28.1567 69.6823 28.1664C68.9677 28.176 68.2583 28.3232 67.5947 28.5996C66.9311 28.8759 66.3264 29.276 65.8155 29.7766L30.5466 64.1564C30.033 64.6544 29.6226 65.2439 29.3391 65.8907C29.0557 66.5376 28.9046 67.2291 28.8947 67.9256C28.8848 68.6222 29.0163 69.3099 29.2815 69.9493C29.5466 70.5888 29.9403 71.1673 30.4399 71.6517L45.4953 86.3275C45.9922 86.8145 46.5857 87.1982 47.2417 87.4567C47.8976 87.7152 48.6031 87.8434 49.3177 87.8337C50.0322 87.8241 50.7416 87.6769 51.4052 87.4005C52.0688 87.1242 52.6735 86.7241 53.1844 86.2235L88.4533 51.8437C88.9669 51.3457 89.3773 50.7562 89.6608 50.1094C89.9443 49.4625 90.0953 48.771 90.1052 48.0745C90.1151 47.3779 89.9836 46.6902 89.7184 46.0508C89.4533 45.4113 89.0596 44.8328 88.56 44.3484L73.5046 29.6726ZM69.4999 40.9675L77.0094 48.2877L49.499 75.1046L41.9895 67.7845L69.4999 40.9675Z" fill={color} />
                <path d="M93.8134 2.48463C92.8162 1.50716 91.4511 0.965491 90.0171 0.978145C88.5831 0.9908 87.1969 1.55675 86.1618 2.55216L81.4018 7.19214L75.5692 1.50658C75.0723 1.01957 74.4788 0.635853 73.8228 0.377379C73.1668 0.118906 72.4613 -0.00930132 71.7468 0.000368396C71.0323 0.0100381 70.3229 0.157252 69.6593 0.433583C68.9957 0.709914 68.391 1.10999 67.8801 1.61063L53.4127 15.7133C52.8991 16.2113 52.4888 16.8006 52.2054 17.4475C51.9219 18.0943 51.7707 18.786 51.7608 19.4825C51.7509 20.1791 51.8824 20.8668 52.1475 21.5062C52.4127 22.1457 52.8063 22.7242 53.3059 23.2086L95.1913 64.038C95.6882 64.525 96.2817 64.9087 96.9377 65.1672C97.5937 65.4257 98.2991 65.5538 99.0137 65.5442C99.7282 65.5345 100.438 65.3872 101.101 65.1109C101.765 64.8345 102.37 64.4346 102.88 63.934L117.348 49.8313C117.861 49.3333 118.272 48.7438 118.555 48.097C118.839 47.4501 118.99 46.7585 119 46.062C119.01 45.3655 118.878 44.6778 118.613 44.0384C118.348 43.399 117.954 42.8204 117.455 42.336L111.622 36.6505L116.382 32.0105C117.397 31.0078 117.977 29.667 117.996 28.2778C118.016 26.8886 117.474 25.5628 116.488 24.5873L93.8134 2.48463ZM89.8098 13.7075L104.938 28.4545L100.178 33.0945C99.157 34.1035 98.5764 35.4547 98.5634 36.8526C98.5504 38.2505 99.1061 39.5811 100.109 40.5532L105.941 46.2388L99.195 52.8151L64.8555 19.3414L71.602 12.765L77.4346 18.4506C78.4354 19.4123 79.7955 19.9406 81.2206 19.9213C82.6457 19.902 84.0212 19.3367 85.0498 18.3475L89.8098 13.7075Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_7_2">
                    <rect width="119" height="116" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

const YouSvg = ({ width, height, color }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" id="youSVGColorIcon" d="M11 67C11 80.0925 15.4929 92.1356 23.0211 101.672C51.1818 87.6433 83.0398 87.2772 111.328 101.225C118.646 91.7605 123 79.8888 123 67C123 36.0721 97.9279 11 67 11C36.072 11 11 36.0721 11 67ZM31.1214 109.999C54.3972 99.4623 80.0549 99.2168 103.329 109.618C93.5497 117.963 80.8631 123 67 123C53.3488 123 40.8384 118.115 31.1214 109.999ZM134 67C134 104.003 104.003 134 67 134C29.9969 134 -2.03519e-05 104.003 -2.03519e-05 67C-2.03519e-05 29.9969 29.9969 0 67 0C104.003 0 134 29.9969 134 67ZM84.7242 53.1379C84.7242 61.6507 77.8232 68.5517 69.3104 68.5517C60.7976 68.5517 53.8966 61.6507 53.8966 53.1379C53.8966 44.6251 60.7976 37.7241 69.3104 37.7241C77.8232 37.7241 84.7242 44.6251 84.7242 53.1379ZM94.7242 53.1379C94.7242 67.1736 83.346 78.5517 69.3104 78.5517C55.2747 78.5517 43.8966 67.1736 43.8966 53.1379C43.8966 39.1023 55.2747 27.7241 69.3104 27.7241C83.346 27.7241 94.7242 39.1023 94.7242 53.1379Z" fill={color} />
        </svg>
    );
}

const FlagSvg = ({ width, height, color }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 594 769"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 25.5L16.5 1H47L68 25.5V749.5L47 768.5H16.5L1 749.5V25.5ZM137 68V456.5H593V410.5L432 263L593 117.5V68H137Z"
                fill={color}
            />
            <path
                d="M16.5 1V0.5H16.2247L16.0775 0.732679L16.5 1ZM1 25.5L0.577461 25.2327L0.5 25.3551V25.5H1ZM47 1L47.3796 0.674604L47.23 0.5H47V1ZM68 25.5H68.5V25.315L68.3796 25.1746L68 25.5ZM68 749.5L68.3355 749.871L68.5 749.722V749.5H68ZM47 768.5V769H47.1926L47.3355 768.871L47 768.5ZM16.5 768.5L16.1126 768.816L16.2626 769H16.5V768.5ZM1 749.5H0.5V749.678L0.612567 749.816L1 749.5ZM137 456.5H136.5V457H137V456.5ZM137 68V67.5H136.5V68H137ZM593 456.5V457H593.5V456.5H593ZM593 410.5H593.5V410.28L593.338 410.131L593 410.5ZM432 263L431.665 262.629L431.257 262.997L431.662 263.369L432 263ZM593 117.5L593.335 117.871L593.5 117.722V117.5H593ZM593 68H593.5V67.5H593V68ZM16.0775 0.732679L0.577461 25.2327L1.42254 25.7673L16.9225 1.26732L16.0775 0.732679ZM47 0.5H16.5V1.5H47V0.5ZM68.3796 25.1746L47.3796 0.674604L46.6204 1.3254L67.6204 25.8254L68.3796 25.1746ZM68.5 749.5V25.5H67.5V749.5H68.5ZM47.3355 768.871L68.3355 749.871L67.6645 749.129L46.6645 768.129L47.3355 768.871ZM16.5 769H47V768H16.5V769ZM0.612567 749.816L16.1126 768.816L16.8874 768.184L1.38743 749.184L0.612567 749.816ZM0.5 25.5V749.5H1.5V25.5H0.5ZM137.5 456.5V68H136.5V456.5H137.5ZM593 456H137V457H593V456ZM592.5 410.5V456.5H593.5V410.5H592.5ZM431.662 263.369L592.662 410.869L593.338 410.131L432.338 262.631L431.662 263.369ZM592.665 117.129L431.665 262.629L432.335 263.371L593.335 117.871L592.665 117.129ZM592.5 68V117.5H593.5V68H592.5ZM137 68.5H593V67.5H137V68.5Z"
                fill={color}
            />
        </svg>
    );
}

const StepsSvg = ({ width, height, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 82 65"
        >
            <g fill={color} filter="url(#filter0_d_24_5)">
                <path
                    fillRule="evenodd"
                    d="M23 1h-.118l-.106.053-5 2.5-.087.044-.065.074-3.5 4-.039.044-.028.052-2.5 4.75-2.5 4.75-.204.39.36.252 38.5 27 .13.091h28.442l-.332-.711-3.5-7.5-.032-.068-.05-.055-4.5-5-.269-.3-.35.2-10.306 5.889-2.446-.815v-2.352l9.25-5.355.564-.326-.46-.46-3.5-3.5-.29-.29-.341.227-8.808 5.872L48 29.623v-2.351l8.272-5.352.228-.148v-6.04l-.223-.148-9-6-.126-.084H43.77l-.15.175L40.77 13h-3.197l-2.352-.706-2.33-1.63L31.5 7.881V2.293l-.146-.147-1-1L30.207 1H23zm-4.689 3.403L23.118 2h6.675l.707.707V8.118l.053.106 1.5 3 .056.113.104.073 2.5 1.75.066.046.077.023 2.5.75.07.021h3.804l.15-.175 2.85-3.325h2.619l8.651 5.768v4.96l-8.272 5.352-.228.148v3.649l.363.104 3.5 1 .222.063.192-.128 8.66-5.773 2.75 2.75-8.938 5.174-.249.145V37.36l.342.114 3 1 .212.071.194-.11 10.15-5.8 4.18 4.644L74.716 44H48.158l-38.01-26.657 2.295-4.36 2.472-4.698 3.396-3.882zM5.5 22H5v6.76l.214.15 38 26.5.129.09H77V49H46.656L7.785 22.089 7.656 22H5.5zm.5 6.24V23h1.344l38.871 26.911.129.089H76v4.5H43.657L6 28.24z"
                    clipRule="evenodd"
                ></path>
                <path d="M22.882 1V0h-.236l-.211.106.447.894zm-.106.053l.448.894-.448-.894zm-5 2.5l-.447-.895.447.895zm-.087.044l-.448-.895-.176.088-.13.148.754.659zm-.065.074l-.753-.659.753.659zm-3.5 4l.752.658-.752-.658zm-.039.044l-.753-.658-.077.088-.055.104.885.466zm-.028.052l.886.466-.886-.466zm-2.5 4.75l-.884-.466.884.466zm-2.5 4.75l.885.466-.884-.466zm-.204.39l-.885-.466-.41.779.72.505.575-.818zm.36.252l-.574.82.574-.82zm38.5 27l.574-.818-.574.818zm.13.091l-.575.819.258.181h.316v-1zm28.442 0v1h1.57l-.664-1.423-.906.423zm-.332-.711l.906-.423-.906.423zm-3.5-7.5l.906-.423-.906.423zm-.032-.068l.907-.423-.063-.135-.1-.111-.744.669zm-.05-.055l-.743.669.744-.67zm-4.5-5l-.743.668.744-.669zm-.269-.3l.743-.67-.54-.598-.7.4.497.868zm-.35.2l-.496-.868.496.868zm-10.306 5.889l-.316.949.424.141.388-.222-.496-.868zM54.5 36.64h-1v.72l.684.228.316-.948zm0-2.352l-.501-.865-.499.289v.576h1zm9.25-5.355l-.5-.866.5.866zm.564-.326l.5.865 1.127-.652-.92-.92-.707.707zm-4.25-4.25l.707-.707-.58-.58-.682.455.555.832zm-.341.227l-.555-.832.555.832zm-8.808 5.872l-.275.961.445.127.385-.256-.555-.832zM48 29.623h-1v.754l.725.207.275-.961zm0-2.351l-.543-.84-.457.296v.544h1zm8.272-5.352l.543.84-.543-.84zm.228-.148l.543.84.457-.296v-.544h-1zm0-6.04h1v-.535l-.445-.297-.555.832zm-.223-.148l.555-.832-.555.832zm-9-6l.555-.832-.555.832zm-.126-.084l.555-.832-.252-.168h-.303v1zm-3.381 0v-1h-.46l-.3.35.76.65zm-.15.175l.76.65-.76-.65zM40.77 13v1h.46l.3-.35-.76-.65zm-3.197 0l-.287.958.14.042h.147v-1zm-2.352-.706l-.574.82.132.092.154.046.288-.958zm-2.33-1.63l-.895.446.113.227.208.145.574-.819zM31.5 7.881h-1v.236l.106.211.894-.447zm0-5.59h1V1.88l-.293-.293-.707.707zm-.146-.146l.707-.707-.707.707zm-1-1l-.708.708.708-.708zM30.207 1l.707-.707L30.621 0h-.414v1zm-7.089 1V1h-.236l-.211.106.447.894zm-4.806 2.403l-.448-.894-.175.088-.13.148.752.658zM29.791 2l.708-.707L30.207 1h-.414v1zm.708.707h1v-.414L31.207 2l-.707.707zm0 5.411h-1v.236l.106.211.894-.447zm.053.106l-.895.447.895-.447zm1.5 3l-.895.447.895-.447zm.056.113l-.894.447.113.227.208.145.573-.82zm.104.073l-.573.819.573-.82zm2.5 1.75l.574-.82-.574.82zm.066.046l-.573.819.132.092.154.047.287-.958zm.077.023l-.287.958.287-.958zm2.5.75l-.287.958.287-.958zm.07.021l-.287.958.14.042h.148v-1zm3.804 0v1h.46l.3-.35-.76-.65zm.15-.175l.759.651-.76-.65zm2.85-3.325v-1h-.46l-.3.35.76.65zm2.619 0l.554-.832-.252-.168h-.302v1zm8.651 5.768h1v-.536l-.445-.296-.555.832zm0 4.96l.543.84.457-.296v-.544h-1zm-8.272 5.352l-.543-.84.543.84zm-.228.148l-.543-.84-.457.296v.544h1zm0 3.65h-1v.753l.725.208.275-.962zm.363.103l.274-.962-.274.962zm3.5 1l-.275.961.275-.961zm.222.063l-.275.962.445.127.385-.257-.555-.832zm.192-.128l.555.832-.555-.832zm8.66-5.773l.706-.707-.58-.58-.681.455.554.832zm2.75 2.75l.5.866 1.127-.652-.92-.92-.708.706zm-8.938 5.174l.502.866-.502-.866zm-.249.145l-.501-.866-.499.29v.576h1zm0 3.648h-1v.721l.684.228.316-.949zm.342.114l-.316.949.316-.949zm3 1l-.316.949.316-.949zm.212.071l-.316.949.424.141.388-.222-.496-.868zm.194-.11l-.496-.87.496.87zm10.15-5.8l.743-.67-.539-.6-.7.4.496.87zm4.18 4.644l.907-.423-.063-.135-.1-.11-.743.668zM74.716 44v1h1.57l-.664-1.423-.906.423zm-26.557 0l-.574.819.258.181h.316v-1zm-38.01-26.657l-.885-.465-.41.779.72.505.575-.819zm2.295-4.36l-.886-.466.886.466zm2.472-4.698l-.752-.659-.078.089-.055.104.885.466zM5 22v-1H4v1h1zm0 6.76H4v.523l.428.298.572-.82zm.214.15l.572-.82-.572.82zm38 26.5l-.572.82.572-.82zm.129.09l-.572.82.258.18h.314v-1zM77 55.5v1h1v-1h-1zm0-6.5h1v-1h-1v1zm-30.344 0l-.569.822.257.178h.312v-1zM7.785 22.089l.569-.822-.57.822zM7.656 22l.57-.822L7.968 21h-.313v1zM6 23v-1H5v1h1zm0 5.24H5v.52l.428.3.572-.82zM7.344 23l.569-.822L7.656 22h-.312v1zm38.871 26.911l.57-.822-.57.822zm.129.089l-.57.822.257.178h.313v-1zM76 50h1v-1h-1v1zm0 4.5v1h1v-1h-1zm-32.343 0l-.572.82.258.18h.314v-1zM22.882 2H23V0h-.118v2zm.342-.053l.105-.053-.894-1.788-.106.052.895 1.79zm-5 2.5l5-2.5-.895-1.789-5 2.5.895 1.79zm-.088.044l.088-.044-.895-1.789-.088.044.895 1.79zm.24-.162l.065-.074-1.505-1.317-.065.074 1.505 1.317zm-3.5 4l3.5-4-1.505-1.317-3.5 4 1.505 1.317zm-.038.045l.038-.045-1.505-1.317-.039.045 1.505 1.317zm.105-.141l.027-.052-1.77-.932-.027.052 1.77.932zm-2.5 4.75l2.5-4.75-1.77-.932-2.5 4.75 1.77.932zm-2.5 4.75l2.5-4.75-1.77-.932-2.5 4.75 1.77.932zm-.206.39l.205-.39-1.77-.932-.204.39 1.77.931zm.05-1.032l-.36-.253-1.149 1.637.36.253 1.15-1.637zm38.5 27l-38.5-27-1.148 1.637 38.5 27 1.148-1.637zm.13.09l-.13-.09-1.148 1.637.129.09 1.148-1.637zM48 44h-.158v2H48v-2zm27.5 0H48v2h27.5v-2zm.785 0H75.5v2h.785v-2zm-1.238.711l.332.712 1.812-.846-.332-.711-1.812.845zm-3.5-7.5l3.5 7.5 1.812-.845-3.5-7.5-1.812.845zm-.032-.067l.032.068 1.812-.846-.031-.068-1.813.846zm.113.19l.05.056 1.487-1.338-.05-.056-1.487 1.338zm-4.5-5l4.5 5 1.487-1.337-4.5-5-1.487 1.337zm-.27-.3l.27.3 1.487-1.337-.27-.3-1.486 1.338zm.89.4l.35-.2-.992-1.736-.35.2.992 1.736zm-10.306 5.89l10.306-5.89-.992-1.736-10.306 5.889.992 1.736zm-3.258-.736l2.446.816.632-1.898-2.446-.815-.632 1.897zm-.684-3.3v2.352h2v-2.352h-2zm9.75-6.22l-9.251 5.355 1.002 1.73 9.25-5.355-1.002-1.73zm.563-.327l-.564.326 1.003 1.731.563-.326-1.002-1.73zm-.667 1.113l.46.46 1.415-1.415-.46-.46-1.415 1.415zm-3.5-3.5l3.5 3.5 1.415-1.415-3.5-3.5-1.415 1.415zm-.29-.29l.29.29 1.415-1.415-.29-.29-1.414 1.415zm.921.352l.341-.227-1.109-1.664-.341.227 1.11 1.664zm-8.807 5.872l8.807-5.872-1.11-1.664-8.807 5.872 1.11 1.664zm-3.745-.704l2.915.833.55-1.923-2.915-.833-.55 1.923zM47 27.272v2.35h2v-2.35h-2zm8.728-6.192l-8.271 5.352 1.086 1.68 8.272-5.353-1.087-1.679zm.229-.148l-.229.148 1.087 1.68.228-.148-1.086-1.68zm-.457.568v.272h2V21.5h-2zm0-5.5v5.5h2V16h-2zm0-.268V16h2v-.268h-2zm.223.684l.222.148 1.11-1.664-.223-.148-1.11 1.664zm-9-6l9 6 1.11-1.664-9-6-1.11 1.664zm-.126-.084l.126.084 1.109-1.664-.126-.084-1.11 1.664zM47 10.5h.151v-2H47v2zm-3 0h3v-2h-3v2zm-.23 0H44v-2h-.23v2zm.61-.175l.15-.174-1.52-1.302-.149.175 1.519 1.301zm-2.85 3.326l2.85-3.326-1.519-1.301-2.85 3.325 1.518 1.302zM37.572 14h3.197v-2h-3.197v2zm-2.64-.748l2.353.706.575-1.916-2.353-.706-.575 1.916zm-2.616-1.77l2.33 1.631 1.147-1.638-2.33-1.631-1.147 1.638zM30.606 8.33l1.39 2.781 1.789-.894-1.39-2.781-1.79.894zM30.5 4v3.882h2V4h-2zm0-1.5V4h2V2.5h-2zm0-.207V2.5h2v-.207h-2zm.146.56l.147.147 1.414-1.414-.146-.147-1.415 1.415zm-1-1l1 1 1.415-1.414-1-1-1.415 1.415zm-.146-.146l.146.147L31.061.439l-.147-.146L29.5 1.707zM30 2h.207V0H30v2zm-7 0h7V0h-7v2zm-.33-.894l-4.806 2.403.895 1.789 4.806-2.404-.894-1.788zM29.794 1h-6.675v2h6.675V1zm1.414 1l-.707-.707-1.414 1.414.707.707L31.207 2zm.293 2V2.707h-2V4h2zm0 4V4h-2v4h2zm0 .118V8h-2v.118h2zm-.053-.342l-.053-.105-1.788.894.052.106 1.79-.895zm1.5 3l-1.5-3-1.789.895 1.5 3 1.79-.895zm.057.114l-.057-.114-1.789.895.057.113 1.789-.894zm-.217-.3l-.104-.072-1.147 1.638.104.073 1.147-1.639zm2.5 1.75l-2.5-1.75-1.147 1.639 2.5 1.75 1.147-1.639zm.066.047l-.066-.047-1.147 1.639.066.046 1.147-1.638zm-.21-.116l-.076-.023-.575 1.916.077.023.575-1.916zm2.5.75l-2.5-.75-.574 1.916 2.5.75.575-1.916zm.071.021l-.07-.02-.575 1.915.07.02.575-1.915zM37.5 13h-.073v2h.073v-2zm3.5 0h-3.5v2H41v-2zm.23 0H41v2h.23v-2zm-.61.175l-.15.174 1.52 1.302.149-.175-1.519-1.301zm2.85-3.326l-2.85 3.326 1.519 1.301 2.85-3.325-1.518-1.302zM46.85 9.5H44.23v2h2.619v-2zm9.206 5.935l-8.652-5.767-1.11 1.664 8.652 5.768 1.11-1.665zm.445 5.793v-4.96h-2v4.96h2zm-8.728 6.192l8.271-5.352-1.086-1.68-8.272 5.353 1.087 1.679zm-.229.148l.229-.148-1.087-1.68-.228.148 1.086 1.68zM48 27v-.272h-2V27h2zm0 3v-3h-2v3h2zm0 .377V30h-2v.377h2zm-.363-.858l-.362-.103-.55 1.923.363.103.55-1.923zm3.5 1l-3.5-1-.55 1.923 3.5 1 .55-1.923zm.223.064l-.223-.064-.55 1.923.223.064.55-1.923zm-.637.001l-.193.128 1.11 1.664.192-.128-1.11-1.664zm8.659-5.773l-8.66 5.773 1.11 1.664 8.659-5.773-1.11-1.664zm4.011 2.875l-2.75-2.75-1.414 1.415 2.75 2.75 1.414-1.415zm-9.142 6.747l8.936-5.174-1.002-1.731-8.937 5.174 1.003 1.73zm-.25.144l.25-.144-1.003-1.731-.249.144 1.002 1.731zM54.5 34v-.288h-2V34h2zm0 3v-3h-2v3h2zm0 .36V37h-2v.36h2zm-.342-.834l-.342-.114-.632 1.897.342.114.632-1.897zm3 1l-3-1-.632 1.897 3 1 .632-1.897zm.212.07l-.212-.07-.632 1.897.212.07.632-1.897zm-.618-.03l-.194.11.992 1.737.194-.11-.992-1.737zm10.15-5.8l-10.15 5.8.992 1.736 10.15-5.8-.992-1.736zm5.42 4.844l-4.18-4.645-1.487 1.338 4.18 4.645 1.487-1.338zm3.3 6.967l-3.137-6.72-1.813.845 3.137 6.72 1.812-.845zM48.157 45h26.557v-2H48.158v2zM9.573 18.162l38.01 26.657 1.149-1.638-38.01-26.656-1.149 1.637zm1.984-5.645l-2.294 4.36 1.77.932 2.294-4.36-1.77-.932zM14.03 7.82l-2.473 4.698 1.77.932L15.8 8.75l-1.77-.932zm3.529-4.074l-3.397 3.881 1.506 1.317 3.396-3.881-1.505-1.317zM5 23h.5v-2H5v2zm1-.5V22H4v.5h2zm0 6v-6H4v6h2zm0 .26v-.26H4v.26h2zm-.214-.67l-.214-.15-1.144 1.641.214.15 1.144-1.641zm38 26.5l-38-26.5-1.144 1.64 38 26.5 1.144-1.64zm.129.09l-.129-.09-1.144 1.64.129.09 1.144-1.64zm-.415-.18h-.157v2h.157v-2zm33 0h-33v2h33v-2zm.5 0h-.5v2h.5v-2zm-1 .5v.5h2V55h-2zm0-5.5V55h2v-5.5h-2zm0-.5v.5h2V49h-2zm.5 1h.5v-2h-.5v2zm-29.844 0H76.5v-2H46.656v2zM7.216 22.911l38.871 26.911 1.138-1.644L8.354 21.267 7.215 22.91zm-.129-.089l.128.09 1.139-1.645-.129-.09-1.138 1.645zM7.5 23h.156v-2H7.5v2zm-2 0h2v-2h-2v2zM5 23v5.24h2V23H5zm2.344-1H6v2h1.344v-2zm39.44 27.089L7.914 22.178l-1.138 1.644 38.871 26.911 1.139-1.644zm.129.089l-.128-.09-1.139 1.645.129.09 1.138-1.645zM46.5 49h-.156v2h.156v-2zM76 49H46.5v2H76v-2zm1 5.5V50h-2v4.5h2zm-33.343 1H76v-2H43.657v2zM5.428 29.06l37.657 26.26 1.144-1.64L6.572 27.419l-1.144 1.64z"></path>
            </g>
            <defs>
                <filter
                    id="filter0_d_24_5"
                    width="82"
                    height="64.5"
                    x="0"
                    y="0"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_24_5"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_24_5"
                        result="shape"
                    ></feBlend>
                </filter>
            </defs>
        </svg>
    );
}

const ClockSvg = ({ width, height, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 60 62"
        >
            <path
                fill={color}
                fillRule="evenodd"
                d="M56 31c0 15.036-11.763 27-26 27S4 46.036 4 31 15.763 4 30 4s26 11.964 26 27zm4 0c0 17.12-13.431 31-30 31C13.431 62 0 48.12 0 31 0 13.88 13.431 0 30 0c16.569 0 30 13.88 30 31zM26 19v16.56l.877.595 14 9.5 2.246-3.31L30 33.44V19h-4z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

const FireSvg = ({ width, height, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 57 69"
        >
            <path
                stroke={color}
                strokeWidth="3"
                d="M44 11.5L34 5l-7-3h-6v16.5l-2.5 7 6 8L34 21l4.5 4.5L44 32l2 3.5V44l-2 5-2.5 3.5-3-1V49l2.5-5v-8.5L34 29l-8.5 12h-3l-13-18.5L5 29l-3 9 1 13.5 7.5 9L21 67h13l14-6.5L55 49V35.5L52 23l-8-11.5z"
            ></path>
        </svg>
    );
}

function CalenderSvg({ width, height, color }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            version="1.1"
            viewBox="0 0 29.237 29.237"
            xmlSpace="preserve"
        >
            <g fill={color}>
                <path d="M7.685 24.819h.595v-2.131h3.688v2.131h.596v-2.131h3.862v2.131h.597v-2.131h4.109v2.131h.595v-2.131h3.417v-.594h-3.417v-3.861h3.417v-.596h-3.417v-3.519h3.417v-.594h-3.417v-2.377h-.595v2.377h-4.109v-2.377h-.597v2.377h-3.862v-2.377h-.596v2.377H8.279v-2.377h-.594v2.377H3.747v.594h3.938v3.519H3.747v.596h3.938v3.861H3.747v.594h3.938v2.131zm4.878-2.725v-3.861h3.862v3.861h-3.862zm8.569 0h-4.109v-3.861h4.109v3.861zm0-7.976v3.519h-4.109v-3.519h4.109zm-4.706 0v3.519h-3.862v-3.519h3.862zm-8.147 0h3.688v3.519H8.279v-3.519zm0 4.115h3.688v3.861H8.279v-3.861z"></path>
                <path d="M29.207 2.504l-4.129.004-.603.002v2.448a1.19 1.19 0 01-1.188 1.187h-1.388a1.189 1.189 0 01-1.188-1.187V2.514l-1.583.002v2.442c0 .653-.535 1.187-1.191 1.187h-1.388a1.19 1.19 0 01-1.188-1.187V2.517l-1.682.004v2.438a1.19 1.19 0 01-1.189 1.187h-1.389a1.19 1.19 0 01-1.188-1.187V2.525H8.181v2.434a1.19 1.19 0 01-1.188 1.187H5.605a1.19 1.19 0 01-1.189-1.187V2.53L0 2.534v26.153h27.15l2.087-.006-.03-26.177zM27.15 26.606H2.09V9.897h25.06v16.709z"></path>
                <path d="M5.605 5.303h1.388a.297.297 0 00.296-.297V.846a.296.296 0 00-.296-.297H5.605a.297.297 0 00-.298.297v4.16c0 .164.133.297.298.297zM11.101 5.303h1.389a.297.297 0 00.297-.297V.846a.298.298 0 00-.298-.297H11.1a.296.296 0 00-.296.297v4.16a.298.298 0 00.297.297zM16.549 5.303h1.388a.297.297 0 00.299-.297V.846a.297.297 0 00-.299-.297h-1.388a.296.296 0 00-.297.297v4.16c0 .164.133.297.297.297zM21.899 5.303h1.388a.296.296 0 00.296-.297V.846a.296.296 0 00-.296-.297h-1.388a.296.296 0 00-.297.297v4.16a.298.298 0 00.297.297z"></path>
            </g>
        </svg>
    );
}

function SearchBarSvg({ width, height, color }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 50 56"
        >
            <path
                fill={color}
                fillRule="evenodd"
                d="M31.456 38.864c-3.254 2.481-7.232 3.94-11.526 3.94C8.923 42.804 0 33.222 0 21.402S8.923 0 19.93 0s19.93 9.582 19.93 21.402c0 5.054-1.632 9.699-4.36 13.36l2.675 2.522.097.091.09.098 11.626 12.528-5.864 5.442-11.535-12.43-2.67-2.519 1.537-1.63zm2.57-17.462c0 7.522-6.093 13.62-13.61 13.62-7.517 0-13.61-6.098-13.61-13.62 0-7.522 6.093-13.62 13.61-13.62 7.517 0 13.61 6.098 13.61 13.62z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

function BarcodeSvg({ width, height, color }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 71 61"
        >
            <path
                fill={color}
                fillRule="evenodd"
                d="M5.384 4.047v11.151h-4V4.048a4 4 0 014-4h9.72v4h-9.72zm9.65 11.151v30.348h6V15.198h-6zm38.116 0v30.348h4V15.198h-4zM23.372 45.546V15.198h3v30.348h-3zm13.674-30.348v30.348h3V15.198h-3zm-9.338 30.348V15.198h8v30.348h-8zm16.628-30.348v30.348h6V15.198h-6zm26.488-11.15a4 4 0 00-4-4H56.126v4h10.698v10.138h4V4.047zM4.407 59.684a4 4 0 01-4-4V45.546h4v10.14h10.697v4H4.408zm62.417-14.14v11.151h-9.72v4h9.72a4 4 0 004-4v-11.15h-4z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

function CreateMealSvg({ width, height, color }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 106 64"
        >
            <path
                stroke={color}
                strokeWidth="3"
                d="M45 29.5l1.25-13.75M45 29.5l-3.5 8h-5l-6.5 2-1 7m16-17l10.631-2.9a1 1 0 01.71.07L70 33.5h7.5M46.25 15.75l1.052-11.569A2 2 0 0045.31 2H4.3a2 2 0 00-1.98 2.278L3.932 15.75m42.318 0H3.932m0 0L10.5 62.5H29m0 0h55.78a10 10 0 005.835-1.88l12.136-8.722A3 3 0 00104 49.462V47.5a1 1 0 00-1-1h-8.5M29 62.5L18.2 48.1a1 1 0 01.8-1.6h10m0 0h65.5m-17-13v-7.87c0-.92 1.136-1.351 1.747-.664l5.856 6.587a1 1 0 00.979.308l9.331-2.221a1 1 0 01.984.314l2.393 2.734a1 1 0 01-.153 1.459L91.5 39.5m-14-6l14 6m0 0l3 7"
            ></path>
        </svg>
    );
}
function CreateFoodSvg({ width, height, color }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 116 104"
        >
            <path
                fill={color}
                fillRule="evenodd"
                d="M53.335 3.228a.5.5 0 00-.828-.016L8.575 65.567C26.311 77.942 39.811 84.02 52.76 84.18c6.931.086 13.794-1.524 21.155-4.894 1.813-8.617 9.165-15.261 18.263-16.231L53.335 3.228zm-.613 83.951c6.92.085 13.7-1.407 20.773-4.428a20.018 20.018 0 002.11 9.67c-8.288 3.602-16.123 5.233-23.934 5.011-14.613-.415-29.45-7.323-47.315-20.667-1.523-1.138-1.811-3.326-.622-4.855l3.057-3.93c17.895 12.495 32.038 19.027 45.931 19.199zm-1.136 13.252c8.445.24 16.825-1.562 25.57-5.414 3.785 5.383 10.134 8.914 17.328 8.914 11.598 0 21-9.178 21-20.5 0-10.924-8.754-19.853-19.787-20.466L55.85 1.595c-1.348-2.079-4.37-2.136-5.796-.11L5.278 65.037l-3.912 5.03c-2.198 2.827-1.703 6.936 1.195 9.1 18.047 13.48 33.493 20.822 49.025 21.263zm50.898-19.5h-2.213a154.487 154.487 0 01-8.787 6.201v3.8a2 2 0 002 2h1a2 2 0 002-2v-6h6a2 2 0 000-4zm-13.12 4c2.324-1.5 4.695-3.139 7.12-4.919v-5.08a2 2 0 00-2-2h-1a2 2 0 00-2 2v6h-5a2 2 0 100 4h2.88zM62.893 58.703a4.5 4.5 0 016.252-6.474l4.316 4.168a4.5 4.5 0 01-6.252 6.474l-2.158-2.084-2.158-2.084zm2.766-3.584a.5.5 0 00.013.707l2.158 2.084 2.158 2.084a.5.5 0 00.694-.72l-4.316-4.167a.5.5 0 00-.707.012zM42.572 52.34a4.5 4.5 0 00-6.363-.11l-2.158 2.083-2.158 2.084a4.5 4.5 0 106.252 6.474l4.316-4.168a4.5 4.5 0 00.11-6.363zm-3.585 2.767a.5.5 0 11.695.72l-4.316 4.167a.5.5 0 01-.695-.72l2.158-2.083 2.158-2.084zm12.997-1.176a4.5 4.5 0 00-4.5 4.5v6a4.5 4.5 0 109 0v-6a4.5 4.5 0 00-4.5-4.5zm-.5 4.5a.5.5 0 111 0v6a.5.5 0 01-1 0v-6z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
export { FoodSvg, HomeSvg, NavbarLineSvg, WorkoutSvg, YouSvg, FlagSvg, StepsSvg, ClockSvg, FireSvg, CalenderSvg, SearchBarSvg, BarcodeSvg, CreateMealSvg, CreateFoodSvg }
