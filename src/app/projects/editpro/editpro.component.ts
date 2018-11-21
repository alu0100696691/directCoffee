import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../servicios/project.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editpro',
  templateUrl: './editpro.component.html',
  styleUrls: ['./editpro.component.css']
})
export class EditproComponent implements OnInit {

  projectForm: FormGroup;
  project: any;  
  id: string;

  constructor(private pf: FormBuilder,
    private projectService: ProjectService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {
      this.activatedRouter.params
             .subscribe( parameters => {
               this.id = parameters['id'];
               this.projectService.getProject(this.id)
                      .subscribe ( project => this.project = project )
             });
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
    this.projectService.putProject(this.project, this.id)
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
