// app/obrigado/page.jsx
'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MetaPixel from "@/components/MetaPixel";

export default function Obrigado() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/");
        }, 4500);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black-900 flex items-center justify-center px-4">
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center flex-col flex items-center">
                {/* <img className="w-20" src="./images/selectlogo.png" alt="" /> */}
                <div className="flex justify-center mb-6">
                    <div className="bg-yellow-200 rounded-full p-4">
                        <svg
                            className="w-12 h-12 text-yellow-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>

                <h1 className="text-3xl font-extrabold text-yellow-300 mb-3">Mensagem recebida!</h1>
                <div className="text-gray-400 text-lg">
                    <div className="flex flex-col justify-center items-center">
                        Em breve nossos corretores vão te atender. <br />
                        <a target="_blank" href="instagram://user?username=selectimobiliariaoficial"
                            onclick="setTimeout(() => { window.location = 'https://www.instagram.com/selectimobiliariaoficial'; }, 500);">
                            <svg className="mt-12 mb-24 hover:scale-105 duration-300 cursor-pointer" height="50" width="300" fill="none" viewBox="0 0 207 36" xmlns="http://www.w3.org/2000/svg">
                                <rect height="36" width="207" fill="#FFDF20" rx="15" />
                                <path d="M55.5 23.2273C58.6631 23.2273 61.2273 20.6631 61.2273 17.5C61.2273 14.3369 58.6631 11.7727 55.5 11.7727C52.3369 11.7727 49.7727 14.3369 49.7727 17.5C49.7727 20.6631 52.3369 23.2273 55.5 23.2273ZM55.5 21.3182C57.6087 21.3182 59.3182 19.6087 59.3182 17.5C59.3182 15.3913 57.6087 13.6818 55.5 13.6818C53.3913 13.6818 51.6818 15.3913 51.6818 17.5C51.6818 19.6087 53.3913 21.3182 55.5 21.3182Z" fill="#0F0F0F" fillRule="evenodd" />
                                <path d="M61.2273 10.8181C60.7001 10.8181 60.2727 11.2455 60.2727 11.7727C60.2727 12.2998 60.7001 12.7272 61.2273 12.7272C61.7544 12.7272 62.1818 12.2998 62.1818 11.7727C62.1818 11.2455 61.7544 10.8181 61.2273 10.8181Z" fill="#0F0F0F" />
                                <path d="M45.6242 10.1271C45 11.3523 45 12.9561 45 16.1636V18.8364C45 22.0439 45 23.6477 45.6242 24.8728C46.1733 25.9505 47.0495 26.8267 48.1271 27.3757C49.3523 28 50.9561 28 54.1636 28H56.8364C60.0439 28 61.6477 28 62.8728 27.3757C63.9505 26.8267 64.8267 25.9505 65.3757 24.8728C66 23.6477 66 22.0439 66 18.8364V16.1636C66 12.9561 66 11.3523 65.3757 10.1271C64.8267 9.04949 63.9505 8.17333 62.8728 7.62423C61.6477 7 60.0439 7 56.8364 7H54.1636C50.9561 7 49.3523 7 48.1271 7.62423C47.0495 8.17333 46.1733 9.04949 45.6242 10.1271ZM56.8364 8.90909H54.1636C52.5283 8.90909 51.4167 8.91058 50.5574 8.98078C49.7205 9.04916 49.2924 9.17311 48.9939 9.32524C48.2754 9.69131 47.6913 10.2754 47.3252 10.9939C47.1731 11.2924 47.0492 11.7205 46.9808 12.5574C46.9106 13.4167 46.9091 14.5283 46.9091 16.1636V18.8364C46.9091 20.4717 46.9106 21.5833 46.9808 22.4425C47.0492 23.2796 47.1731 23.7076 47.3252 24.0062C47.6913 24.7246 48.2754 25.3087 48.9939 25.6747C49.2924 25.8269 49.7205 25.9509 50.5574 26.0192C51.4167 26.0894 52.5283 26.0909 54.1636 26.0909H56.8364C58.4717 26.0909 59.5833 26.0894 60.4425 26.0192C61.2796 25.9509 61.7076 25.8269 62.0062 25.6747C62.7246 25.3087 63.3087 24.7246 63.6747 24.0062C63.8269 23.7076 63.9509 23.2796 64.0192 22.4425C64.0894 21.5833 64.0909 20.4717 64.0909 18.8364V16.1636C64.0909 14.5283 64.0894 13.4167 64.0192 12.5574C63.9509 11.7205 63.8269 11.2924 63.6747 10.9939C63.3087 10.2754 62.7246 9.69131 62.0062 9.32524C61.7076 9.17311 61.2796 9.04916 60.4425 8.98078C59.5833 8.91058 58.4717 8.90909 56.8364 8.90909Z" fill="#0F0F0F" fillRule="evenodd" />
                                <path d="M81.566 17.091H78.9623C78.9438 16.8755 78.8946 16.6801 78.8145 16.5047C78.7376 16.3293 78.6299 16.1785 78.4914 16.0523C78.356 15.923 78.1913 15.8245 77.9974 15.7568C77.8035 15.686 77.5835 15.6506 77.3373 15.6506C76.9064 15.6506 76.5417 15.7553 76.2432 15.9646C75.9477 16.1738 75.723 16.4739 75.5692 16.8648C75.4184 17.2556 75.343 17.725 75.343 18.2728C75.343 18.8514 75.4199 19.3361 75.5738 19.727C75.7307 20.1148 75.9569 20.4071 76.2524 20.6041C76.5479 20.798 76.9033 20.895 77.3188 20.895C77.5558 20.895 77.7681 20.8657 77.9559 20.8072C78.1436 20.7457 78.3067 20.658 78.4452 20.5441C78.5837 20.4302 78.6961 20.2933 78.7822 20.1332C78.8715 19.9701 78.9315 19.787 78.9623 19.5839L81.566 19.6023C81.5352 20.0024 81.4229 20.4102 81.229 20.8257C81.0351 21.2381 80.7596 21.6197 80.4026 21.9706C80.0487 22.3184 79.6101 22.5984 79.0869 22.8108C78.5637 23.0231 77.9559 23.1293 77.2634 23.1293C76.3955 23.1293 75.6169 22.9431 74.9275 22.5707C74.2412 22.1983 73.698 21.6505 73.2979 20.9273C72.9008 20.204 72.7023 19.3192 72.7023 18.2728C72.7023 17.2202 72.9055 16.3339 73.3117 15.6137C73.718 14.8905 74.2658 14.3442 74.9552 13.9749C75.6446 13.6025 76.414 13.4163 77.2634 13.4163C77.8605 13.4163 78.4098 13.4978 78.9115 13.6609C79.4132 13.824 79.8533 14.0626 80.2318 14.3765C80.6104 14.6873 80.915 15.0705 81.1459 15.526C81.3767 15.9815 81.5167 16.5031 81.566 17.091Z" fill="black" />
                                <path d="M86.1836 23.1293C85.4142 23.1293 84.7556 22.977 84.2077 22.6723C83.6599 22.3645 83.2398 21.9367 82.9474 21.3889C82.6551 20.838 82.5089 20.1994 82.5089 19.4731C82.5089 18.7468 82.6551 18.1097 82.9474 17.5619C83.2398 17.011 83.6599 16.5832 84.2077 16.2785C84.7556 15.9707 85.4142 15.8168 86.1836 15.8168C86.953 15.8168 87.6116 15.9707 88.1595 16.2785C88.7073 16.5832 89.1274 17.011 89.4198 17.5619C89.7121 18.1097 89.8583 18.7468 89.8583 19.4731C89.8583 20.1994 89.7121 20.838 89.4198 21.3889C89.1274 21.9367 88.7073 22.3645 88.1595 22.6723C87.6116 22.977 86.953 23.1293 86.1836 23.1293ZM86.2021 21.2458C86.4175 21.2458 86.6037 21.1735 86.7607 21.0288C86.9176 20.8842 87.0392 20.678 87.1254 20.4102C87.2115 20.1425 87.2546 19.8239 87.2546 19.4546C87.2546 19.0822 87.2115 18.7637 87.1254 18.499C87.0392 18.2312 86.9176 18.025 86.7607 17.8804C86.6037 17.7357 86.4175 17.6634 86.2021 17.6634C85.9743 17.6634 85.7789 17.7357 85.6158 17.8804C85.4527 18.025 85.328 18.2312 85.2418 18.499C85.1557 18.7637 85.1126 19.0822 85.1126 19.4546C85.1126 19.8239 85.1557 20.1425 85.2418 20.4102C85.328 20.678 85.4527 20.8842 85.6158 21.0288C85.7789 21.1735 85.9743 21.2458 86.2021 21.2458Z" fill="black" />
                                <path d="M93.4407 19.0114V23.0001H90.8924V15.9092H93.3114V17.2572H93.3853C93.5392 16.8078 93.81 16.4554 94.1978 16.2C94.5887 15.9446 95.0442 15.8168 95.5643 15.8168C96.0659 15.8168 96.5014 15.9322 96.8707 16.1631C97.2431 16.3908 97.5309 16.7047 97.734 17.1048C97.9402 17.5049 98.0418 17.962 98.0387 18.4759V23.0001H95.4904V19.0114C95.4935 18.6606 95.4042 18.3851 95.2227 18.1851C95.0442 17.985 94.7949 17.885 94.4748 17.885C94.2655 17.885 94.0824 17.9312 93.9254 18.0235C93.7715 18.1128 93.6531 18.242 93.57 18.4113C93.4869 18.5775 93.4438 18.7775 93.4407 19.0114Z" fill="black" />
                                <path d="M101.845 19.0114V23.0001H99.2967V13.5455H101.753V17.2572H101.827C101.987 16.8048 102.253 16.4524 102.625 16.2C102.998 15.9446 103.445 15.8168 103.969 15.8168C104.47 15.8168 104.906 15.9307 105.275 16.1584C105.647 16.3862 105.935 16.7001 106.138 17.1002C106.345 17.5003 106.446 17.9589 106.443 18.4759V23.0001H103.895V19.0114C103.898 18.6606 103.81 18.3851 103.632 18.1851C103.456 17.985 103.205 17.885 102.879 17.885C102.673 17.885 102.491 17.9312 102.334 18.0235C102.18 18.1128 102.06 18.242 101.974 18.4113C101.891 18.5775 101.848 18.7775 101.845 19.0114Z" fill="black" />
                                <path d="M111.099 23.1293C110.342 23.1293 109.689 22.9847 109.141 22.6954C108.597 22.403 108.176 21.9844 107.881 21.4397C107.589 20.8919 107.442 20.2363 107.442 19.4731C107.442 18.7406 107.59 18.1004 107.886 17.5526C108.181 17.0048 108.598 16.5785 109.137 16.2739C109.675 15.9692 110.311 15.8168 111.043 15.8168C111.579 15.8168 112.064 15.8999 112.498 16.0661C112.931 16.2323 113.302 16.4739 113.61 16.7909C113.918 17.1048 114.155 17.4865 114.321 17.9358C114.487 18.3851 114.57 18.8914 114.57 19.4546V20.0455H108.237V18.6421H112.225C112.222 18.439 112.17 18.2605 112.068 18.1066C111.97 17.9496 111.836 17.8281 111.667 17.7419C111.5 17.6526 111.311 17.608 111.099 17.608C110.893 17.608 110.703 17.6526 110.531 17.7419C110.359 17.8281 110.22 17.9481 110.115 18.102C110.014 18.2559 109.96 18.4359 109.954 18.6421V20.1563C109.954 20.3841 110.002 20.5872 110.097 20.7657C110.192 20.9442 110.329 21.0842 110.508 21.1858C110.686 21.2874 110.902 21.3381 111.154 21.3381C111.33 21.3381 111.49 21.3135 111.634 21.2643C111.782 21.215 111.908 21.1442 112.013 21.0519C112.117 20.9565 112.194 20.8426 112.244 20.7103H114.57C114.49 21.2027 114.301 21.6305 114.002 21.9937C113.704 22.3538 113.308 22.6338 112.816 22.8339C112.327 23.0308 111.754 23.1293 111.099 23.1293Z" fill="black" />
                                <path d="M119.026 23.1293C118.257 23.1293 117.598 22.977 117.051 22.6723C116.503 22.3645 116.083 21.9367 115.79 21.3889C115.498 20.838 115.352 20.1994 115.352 19.4731C115.352 18.7468 115.498 18.1097 115.79 17.5619C116.083 17.011 116.503 16.5832 117.051 16.2785C117.598 15.9707 118.257 15.8168 119.026 15.8168C119.722 15.8168 120.324 15.943 120.831 16.1954C121.342 16.4447 121.738 16.7986 122.018 17.2572C122.298 17.7127 122.439 18.2482 122.443 18.8637H120.079C120.045 18.4913 119.937 18.2082 119.756 18.0143C119.577 17.8173 119.346 17.7188 119.063 17.7188C118.842 17.7188 118.648 17.7834 118.482 17.9127C118.315 18.0389 118.186 18.2312 118.094 18.4898C118.002 18.7452 117.955 19.0668 117.955 19.4546C117.955 19.8424 118.002 20.1655 118.094 20.4241C118.186 20.6795 118.315 20.8719 118.482 21.0011C118.648 21.1273 118.842 21.1904 119.063 21.1904C119.251 21.1904 119.417 21.1473 119.562 21.0611C119.707 20.9719 119.823 20.8426 119.913 20.6734C120.005 20.501 120.06 20.2917 120.079 20.0455H122.443C122.433 20.6703 122.29 21.215 122.013 21.6798C121.736 22.1414 121.344 22.4984 120.836 22.7508C120.331 23.0031 119.728 23.1293 119.026 23.1293ZM118.602 22.9631H119.506L119.433 23.3879C119.799 23.4432 120.084 23.5725 120.287 23.7756C120.49 23.9788 120.593 24.2311 120.596 24.5327C120.602 25.0313 120.357 25.4237 119.862 25.7099C119.37 25.9962 118.691 26.1393 117.826 26.1393V25.1606C118.282 25.1606 118.629 25.1113 118.869 25.0129C119.109 24.9174 119.236 24.7759 119.248 24.5881C119.26 24.4158 119.193 24.2727 119.045 24.1588C118.9 24.048 118.679 23.9695 118.38 23.9234L118.602 22.9631Z" fill="black" />
                                <path d="M125.47 23.1109C125.017 23.1109 124.617 23.037 124.27 22.8893C123.925 22.7385 123.654 22.5107 123.457 22.206C123.26 21.9013 123.162 21.5136 123.162 21.0427C123.162 20.6549 123.228 20.324 123.36 20.0501C123.492 19.7731 123.677 19.5469 123.914 19.3715C124.151 19.1961 124.426 19.0622 124.74 18.9699C125.057 18.8776 125.399 18.8175 125.765 18.7898C126.162 18.7591 126.481 18.7221 126.721 18.679C126.964 18.6329 127.139 18.5698 127.247 18.4898C127.355 18.4067 127.409 18.2974 127.409 18.162V18.1435C127.409 17.9589 127.338 17.8173 127.196 17.7188C127.055 17.6203 126.873 17.5711 126.652 17.5711C126.409 17.5711 126.21 17.6249 126.056 17.7327C125.905 17.8373 125.815 17.9989 125.784 18.2174H123.439C123.469 17.7865 123.606 17.3895 123.849 17.0263C124.096 16.6601 124.454 16.3677 124.925 16.1492C125.396 15.9276 125.984 15.8168 126.689 15.8168C127.196 15.8168 127.652 15.8768 128.055 15.9969C128.458 16.1138 128.801 16.2785 129.085 16.4908C129.368 16.7001 129.583 16.9463 129.731 17.2295C129.882 17.5095 129.957 17.8142 129.957 18.1435V23.0001H127.575V22.0029H127.52C127.378 22.2676 127.206 22.4815 127.002 22.6446C126.802 22.8077 126.573 22.9262 126.315 23.0001C126.059 23.0739 125.778 23.1109 125.47 23.1109ZM126.301 21.5043C126.495 21.5043 126.676 21.4643 126.846 21.3843C127.018 21.3043 127.158 21.1889 127.266 21.0381C127.373 20.8873 127.427 20.7041 127.427 20.4887V19.8978C127.359 19.9255 127.287 19.9517 127.21 19.9763C127.136 20.0009 127.056 20.024 126.97 20.0455C126.887 20.0671 126.798 20.0871 126.702 20.1055C126.61 20.124 126.513 20.1409 126.412 20.1563C126.215 20.1871 126.053 20.2379 125.927 20.3087C125.804 20.3764 125.711 20.461 125.65 20.5626C125.591 20.6611 125.562 20.7718 125.562 20.895C125.562 21.0919 125.631 21.2427 125.77 21.3474C125.908 21.452 126.085 21.5043 126.301 21.5043Z" fill="black" />
                                <path d="M135.828 18.2728V20.1932H131.396V18.2728H135.828Z" fill="black" />
                                <path d="M139.893 19.0114V23.0001H137.345V15.9092H139.764V17.2572H139.837C139.991 16.8078 140.262 16.4554 140.65 16.2C141.041 15.9446 141.496 15.8168 142.016 15.8168C142.518 15.8168 142.954 15.9322 143.323 16.1631C143.695 16.3908 143.983 16.7047 144.186 17.1048C144.392 17.5049 144.494 17.962 144.491 18.4759V23.0001H141.943V19.0114C141.946 18.6606 141.856 18.3851 141.675 18.1851C141.496 17.985 141.247 17.885 140.927 17.885C140.718 17.885 140.535 17.9312 140.378 18.0235C140.224 18.1128 140.105 18.242 140.022 18.4113C139.939 18.5775 139.896 18.7775 139.893 19.0114Z" fill="black" />
                                <path d="M149.165 23.1293C148.396 23.1293 147.737 22.977 147.189 22.6723C146.641 22.3645 146.221 21.9367 145.929 21.3889C145.637 20.838 145.49 20.1994 145.49 19.4731C145.49 18.7468 145.637 18.1097 145.929 17.5619C146.221 17.011 146.641 16.5832 147.189 16.2785C147.737 15.9707 148.396 15.8168 149.165 15.8168C149.934 15.8168 150.593 15.9707 151.141 16.2785C151.689 16.5832 152.109 17.011 152.401 17.5619C152.694 18.1097 152.84 18.7468 152.84 19.4731C152.84 20.1994 152.694 20.838 152.401 21.3889C152.109 21.9367 151.689 22.3645 151.141 22.6723C150.593 22.977 149.934 23.1293 149.165 23.1293ZM149.184 21.2458C149.399 21.2458 149.585 21.1735 149.742 21.0288C149.899 20.8842 150.021 20.678 150.107 20.4102C150.193 20.1425 150.236 19.8239 150.236 19.4546C150.236 19.0822 150.193 18.7637 150.107 18.499C150.021 18.2312 149.899 18.025 149.742 17.8804C149.585 17.7357 149.399 17.6634 149.184 17.6634C148.956 17.6634 148.76 17.7357 148.597 17.8804C148.434 18.025 148.309 18.2312 148.223 18.499C148.137 18.7637 148.094 19.0822 148.094 19.4546C148.094 19.8239 148.137 20.1425 148.223 20.4102C148.309 20.678 148.434 20.8842 148.597 21.0288C148.76 21.1735 148.956 21.2458 149.184 21.2458Z" fill="black" />
                                <path d="M160.355 18.2174H158.01C157.998 18.0727 157.947 17.9481 157.858 17.8435C157.769 17.7388 157.653 17.6588 157.512 17.6034C157.373 17.5449 157.219 17.5157 157.05 17.5157C156.831 17.5157 156.644 17.5557 156.487 17.6357C156.33 17.7157 156.253 17.8296 156.256 17.9773C156.253 18.082 156.298 18.1789 156.39 18.2682C156.485 18.3574 156.668 18.4267 156.939 18.4759L158.38 18.7344C159.106 18.8668 159.646 19.0899 160 19.4038C160.357 19.7147 160.537 20.1317 160.54 20.6549C160.537 21.1596 160.386 21.5982 160.088 21.9706C159.792 22.3399 159.387 22.6261 158.873 22.8293C158.363 23.0293 157.779 23.1293 157.124 23.1293C156.041 23.1293 155.193 22.9077 154.58 22.4646C153.971 22.0214 153.631 21.4366 153.56 20.7103H156.09C156.124 20.935 156.234 21.1088 156.422 21.232C156.613 21.352 156.853 21.412 157.142 21.412C157.376 21.412 157.569 21.372 157.719 21.292C157.873 21.212 157.952 21.0981 157.955 20.9504C157.952 20.8149 157.884 20.7072 157.752 20.6272C157.622 20.5472 157.419 20.4825 157.142 20.4333L155.887 20.2117C155.163 20.0855 154.622 19.8455 154.262 19.4915C153.902 19.1376 153.723 18.6821 153.726 18.1251C153.723 17.6326 153.852 17.2156 154.114 16.874C154.379 16.5293 154.756 16.2677 155.245 16.0892C155.737 15.9076 156.321 15.8168 156.995 15.8168C158.019 15.8168 158.827 16.0292 159.418 16.4539C160.012 16.8786 160.325 17.4664 160.355 18.2174Z" fill="black" />
                            </svg>
                        </a>
                    </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">Redirecionando em segundos...</p>
            </div>
            <MetaPixel></MetaPixel>
        </div>
    );
}
