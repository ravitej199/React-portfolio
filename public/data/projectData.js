import Memory1 from '../memory1.png'
import Memory2 from '../memory2.png'
import scraping1 from '../webscraping1.png'
import scraping2 from '../webscraping2.png'
import pet1 from '../pet2.png'
import pet2 from '../pet1.png'
import dng1 from '../dng2.png'
import dng2 from '../dng1.png'
import shg from '../shg.png'
import ayuci1 from '../ayuci1.png'
import ayuci2 from '../ayuci2.png'
import smart from '../smart1.png'
import asset from '../asset.png'
import mybio1 from '../mybio1.png'
import mybio2 from '../mybio2.png'
import mybio3 from '../mybio3.png'
import mybio4 from '../mybio4.png'

export const ProjectList = [
    {
        link:"https://www.ayuci.com/",
        name:"AYUCI",
        images:[ayuci1],
        stack: ["MaterialUI", "ReactJs", "GoLang", "Mysql", "Redis", "Git", "Docker"],
        content:`AYUCI is a hospital management  software solution, built entirely on the innovative SaaS platform.
        I was enterested with developing the back-end(GoLang) and Database. 
        Material UI and CSS have been used to create a user
        interface. On the Devops side, to deploy backend i was managing AWS
        services like EC2 for computing resources, RDS for database management,
        Caddy Server for web serving (which automatically implements HTTPS at no
        SSL certificate cost). S3 bucket for scalable storage has also been
        implemented. for this application Azile managment system has been
        managed.`
    },
    {
        link:"https://mysmartshala.com",
        name:"My Smartshala",
        images:[smart],
        stack: ["NextJs", "GoLang", "Mysql", "Redis", "Git", "Docker"],
        content:`My Smartshala is a ERP, built entirely on the innovative SaaS platform.
        I was enterested with developing the front-end. 
        Material UI and CSS have been used to create a user
        interface. S3 bucket for scalable storage of test report has also been
        implemented. for this application Azile managment system has been
        managed.`
    },
    {
        link:"https://samarthmeditech.com",
        name:"Asset Management",
        images:[asset],
        stack: ["NextJs", "GoLang", "Mysql", "Redis", "Git", "Docker"],
        content:`Asset management is a software solution for assigning, maintaining, transporting, tracking and 
        disposing of organization assets in the most cost-effective manner.
        I was enterested with developing the back-end(GoLang) and Database. 
        Material UI and CSS have been used to create a user
        interface. On the Devops side, to deploy backend i was managing AWS
        services like EC2 for computing resources, RDS for database management,
        Caddy Server for web serving (which automatically implements HTTPS at no
        SSL certificate cost). S3 bucket for scalable storage has also been
        implemented. for this application Azile managment system has been
        managed.`
    },
    {
        link:"https://apps.apple.com/in/app/mybiobackup/id6459410069",
        name:"My Biobackup",
        images:[mybio4,mybio1,mybio2,mybio3],
        stack: ["NextJs", "NodeJs", "CapacitorJs", "ExpressJs", "Mysql", "Redis", "Git"],
        content:`My Biobackup is a Personal Health Record(PHR) app that helps you to store & manage your health 
        reports and body vitals. With Eka care you can add lab reports, body vitals such as Blood Pressure(BP), 
        Blood sugar level & more. I was entrusted with developing front-end using NextJS & Tailwind CSS
        Our team implemented S3 bucket for scalable storage of test report has also been
        implemented. for this application Azile managment system has been
        managed.`
    },
]

export const HobbyList = [
     {
        link:"",
        name:"Self Help Group",
        images:[shg],
        stack: ["Python", "Jinja", "Flask", "sqlAlchemy"],
        content:`This Is a website to help create a self help group for rural regions,
        it is able help small business owners to lend money by grow other small scale business.
        It keeps track of money lent to the users on the recommendation of four or more users.
        This Project is Done By using Python, Falsk and ejs, sqlAlchemy`
    },
    {
        link:"",
        name:"Web Scraping",
        images:[scraping2],
        stack: ["Python", "Jinja Template", "Flask", "sqlAlchemy"],
        content:`This Is Web scraping website used to obtain large amounts of 
        data from websites. Most of this data is unstructured data in an HTML 
        format. Web Scrapers can extract all the data on particular sites or the
        specific data that a user wants. Ideally, it’s best if you specify the
        data you want so that the web scraper only extracts that data quickly.     
        This Project is Done By using Python, Jinja template , Beautiful Soup , and Jquery`
    },
    {
        link:"",
        name:"Pet Super care",
        images:[pet1],
        content:`This Is a super website for pets with a pet Clinic Appointment system ,
        which is able to store legacy data for multiple client pet owners with multiple pet 
        and also capable of scheduling appointments from both doctor and client side.
        This Project is Done By using Html , Css and Javascript, NodeJs, MongoDB`
    },
    {
        link:"",
        name:"Drag and Drop Game",
        images:[dng1],
        stack: ["HTML", "CSS", "JavaScript"],
        content:`This Is Game in which the player has to use their imagination to put together creative shapes and 
        come up with a design this project is in my github , Based on your creativity the sky is the limit 
        The Game This Project is Done By using Html , Css and Javascript`
    },
    {
        link:"",
        name:"Memory Game",
        images:[Memory1],
        stack: ["HTML", "CSS", "JavaScript"],
        content:`This Is Challenging Game Containing 4x4 Boxes That Highlights A Red Color 
        In Each Random Box For Certain Seconds When User Click All Colored Boxes The 
        Color Of Box Will Be Red And After Picking All Colored Boxes User Will Be Win 
        The Game This Project is Done By using Html , Css and Javascript`
    },
]


export const videoSrc = "https://www.w3schools.com/html/mov_bbb.mp4"
export const audioSrc = "https://cdn.pixabay.com/audio/2024/02/09/audio_94f8f95b25.mp3"
export const timeData = '09:00AM'
 
export const audioComp = {
    name:"Audio Component",
    content:`The Audio Player component is used to embed sound content in a NextJs. 
    It allows browsers to play audio files such as MP3, Ogg, and WAV 
    directly without the need for third-party plugins.`,
    attributes : {
        controls : "Adds built-in controls like play, pause, and volume.",
        muted : "Mutes the audio by default.",
        src : "Specifies the audio file's URL.",
        timeLine: "shows audio current time and duration",
    },
}
export const videoComp = {
    name:"Video Component",
    content:`The video Player element in HTML is used to embed video content in a web page. It provides a standard way to display video files, allowing users to watch video without the need for third-party plugins.`,
    attributes : {
        controls : "Displays built-in controls like play, pause and volume.",
        muted : "Mutes the audio of the video by default.",
        src : "Specifies the video file's URL.",
        timeLine: "shows video current time and duration",
    },
}

export const pickerComp = {
    name:"Time Picker Component",
    content:`A time picker is an interface element that allows users to select a specific time, typically in hours and minutes, from a dropdown or popup. It is useful in forms where users need to input a time (such as appointment scheduling or setting alarms).`,
}

