import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../../servicios/project.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-addpro',
  templateUrl: './addpro.component.html',
  styleUrls: ['./addpro.component.css']
})
export class AddproComponent implements OnInit {

  projectForm: FormGroup;
  project: any;  

  constructor(private pf: FormBuilder,
    private projectService: ProjectService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {
     
    }

  ngOnInit() {
    this.projectForm = this.pf.group({
      name: ['', Validators.required ],
      technology: ['', Validators.required ],
      manager: ['', Validators.required ],
      description: ['', Validators.required ]       
    });   
  }

  onSubmit(){
    this.project = this.saveProject();
    this.projectService.postProject(this.project)
           .subscribe(newpro => {
            this.router.navigate(['/projects'])
           })
    this.projectForm.reset();
  }

  saveProject() {
    const saveProject = {
      name: this.projectForm.get('name').value,
      technology: this.projectForm.get('technology').value,
      manager: this.projectForm.get('manager').value,
      description: this.projectForm.get('description').value, 
      uid: this.projectService.getCurrentUser().uid,     
    }
    return saveProject;
  }

}
