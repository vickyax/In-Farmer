<!--Hero-->
<div class="pt-24 bg-gradient-to-b from-green-200 to-green-500">
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <!--Left Col-->
        <div class="flex flex-col w-full justify-center items-center text-center md:text-center animate-fadeInLeft">
            <p class=" tracking-loose w-full text-green-700 opacity-[80%] shine-animation">Farming made easier</p>
            <h1 class="my-4  text-5xl font-bold leading-tight ">
               Be Independent and Farm at your own pace
            </h1>
            <p class="leading-normal text-2xl mb-8 text-green-700 ">
                Register yourself as a Farmer, Retailer or a Transporter
            </p>
            <button
                class="flex text-center justfy-center items-center mx-auto lg:mx-0 hover:underline bg-green-700 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-110 duration-300 ease-in-out"
            >
                Get Started
            </button>
        </div>
        <!--Right Col-->
		<div class="w-full md:w-full py-6 text-center animate-fadeInRight">
            <img class="w-full object-cover" src="hero2.jpg" alt="hero" />
        </div>
    </div>
</div>
<div class="relative -mt-12 lg:-mt-24">
    <svg
        viewBox="0 0 1428 174"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
    >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#34d399" fill-rule="nonzero">
                <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.3"
                />
                <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.3"
                />
                <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    opacity="0.5"
                />
            </g>
            <g transform="translate(-4.000000, 76.000000)" fill="#6ee7b7" fill-rule="nonzero">
                <path
                    d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
                />
            </g>
        </g>
    </svg>
</div>

<!-- Add Tailwind CSS for animations -->
<style>
	.gradient-glaze {
    position: relative;
    display: inline-block;
    background: linear-gradient(90deg, rgba(80, 70, 227, 0.2), rgba(245, 18, 18, 0.6), rgba(255, 255, 255, 0.2));
    background-size: 200% auto;
    color: #b64545; /* Your base text color */
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: glaze-animation 6s linear infinite;
}

@keyframes glaze-animation {
    0% {
        background-position: 200% center;
    }
    100% {
        background-position: -200% center;
    }
}


	.shine-animation {
    position: relative;
    overflow: hidden; /* Ensures the shine effect doesn't go beyond the element */
    display: inline-block; /* Ensures the shine effect aligns with the text */
}

.shine-animation::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 100%
    );
    animation: shine 2s infinite;
}

@keyframes shine {
    0% {
        left: -100%;
    }
    50% {
        left: 100%;
    }
    100% {
        left: 100%;
    }
}

    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    .animate-fadeInLeft {
        animation: fadeInLeft 1s ease-in-out;
    }
    .animate-fadeInRight {
        animation: fadeInRight 1s ease-in-out;
    }
</style>
