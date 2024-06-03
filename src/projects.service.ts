import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    getProjects() {
        return [
            { title: 'Algorithmic Trading...', description: '...' },
            { title: 'ML-Netflix-Movie-Recommendation...', description: '...' },
            { title: 'Dijkstra in Real World maps - OpenAI', description: '...' },
            { title: 'Decentralized Exchange Automation...', description: '...' }
        ];
    }
}
