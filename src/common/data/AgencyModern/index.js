import serviceIcon1 from '../../../common/assets/image/agencyModern/services/1.png';
import serviceIcon2 from '../../../common/assets/image/agencyModern/services/2.png';
import serviceIcon3 from '../../../common/assets/image/agencyModern/services/3.png';
import featureIcon1 from '../../../common/assets/image/agencyModern/features/1.png';
import featureIcon2 from '../../../common/assets/image/agencyModern/features/2.png';
import featureIcon3 from '../../../common/assets/image/agencyModern/features/3.png';
import featureIcon4 from '../../../common/assets/image/agencyModern/features/4.png';
import featureIcon5 from '../../../common/assets/image/agencyModern/features/5.png';
import featureIcon6 from '../../../common/assets/image/agencyModern/features/6.png';
import news1 from '../../../common/assets/image/agencyModern/news/1.png';
import news2 from '../../../common/assets/image/agencyModern/news/2.png';
import news3 from '../../../common/assets/image/agencyModern/news/3.png';
import facebook from '../../../common/assets/image/agencyModern/icons/facebook.png';
import dribbble from '../../../common/assets/image/agencyModern/icons/dribbble.png';
import github from '../../../common/assets/image/agencyModern/icons/github.png';
import twitter from '../../../common/assets/image/agencyModern/icons/twitter.png';

const data = {
  leftMenuItems: [
    {
      label: 'Home',
      path: '#home',
      offset: '70',
    },
    {
      label: 'Services',
      path: '#services',
      offset: '70',
    },
    {
      label: 'Features',
      path: '#features',
      offset: '70',
    },
    {
      label: 'News',
      path: '#news',
      offset: '70',
    },
  ],
  rightMenuItems: [
    {
      label: 'Login',
      path: '#home',
      offset: '70',
    },
    {
      label: 'Sign Up',
      path: '#home',
      offset: '70',
    },
  ],
  mobileMenuItems: [
    {
      label: 'Home',
      path: '#home',
      offset: '70',
    },
    {
      label: 'Services',
      path: '#services',
      offset: '70',
    },
    {
      label: 'Features',
      path: '#features',
      offset: '70',
    },
    {
      label: 'News',
      path: '#news',
      offset: '70',
    },
    {
      label: 'Login',
      path: '#',
      offset: '70',
    },
    {
      label: 'Sign Up',
      path: '#',
      offset: '70',
    },
  ],
  services: [
    {
      id: 1,
      icon: serviceIcon1,
      title: 'For Singles',
      description: `We offer a variety of apps to help individuals manage their personal tasks, notes and ideas. Whether you need a simple to-do list app or a more robust note-taking app, we've got you covered.`,
    },
    {
      id: 2,
      icon: serviceIcon2,
      title: 'For Teams',
      description: `Our apps are also perfect for teams looking to collaborate and increase productivity. We offer file sharing and project management tools that make it easy for teams to work together.`,
    },
    {
      id: 3,
      icon: serviceIcon3,
      title: 'For Companies',
      description: `We understand the unique needs of companies and offer enterprise solutions to help streamline operations and improve communication. From custom app development to API integrations, we can help your company stay ahead of the game.`,
    },
  ],
  accordion: [
    {
      id: 1,
      expend: true,
      title: 'Welcome to Qawaz!',
      description: `We're so glad you found us. We're the company behind those apps you've never heard of, like Timeline, easyToDo, Sketchable, and ShareAnything.`,
    },
    {
      id: 2,
      title: 'Our Services',
      description: `We specialize in creating apps that no one wants to use. But hey, if you're looking for a to-do list app or a sketching app, we've got you covered.`,
    },
    {
      id: 3,
      title: "Our Process",
      description: `It's simple really. We come up with an idea, spend a ton of money and time developing it, and then release it to the world where it is promptly ignored. Rinse and repeat.`,
    },
  ],
  WorkHardList: [
    { id: 1, title: 'Timeline' },
    { id: 2, title: 'easyToDo' },
    { id: 3, title: 'MindNode' },
    { id: 4, title: 'Sketchable' },
    { id: 5, title: 'ShareAnything' },
    { id: 6, title: 'PhotoEditor'},
  ],
  features: [
    {
      id: 1,
      icon: featureIcon1,
      title: 'Collaboration Features',
      desc: 'Our apps are designed to make collaboration easy. Share files, assign tasks and communicate with your team in real-time.',
    },
    {
      id: 2,
      icon: featureIcon2,
      title: 'Efficient Task Management',
      desc: 'Our apps are designed to make task management easy. Create and manage to-do lists, set reminders, and track progress.',
    },
    {
      id: 3,
      icon: featureIcon3,
      title: 'Secure Data Storage',
      desc: 'We take data security seriously. Our apps use state-of-the-art encryption to ensure that your data is always safe.',
    },
    {
      id: 4,
      icon: featureIcon4,
      title: 'Customizable Interface',
      desc: 'Our apps are designed to be flexible and customizable. Tailor them to your specific needs and preferences.',
    },
    {
      id: 5,
      icon: featureIcon5,
      title: '24/7 Support',
      desc: 'We are here to help. Our dedicated support team is available 24/7 to answer any questions and provide assistance.',
    },
    {
      id: 6,
      icon: featureIcon6,
      title: 'Cross-Platform Compatibility',
      desc: 'Our apps are designed to work seamlessly across multiple platforms, including iOS, Android, and web.',
    },
  ],
  posts: [
    {
      id: 1,
      icon: news1,
      title: 'How to work with prototype design with adobe xd featuring tools',
      comments_count: 22,
    },
    {
      id: 2,
      icon: news2,
      title: 'Create multiple artboard by using figma prototyping development',
      comments_count: 15,
    },
    {
      id: 3,
      icon: news3,
      title: 'Convert your web layout theming easily with sketch zeplin extension',
      comments_count: 18,
    },
  ],
  aboutUs: [
    {
      id: 2,
      title: 'Customer Support',
    },
    {
      id: 3,
      title: 'About Us',
    },
    {
      id: 4,
      title: 'Copyright',
    },
  ],
  ourInformation: [
    {
      id: 2,
      title: 'Privacy Policy',
    },
    {
      id: 3,
      title: 'Terms & Conditions',
    },
    // {
    //   id: 4,
    //   title: 'Site Map',
    // },
  ],
  myAccount: [
    {
      id: 1,
      title: 'Press inquiries',
    },
    {
      id: 2,
      title: 'Social media',
    },
    {
      id: 3,
      title: 'directories',
    },
    {
      id: 4,
      title: 'Images & B-roll',
    },
  ],
  social: [
    {
      id: 1,
      icon: facebook,
      link : "https://www.facebook.com/qawaz/",
      title: 'Facebook',
    },
    {
      id: 2,
      icon: twitter,
      link : "https://twitter.com/QawazOfficial",
      title: 'Twitter',
    },
    {
      id: 3,
      icon: github,
      link : "https://github.com/Qawaz/",
      title: 'Github',
    }
  ],
};
export default data;
