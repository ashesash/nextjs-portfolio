import Blog from '/public/assets/project/news.png';
import Meydit from '/public/assets/project/meydit.png';
import AI from '/public/assets/project/aiTravelbot.png';
import Learnable from '/public/assets/project/learnable.png';
// import Portfolio from '/public/assets/project/portfolio.png';

export const projectData = [
    {
        id: 1,
        title: 'Meydit',
        img: Meydit,
        projectUrl: 'https://meyd.it',
        tech: 'ReactJS | Next.js | AdonisJS | Redux | Stripe | AWS | PostgreSQL | MaterialUI',
        description: 'A marketplace for slow fashion. Users can connect with selected creatives on the platform to get bespoke pieces made for them in addition to other services to prolong lives their clothes.',
    },
    {
        id: 2,
        title: 'GenAI Travel Planner',
        img: AI,
        gitUrl: 'https://github.com/ashesash/AI-TravelBot',
        projectUrl: 'https://traveleasy.streamlit.app/',
        tech: 'Python | Flask | OpenAI API',
        description: 'Travel Planner that leverages generative AI to curate your trip based on certain questions the user is prompted to answer',
    },
    {
        id: 3,
        title: 'Thunder News Blog',
        img: Blog,
        gitUrl: 'https://github.com/ashesash/django-news-project',
        projectUrl: 'https://thunder-news.fly.dev/',
        tech: 'HTML | CSS | Django',
        description: 'A news blog built with Django. Has a carousel display for the latest news. Easy sign up allows users to write their own blogs',
    },
    {
        id: 4,
        title: 'Workshop Sign-up Platform',
        img: Learnable,
        gitUrl: 'https://github.com/ashesash/react-mentoring-platform',
        projectUrl: 'https://github.com/ashesash',
        tech: 'HTML | CSS | React | Django',
        description: 'A platform for workshops. It allows for users to organise and register their own workshop or if they would like to volunteer for another event, they can sign up.',
    },
    // {
    //     id: 5,
    //     title: 'Portfolio Website',
    //     img: Portfolio,
    //     gitUrl: 'https://github.com/ashesash/nextjs-portfolio',
    //     tech: 'Python, Flask, ChatGPT API',
    //     description: 'My personal portfolio website.',
    // },
];
