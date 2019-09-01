//packages
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

//models
import { Repository } from 'src/app/components/repository/shared/repository.model';

//services
import { RepositoryService } from 'src/app/components/repository/shared/repository.service';

@Component({
  selector: 'repository-private',
  templateUrl: './repository-private.component.html',
  styleUrls: ['./repository-private.component.css']
})
export class RepositoryPrivateComponent implements OnInit {

  textSearch: string;

  constructor(
    private service: RepositoryService
    ) { }

  ngOnInit() {
    this.service.getAllRepositories();
  }

  onSearchRepositories(){
    this.service.getRepositoryByUser(this.textSearch);
  }
}
