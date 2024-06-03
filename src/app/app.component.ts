// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'portfolio';
// }


import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../projects.service';
import { RouterOutlet } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Aman Alisha Shaik';
  title = 'Forward-Thinking Computer Science Engineer';
  email = 'amanabdul21@gmail.com';
  phone = '7867082068';
  location = '524003, Nellore, India';
  summary = 'A dynamic and self-motivated Computer Science Engineer with a relentless drive for innovation and a passion for coding. Known for seamlessly translating business objectives into cutting-edge technical solutions, I thrive on challenges and excel in both independent and team-oriented environments. With a solid foundation in technology and a keen eye for emerging trends, I am committed to pushing boundaries and delivering';
  skills = ['Angular Framework', 'OpenAI', 'TypeScript', 'Python & FastAPI', 'Machine learning algorithms', 'LLM and NLP', 'Data Structures and algorithms', 'Git & Jenkins'];
  experience = [
    {
      title: 'Software Engineer',
      company: 'NielsenIQ',
      dates: '07/2022 – present',
      responsibilities: [
        'Developed dynamic web applications features using Angular, TypeScript, HTML, and CSS, enhancing user experience by 30%.',
        'Implemented over 10 new features and resolved critical bugs within deadlines, improving application stability by 25%.',
        'Optimized application performance by 20% using ag-grid, am-charts, full-screen ppt, viewport and dark mode.',
        'Created over 100 robust unit test cases, increasing code coverage by 40% and ensuring high-quality code.',
        'Led a team in developing a report builder project, reducing report generation time by 8%.'
      ]
    },
    {
      title: 'Intern',
      company: 'Param Network',
      dates: '04/2022 – 06/2022',
      responsibilities: [
        'Designed and developed a Golang-based bus ticket booking system, handling 500+ concurrent users efficiently.',
        'Implemented innovative solutions, reducing booking processing time by 20%.'
      ]
    }
  ];
  education = [
    { degree: 'Bachelors in Technology', institution: 'Vellore Institute of Technology', dates: '07/2018 – 05/2022' },
    { degree: 'Ratnam Junior College', institution: '', dates: '04/2016 – 04/2018' },
    { degree: 'Narayana Olympiad School', institution: '', dates: '04/2015 – 04/2016' }
  ];
  certifications = [
    'Introduction to Cloud Computing | IBM Skills Network',
    'Getting Started with Git and GitHub | IBM Skills Network',
    'Elements of AI | University of Helsinki',
    'DSA in Python by GFG',
    'Introduction to Web Development with HTML, CSS, JavaScript | IBM Skills Network',
    'Python for Data Science, AI & Development | IBM Skills Network',
    'Microsoft AI-900'
  ];
  projects = [
    { title: 'Algorithmic Trading, Backtest, Optimize & Automate in Python', description: 'Developed automated trading strategies in Python for cryptocurrencies. Optimized trading strategies to maximize returns. Implemented backtesting methodologies to evaluate strategy performance.' },
    { title: 'ML-Netflix-Movie-Recommendation-System', description: 'Conducted a comprehensive case study on machine learning-based movie recommendation systems. Utilized collaborative filtering and content-based filtering techniques to personalize recommendations. Implemented algorithms to enhance user experience and engagement.' },
    { title: 'Dijkstra in Real World maps - OpenAI', description: 'Implemented Dijkstra\'s algorithm in real-world maps using Osmx and networkX libraries. Visualized shortest paths between locations using folium for enhanced understanding. Integrated with OpenAI API to provide dynamic directions for efficient navigation.' },
    { title: 'Decentralized Exchange Automation via Chatbot', description: 'Created a decentralized exchange automation system with a user-friendly chatbot interface. Enabled users to seamlessly execute cryptocurrency swaps by engaging in natural language conversations with the chatbot.' }
  ];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    // Fetch projects from service if needed
    // this.projects = this.projectService.getProjects();
  }
}
