export const projects = [
    {
        id: 1,
        title: 'Pickblue',
        subtitle: 'Making digital art easier to buy and sell in Indonesia.',
        imageSrc: [
            'https://res.cloudinary.com/diljekoto/image/upload/v1789148801/pickblue-slide1_nhgpzb.png',
            'https://res.cloudinary.com/diljekoto/image/upload/v1789148803/pickblue-slide2_tozs97.png',
        ],
        platform: 'Web Application',
        techStack: ['Next.js', 'NestJS', 'MySQL'],
        timeframe: '4 Months - Currently On Development',
        overview:
            'PickBlue is a digital marketplace built for creators to upload and sell their work. I worked across both the frontend and backend, building features around authentication, role-based access, product management, and payment integration. The platform currently supports online payments, while the creator disbursement system is still being developed.',
        link: 'https://app-dev.pickblue.cloud',
    },
    {
        id: 2,
        title: 'GGM - Dashboard',
        subtitle: 'Making production data easier to monitor.',
        imageSrc: ['https://res.cloudinary.com/diljekoto/image/upload/v1789148803/ggm-slide1_quxk5e.png', 'https://res.cloudinary.com/diljekoto/image/upload/v1789148802/ggm-slide2_jxlmyg.png'],
        platform: 'Web Application',
        techStack: ['Vue.js', 'Laravel API', 'Apache-ECharts'],
        timeframe: '4 Months - Internship Project',
        overview:
            'Gading Gadjah Mada Dashboard is a web-based dashboard built to help monitor cigarette production data. During my internship as a Frontend Developer, I worked on building the interface, integrating data from the existing API, and creating visualizations that made production information easier to understand and monitor.',
        link: 'https://dashboard-ggm.aksa.app',
    },
    {
        id: 3,
        title: 'Bisindo',
        subtitle: 'Recognizing Indonesian sign language through computer vision.',
        imageSrc: [
            'https://res.cloudinary.com/diljekoto/image/upload/v1789148802/bisindo-slide1_egffy5.png',
            'https://res.cloudinary.com/diljekoto/image/upload/v1789148802/bisindo-slide2_wnaprj.png',
        ],
        platform: 'Machine Learning Web Application',
        techStack: ['Python', 'Efficient NetV2', 'MobileNetV3', 'OpenCV', 'MediaPipe', 'Hugging Face'],
        timeframe: 'Thesis Project - 2026',
        overview:
            'BISINDO is a machine learning project focused on recognizing Indonesian Sign Language through computer vision. The system uses transfer learning with EfficientNetV2 and MobileNetV3 to classify sign language gestures, supported by OpenCV and MediaPipe for visual processing and landmark detection. The final model was deployed as an interactive application on Hugging Face.',
        link: 'https://huggingface.co/spaces/aliefkhairul/bisindo-v0',
    },
    {
        id: 4,
        title: 'Effectt.art',
        subtitle: 'Platform to showcase and order 3D motion design.',
        imageSrc: [
            'https://res.cloudinary.com/diljekoto/image/upload/v1789148802/effecttart-slide1_gqmcrr.png',
            'https://res.cloudinary.com/diljekoto/image/upload/v1789148802/effecttart-slide2_rs84uu.png',
        ],
        platform: 'Web Application',
        techStack: ['Next.js', 'Supabase'],
        timeframe: '1 Week - Personal Project',
        overview:
            'Effectt.art is a personal platform designed to showcase my 3D motion design portfolio and allow users to place custom orders. The orders are directly saved into the database and managed through a basic order list system.',
        link: 'https://effectt.art',
    },
];
