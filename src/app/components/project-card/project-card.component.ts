import { Component, OnInit } from '@angular/core';
import { projects, Projects } from '../../Model/project.interface';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  projectsList: Projects[] = [];

  constructor() {
    this.projectsList = projects;
  }

  ngOnInit(): void {
  }

}
