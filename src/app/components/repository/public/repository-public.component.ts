//packages
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

//models
import { Repository } from 'src/app/components/repository/shared/repository.model';

//services
import { RepositoryService } from 'src/app/components/repository/shared/repository.service';

@Component({
  selector: 'repository-public',
  templateUrl: './repository-public.component.html',
  styleUrls: ['./repository-public.component.css']
})
export class RepositoryPublicComponent implements OnInit {

  textSearch: string;

  constructor(
    private router: Router, 
    private service: RepositoryService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getAllRepositories();
  }

  onSearchRepositories(){
    this.service.getAllRepositoriesByText(this.textSearch);
  }
}
